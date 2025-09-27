const team = {
  name: "The A-Team",
  minNameLength: 3,
  members: [],

  // Phương thức thông thường để kiểm tra tên hợp lệ
  isValidName: function(name) {
    // Khi được 'filter' gọi, 'this' ở đây sẽ là 'undefined' (trong strict mode)
    // hoặc đối tượng toàn cục 'window' (trong non-strict mode).
    // Cả hai đều không có thuộc tính 'minNameLength'.
    console.log(this); // Sẽ in ra 'undefined' hoặc 'window'
    return name.length > this.minNameLength;
  },

  addMembers: function(newMembers) {
    // Chúng ta truyền phương thức 'this.isValidName' làm callback
    const validMembers = newMembers.filter(this.isValidName); // <-- Vấn đề xảy ra ở đây
    this.members = [...this.members, ...validMembers];
  }
};

const candidates = ["Al", "Bob", "Charlie", "Di"];
try {
  team.addMembers(candidates);
} catch (e) {
  console.error("Đã xảy ra lỗi:", e.message);
  // Output: Đã xảy ra lỗi: Cannot read properties of undefined (reading 'minNameLength')
}

console.log(team.members); // Output: [] (vì đã xảy ra lỗi)