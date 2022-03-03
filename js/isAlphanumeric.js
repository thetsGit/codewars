function alphanumeric(string) {
  const array = string.split("");
  for (const char of array) {
    const charCode = char.charCodeAt(0);
    if (
      !(
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      )
    ) {
      return false;
    }
  }
  return string ? true : false;
}

console.log(alphanumeric("Mazinkaiser"));
