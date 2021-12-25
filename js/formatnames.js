function list(names) {
  return names
    .map(({ name }, i) =>
      i == names.length - 1
        ? name
        : i == names.length - 2
        ? name + " &"
        : name + ","
    )
    .join(" ");
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ])
);
