let numList = [11,3,1,4, 67,12,374, 423, 1, 432, 3, 1, 1, 4, 4, 4, 5, 7];

marginSort = (numList) => {
    if (numList.length === 1) {
        return numList
    }
    let centerIndex = Math.floor(numList.length / 2);
    let sorted1 = marginSort(numList.slice(0, centerIndex));
    let sorted2 = marginSort(numList.slice(centerIndex));
    let sortedOverall = [];
    let sortedOneCurrent = 0;
    let sortedTwoCurrent = 0;
    while(sortedOverall.length !== (sorted1.length + sorted2.length)){
        if (sortedOneCurrent === sorted1.length){
            sortedOverall = [...sortedOverall, ...sorted2.slice(sortedTwoCurrent)];
        } else if (sortedTwoCurrent === sorted2.length) {
            sortedOverall = [...sortedOverall, ...sorted1.slice(sortedOneCurrent)];
        } else {
               if (sorted1[sortedOneCurrent] <= sorted2[sortedTwoCurrent]){
                    sortedOverall.push(sorted1[sortedOneCurrent]);
                    sortedOneCurrent++;
                } else {
                    sortedOverall.push(sorted2[sortedTwoCurrent]);
                    sortedTwoCurrent++;
                }   
        }
    }
    return sortedOverall;
};

console.log(marginSort(numList));