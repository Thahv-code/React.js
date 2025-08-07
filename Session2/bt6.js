function checkEndString(string, end) {
  string = string.trim();

  return string.endsWith(end);
}
console.log(checkEndString("Hello World", "World")); 
console.log(checkEndString("Hello World", "world")); 
console.log(checkEndString("Hello World", "Hello")); 
console.log(checkEndString("Hello World", " ")); 
