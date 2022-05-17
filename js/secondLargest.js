function findSecondLargest(numberList) {
    let currentSmallest = numberList[0];
    let listLength = numberList.length;
    for (let i = 0; i < listLength; i++){
        currentSmallest = numberList[i];
        for (let j = i; j < listLength; j++){
          if (numberList[j] < currentSmallest){
            let temp = currentSmallest;
            currentSmallest = numberList[j];
            numberList[i] = currentSmallest;
            numberList[j] = temp;
            console.log(numberList);
        }
        console.log("inner loop")
      }
      console.log("outer loop");
    }
    console.log(numberList);
    return numberList[listLength - 2];
}
console.log(findSecondLargest([34,3,5,112,4,78,90]));