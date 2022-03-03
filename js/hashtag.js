function generateHashtag(str) {
  const formattedString =
    str.trim() &&
    "#" +
      str
        .trim()
        .split(new RegExp("\\s+"))
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join("");
  return formattedString
    ? formattedString.length > 140
      ? false
      : formattedString
    : false;
}

console.log(generateHashtag("   "));
