findEvenIndex = (arr) => {
  let leftarr = [0];
  let index = 0;
  const total = (array) => array.reduce((a, b) => a + b, 0);
  function test() {
    while (total(arr.slice(1)) !== total(leftarr)) {
      leftarr.push(arr.shift());
      index++;
      if (total(arr.slice(1)) == total(leftarr)) return index;
    }
    return -1;
  }
  return total(arr.slice(1)) == total(leftarr) ? 0 : test();
};

console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
