function sumof2(sum, array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof sum === 'number' && typeof array[i] === 'number') {
      for (let j = i + 1; j < array.length; j++) {
        let arr2 = [];
        if (array[i] + array[j] === sum) {
          arr2.push(array[i]);
          arr2.push(array[j]);
          arr.push(arr2);
        }
      }
    }
  }
  return arr;
}
sumof2(5, [1, 2, 3, 4, 5, 6]);

function closesum(callback, sum, array) {
  let arr1 = callback(sum, array);
  console.log(arr1);
  let minpair;
  for (let i = 1; i < arr1.length; i++) {
    if (Math.abs(arr1[i][0] - arr1[i][1]) < Math.abs(arr1[i - 1][0] - arr1[i - 1][1])) {
      minpair = arr1[i];
    }
  }
  console.log(minpair);
  return minpair;
}
closesum(sumof2, 5, [1, 2, 3, 4, 5, 6]);

//sum of three

function sumof3(sum, array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof sum === 'number' && typeof array[i] === 'number') {
      for (let j = i + 1; j < array.length; j++) {
        for (let k = j + 1; k < array.length; k++) {
          if (array[i] + array[j] + array[k] === sum) {
            const arr2 = [];
            arr2.push(array[i]);
            arr2.push(array[j]);
            arr2.push(array[k]);
            arr.push(arr2);
          }
        }
      }
    }
  }
  return console.log(arr);
}
sumof3(10, [1, 2, 3, 4, 5, 6]);
