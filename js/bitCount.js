// const numToBits = (number) => {
//   return number < 2
//     ? number % 2
//     : String(number % 2) + numToBits(Math.floor(number / 2));
// };

// const countBits = (number) => {
//   return numToBits(number)
//     .split("")
//     .filter((bit) => bit === "1").length;
// };

var countBits = (number) => {
  let binary = "";
  if (number < 2) {
    return number % 2;
  }
  while (!(Math.floor(number) === 0)) {
    binary = binary + (number % 2);
    number = Math.floor(number / 2);
  }

  return binary.split("").filter((bit) => bit === "1").length;
};

console.log(countBits(10));
