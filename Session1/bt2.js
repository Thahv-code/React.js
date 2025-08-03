const a = 5;
const arr = [1, 2, 3];

console.log("Giá trị ban đầu của a:", a);
console.log("Giá trị ban đầu của arr:", arr);
try {
  a = 10;
} catch (error) {
  console.error("Lỗi khi gán lại a:", error.message);
}
arr.push(4);
console.log("Giá trị mới của arr sau khi push:", arr);
