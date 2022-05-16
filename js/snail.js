snail = function(array) {
    let length = array.length;
    let formattedArray = [];
    let array4input = [];
    let toReversed1 = [];
    let toReversed2 = [];
    if (length === 1 || length === 0){
      return length ? array[0] : [];
    }
    for (let i = 0; i < length; i++){
      if (i !== 0 && i !== length - 1){
        array4input.push(array[i].slice(1, -1));
      }
      array4input.push()
      for (let j = 0; j < length; j++){
        if (i === 0) {
          formattedArray.push(array[i][j]);
        } else if (i === length - 1){
            toReversed1.unshift(array[i][j]);
        } else if (i !== 0 && i !== length - 1){
            if (j === 0){
              toReversed2.unshift(array[i][j]);
            }
            if (j === length - 1){
              formattedArray.push(array[i][j])
            }
        }
      }
    }
    // formattedArray = [...formattedArray, ...toReversed1, ...toReversed2];
    return [...formattedArray, ...toReversed1, ...toReversed2, ...snail(array4input)]
}

console.log(snail([[1, 2, 3, 4, 5, 6],
     [20, 21, 22, 23, 24, 7],
      [19, 32, 33, 34, 25, 8],
      [18, 31, 36, 35, 26, 9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11]]))