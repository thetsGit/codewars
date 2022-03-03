function rgb(r, g, b) {
  const test = (dec) => {
    if (dec >= 0 && dec <= 255) {
      console.log(dec.toString(16));
      return ("0" + dec.toString(16).toUpperCase()).slice(-2);
    } else {
      return dec < 0 ? "00" : "FF";
    }
  };
  return test(r) + test(g) + test(b);
}

console.log(rgb(255, 56, 0));
console.log("12".toString(16));
