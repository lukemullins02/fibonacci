function fibs(num) {
  let arr = [];
  let prev1;
  let prev2;

  for (let i = 0; i <= num; i++) {
    if (i < 2) arr.push(i);
    if (i >= 2) {
      prev1 = arr[i - 2];
      prev2 = arr[i - 1];
      arr.push(prev1 + prev2);
    }
  }

  return arr;
}

let arr = [];

function fibsRec(n) {
  if (n < 2) {
    return [0, 1];
  } else {
    const arr = fibsRec(n - 1);
    arr.push(arr[n - 1] + arr[n - 2]);
    return arr;
  }
}

console.log(fibsRec(32));
console.log(fibs(32));
