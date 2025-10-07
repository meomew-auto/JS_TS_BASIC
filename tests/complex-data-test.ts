import { ComplexDataReader } from '../services/ComplexDataReader.ts';
import type { ComplexUser } from '../types/complex-data.ts';

async function testComplexDataPerformance() {
    console.log('=== Complex Data Performance Test ===\n');
    
    const dataReader = new ComplexDataReader();
    
    console.log('1. Loading 10k complex records...');
    const loadStart = Date.now();
    const data = await dataReader.loadData('./data/complex-data.json');
    const loadEnd = Date.now();
    console.log(`   Load time: ${loadEnd - loadStart}ms\n`);
    
    console.log('2. Testing O(1) access by ID...');
    const accessStart = Date.now();
    const user1 = dataReader.getUserById(1);
    const user5000 = dataReader.getUserById(5000);
    const user9999 = dataReader.getUserById(9999);
    const accessEnd = Date.now();
    console.log(`   Access time: ${accessEnd - accessStart}ms`);
    console.log(`   User 1: ${user1?.username} (${user1?.personalInfo.firstName})`);
    console.log(`   User 5000: ${user5000?.username} (${user5000?.workInfo.department})`);
    console.log(`   User 9999: ${user9999?.username} (${user9999?.account.role})\n`);
    
    console.log('3. Testing multiple ID access...');
    const multiAccessStart = Date.now();
    const multipleUsers = dataReader.getUsersByIds([100, 200, 300, 400, 500]);
    const multiAccessEnd = Date.now();
    console.log(`   Multi-access time: ${multiAccessEnd - multiAccessStart}ms`);
    console.log(`   Retrieved ${multipleUsers.length} users\n`);
    
    console.log('4. Testing search by criteria...');
    const searchStart = Date.now();
    const adminUsers = dataReader.searchUsers({ role: 'admin' });
    const itUsers = dataReader.searchUsers({ department: 'IT' });
    const activeUsers = dataReader.searchUsers({ status: 'active' });
    const highSalaryUsers = dataReader.searchUsers({ salaryMin: 50000 });
    const searchEnd = Date.now();
    console.log(`   Search time: ${searchEnd - searchStart}ms`);
    console.log(`   Admin users: ${adminUsers.length}`);
    console.log(`   IT users: ${itUsers.length}`);
    console.log(`   Active users: ${activeUsers.length}`);
    console.log(`   High salary users: ${highSalaryUsers.length}\n`);
    
    console.log('5. Testing department filtering...');
    const deptStart = Date.now();
    const itDepartment = dataReader.getUsersByDepartment('IT');
    const hrDepartment = dataReader.getUsersByDepartment('HR');
    const deptEnd = Date.now();
    console.log(`   Department filter time: ${deptEnd - deptStart}ms`);
    console.log(`   IT department: ${itDepartment.length} users`);
    console.log(`   HR department: ${hrDepartment.length} users\n`);
    
    console.log('6. Getting statistics...');
    const statsStart = Date.now();
    const stats = dataReader.getStatistics();
    const statsEnd = Date.now();
    console.log(`   Stats generation time: ${statsEnd - statsStart}ms`);
    console.log(`   Total users: ${stats.totalUsers}`);
    console.log(`   Average age: ${stats.averageAge}`);
    console.log(`   Average salary: $${stats.averageSalary.toLocaleString()}`);
    console.log(`   Departments: ${stats.departments}`);
    console.log(`   Department distribution:`, stats.departmentCounts);
    console.log('');
    
    console.log('7. Testing complex queries...');
    const complexStart = Date.now();
    const complexQuery = dataReader.searchUsers({
        role: 'admin',
        department: 'IT',
        salaryMin: 40000,
        ageMin: 25
    });
    const complexEnd = Date.now();
    console.log(`   Complex query time: ${complexEnd - complexStart}ms`);
    console.log(`   Found ${complexQuery.length} admin IT users with salary >40k and age >25`);
    
    if (complexQuery.length > 0) {
        const sample = complexQuery[0];
        if (sample) {
            console.log(`   Sample: ${sample.username} - ${sample.personalInfo.firstName} ${sample.personalInfo.lastName}`);
            console.log(`   Salary: $${sample.workInfo.salary.toLocaleString()}, Age: ${sample.personalInfo.age}`);
        }
    }
    
    console.log('\n=== Performance Summary ===');
    console.log(`Total test time: ${Date.now() - loadStart}ms`);
    console.log(`Memory usage: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`);
    
    console.log('\n=== Record vs Array Access Patterns ===');
    console.log('Record access (O(1)): data[userId] - Instant access by ID');
    console.log('Array access (O(n)): array.find(user => user.id === userId) - Linear search');
    console.log('Record is perfect for: User lookups, caching, quick access');
    console.log('Array is perfect for: Iteration, filtering, sorting');
}

testComplexDataPerformance().catch(console.error);
