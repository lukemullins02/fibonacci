function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let l = 0;
  let h = arr.length - 1;

  if (l < h) {
    let arr1;
    let arr2;
    let mid = Math.floor((l + h) / 2);
    arr1 = mergeSort(arr.slice(l, mid + 1));
    arr2 = mergeSort(arr.slice(mid + 1, h + 1));
    const result = merge(arr1, arr2);

    return result;
  }
}

function merge(arr1, arr2) {
  let arr = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      arr[k++] = arr1[i++];
    } else {
      arr[k++] = arr2[j++];
    }
  }

  for (; i <= arr1.length - 1; i++) {
    arr[k++] = arr1[i];
  }

  for (; j <= arr2.length - 1; j++) {
    arr[k++] = arr2[j];
  }

  return arr;
}

let arr = [10, 4, 3, 2, 1, 5, 9];
console.log(mergeSort(arr));
