let numList = [11,3,1,4, 3, 1, 1, 4, 4, 4, 5, 7, 67, 374, 423, 432];

bubbleSort = (numList) => {
    let swapCount = 1;
    while (swapCount) {
        swapCount = 0;
        for (let i =  0; i < numList.length; i++){
            if (numList[i] > numList[i + 1]){
                let tmp = numList[i];
                numList[i] = numList[i + 1]; 
                numList[i + 1] = tmp; 
                swapCount++;
            }
        }
    }
    return numList;
};

console.log(bubbleSort(numList));