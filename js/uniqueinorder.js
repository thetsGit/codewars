var uniqueInOrder = function (iterable) {
  //   iterable = iterable.join("");
  return typeof iterable;
  for (let i = 0; i < iterable.length; i++) {
    let re = new RegExp(`${iterable[i]}+`, "g");
    iterable = iterable.replace(re, iterable[i]);
  }
  return iterable.split("");
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
