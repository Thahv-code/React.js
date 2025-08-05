let checkParity = (input) => {
  if (typeof input !== "number" || !Number.isInteger(input)) {
    console.log("Không phải số nguyên hợp lệ");
  } else {
      Number(input);
    if (input % 2 ===0) {
      console.log("Số chẵn");
    } else {
      console.log("Số lẻ");
    }
  }
};
let number = prompt("Nhập số nguyên: "); 
number = Number(number);
  checkParity(number);
