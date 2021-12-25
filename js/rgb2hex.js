function rgb(r, g, b) {
  const test = (dec) => {
    if (dec >= 0 && dec <= 255) {
      return "0" + dec.toString(16).toUpperCase().slice(-2);
    } else {
      return dec < 0 ? "00" : "FF";
    }
  };
  return test(r) + test(g) + test(b);
}

console.log(rgb(0, 0, 0));
