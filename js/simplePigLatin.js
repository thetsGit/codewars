function pigIt(str) {
  return str
    .split(" ")
    .map((char) =>
      char === "!" || char === "?" ? char : char.slice(1) + char[0] + "ay"
    )
    .join(" ");
}
