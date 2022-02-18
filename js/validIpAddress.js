function isValidIP(str) {
  const numArr = str.split(".");
  if (numArr.length !== 4 || numArr.includes("")) {
    return false;
  }
  return (
    numArr.filter(
      (num) =>
        (num.length > 1 ? (num[0] == 0 ? false : true) : true) &&
        num >= 0 &&
        num <= 255 &&
        !(num.includes("\n") || num.includes(" ") || num.includes("e"))
    ).length === 4
  );
}
