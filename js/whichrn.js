function inArray(arr1, arr2) {
  return arr1
    .filter((str) => {
      let arr = arr2.map((str1) =>
        str1.search(str) !== -1 ? "true" : "false"
      );
      return arr.indexOf("true") !== -1;
    })
    .sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
