function insertArray(arr1, arr2, position) {
  if (position < 0 || position > arr1.length) {
    console.log("Vị trí chèn không hợp lệ!");
    return;
  }

  const result = [...arr1.slice(0, position), ...arr2, ...arr1.slice(position)];

  console.log(result);
}
insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3);

insertArray(["a", "b", "e", "f"], ["c", "d"], 2);

insertArray([1, 2, 3], [4, 5], 10);
