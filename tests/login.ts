import { DataReader } from "../services/DataReader.js";
import { LoginPage } from "../pages/LoginPage.js";
import type { ILoginData } from "../types/login-data.js";

async function runLoginTest(){

    const dataReader = new DataReader()
    const loginPage = new LoginPage()
    
    //doc file Json
    const loginCredentials = await dataReader.readXlsxFile<ILoginData>('../data/login-data.xlsx', 'Sheet1')
    if(loginCredentials.length === 0){
        console.log('Khong co du lieu test de chay. Ket thuc');
        return
    }
    let testCaseNumber = 1;

    for (const credential of loginCredentials){
        console.log(`Bat dau voi testcase ${testCaseNumber}, User: ${credential.username}`);
        await loginPage.navigate()
        await loginPage.login(credential)

        const isPassed = await loginPage.verifyLoginResult(credential.expected)

        if(isPassed){
            console.log(`>>>> KET QUA PASSED`);
        }else{
            console.log(`>>>> KET QUA FAILED`)
        }
        console.log(`KET THUC TEST CASE ${testCaseNumber}`);
        
        testCaseNumber++
        
    }

}

runLoginTest()