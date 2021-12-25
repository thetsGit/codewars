function iqTest(numStr) {
  var ecount = 0;
  var res = [];

  numStr.split(" ").map((n) => {
    if (Number(n) % 2 == 0) {
      res.push("e");
      ecount++;
    } else {
      res.push("o");
    }
  });
  return res.indexOf(ecount > 1 ? "o" : "e") + 1;
}
console.log(iqTest("2 4 7 8 10"));
