// function sumIntervals(intervals) {
//   const filteredIntervals = [];
//   intervals.forEach((interval) => {
//     if (filteredIntervals.length) {
//       let matched = false;
//       for (let i = 0; i < filteredIntervals.length; i++) {
//         // console.log(interval, filteredInterval, "\n");
//         if (
//           interval[0] > filteredIntervals[i][0] &&
//           interval[0] < filteredIntervals[i][1]
//         ) {
//           interval[1] > filteredIntervals[i][1]
//             ? (filteredIntervals[i][1] = interval[1])
//             : 0;
//           matched = true;
//           //   console.log("invoked", interval, filteredInterval);
//           break;
//         } else if (
//           interval[1] > filteredIntervals[i][0] &&
//           interval[1] < filteredIntervals[i][1]
//         ) {
//           filteredIntervals[i][0] = interval[0];
//           matched = true;
//           //   console.log("invoked", interval, filteredInterval);
//           break;
//         } else if (
//           interval[0] === filteredIntervals[i][0] &&
//           interval[1] === filteredIntervals[i][1]
//         ) {
//           matched = true;
//           break;
//         }
//       }
//       matched ? 0 : filteredIntervals.push(interval);
//       //   console.log("invoked");
//     } else {
//       filteredIntervals.push(interval);
//     }
//   });
//   const length = filteredIntervals.length;
//   const filteredIntervals1 = [];
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (
//         filteredIntervals[i][0] > filteredIntervals[j][0] &&
//         filteredIntervals[i][0] < filteredIntervals[j][1]
//       ) {
//         filteredIntervals[i][1] > filteredIntervals[j][1]
//           ? (filteredIntervals[j][1] = filteredIntervals[])
//           : 0;
//         matched = true;
//         //   console.log("invoked", interval, filteredInterval);
//         break;
//       } else if (
//         interval[1] > filteredIntervals[i][0] &&
//         interval[1] < filteredIntervals[i][1]
//       ) {
//         filteredIntervals[i][0] = interval[0];
//         matched = true;
//         //   console.log("invoked", interval, filteredInterval);
//         break;
//       }
//     }
//   }
// return filteredIntervals.reduce(
//   (total, current) => (total += current[1] - current[0]),
//   0
// );
// }

function filteredIntervals(intervals) {
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < intervals.length; j++) {
      if (i !== j) {
        if (
          intervals[i][0] > intervals[j][0] &&
          intervals[i][0] < intervals[j][1]
        ) {
          intervals[i][1] > intervals[j][1]
            ? (intervals[j][1] = intervals[i][1])
            : 0;
          intervals.splice(i, 1);
          filteredIntervals(intervals);
        } else if (
          intervals[i][1] > intervals[j][0] &&
          intervals[i][1] < intervals[j][1]
        ) {
          intervals[i][0] < intervals[j][0]
            ? (intervals[j][0] = intervals[i][0])
            : 0;
          intervals.splice(i, 1);
          filteredIntervals(intervals);
          //   console.log("invoked", interval, filteredInterval);
        } else if (
          intervals[i][0] === intervals[j][0] &&
          intervals[i][1] === intervals[j][1]
        ) {
          intervals.splice(i, 1);
          filteredIntervals(intervals);
        }
      }
    }
  }
  return intervals;
}

function sumIntervals(intervals) {
  function filteredIntervals(intervals) {
    for (let i = 0; i < intervals.length; i++) {
      for (let j = 0; j < intervals.length; j++) {
        if (i !== j) {
          if (
            intervals[i][0] > intervals[j][0] &&
            intervals[i][0] < intervals[j][1]
          ) {
            intervals[i][1] > intervals[j][1]
              ? (intervals[j][1] = intervals[i][1])
              : 0;
            intervals.splice(i, 1);
            filteredIntervals(intervals);
          } else if (
            intervals[i][1] > intervals[j][0] &&
            intervals[i][1] < intervals[j][1]
          ) {
            intervals[i][0] < intervals[j][0]
              ? (intervals[j][0] = intervals[i][0])
              : 0;
            intervals.splice(i, 1);
            filteredIntervals(intervals);
            //   console.log("invoked", interval, filteredInterval);
          } else if (
            intervals[i][0] === intervals[j][0] &&
            intervals[i][1] === intervals[j][1]
          ) {
            intervals.splice(i, 1);
            filteredIntervals(intervals);
          }
        }
      }
    }
    return intervals;
  }

  return filteredIntervals(intervals).reduce(
    (total, current) => (total += current[1] - current[0]),
    0
  );
}

console.log(
  sumIntervals([
    [0, 1],
    ["a", 1],
  ])
);
