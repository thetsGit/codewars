toPhNum = (arr) => {
  format = "(xxx) xxx-xxxx";
  arr.map((n) => (format = format.replace("x", n)));
  return format;
};

console.log(toPhNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
