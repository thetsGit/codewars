function digPow(n, p) {
  const k =
    String(n)
      .split("")
      .reduce((total, cur, i) => total + cur ** (p + i), 0) / n;
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(89, 1));
