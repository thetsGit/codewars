const task = (S) => {
  let T = [];
  while (S.length > 0) {
    T.push(S.shift());
    T.push(S.pop());
    S = S.reverse();
  }
  return T;
};

console.log(task([1, 2, 3, 4, 5, 6]));
