function score(dice) {
  const counts = {};
  dice.map((point) =>
    counts[point] ? counts[point].push(point) : (counts[point] = [point])
  );
  //   return Object.keys(counts);
  return Object.keys(counts).reduce(
    (total, cur) =>
      counts[cur].length >= 3
        ? cur == 1 || cur == 5
          ? cur == 1
            ? total + 1000 + (counts[cur].length - 3) * 100
            : total + 500 + (counts[cur].length - 3) * 50
          : total + Number(cur) * 100
        : cur == 1 || cur == 5
        ? cur == 1
          ? total + counts[cur].length * 100
          : total + counts[cur].length * 50
        : total,
    0
  );
}
console.log(score([1, 1, 1, 1, 1]));
