const isValid = (arr) => {
  const isReverse = (a, b) => {
    if ((a == "w" && b == "e") || (a == "n" && b == "s")) {
      return true;
    } else {
      return false;
    }
  };
  if (arr.length == 10) {
    let arr1 = arr.slice(4).reverse();
    let arr2 = arr.slice(5);
    let valid = true;
    for (let i = 0; i < arr1.length; i++) {
      if (!isReverse(arr1[i], arr2[i]) || !isReverse(arr2[i], arr1[i])) {
        valid = false;
      }
    }
    return valid;
  }
};
