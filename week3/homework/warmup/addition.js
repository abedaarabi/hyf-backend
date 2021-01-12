const calc = (firstParam, secondParam, f) => {
  let arr = [];

  arr.push(firstParam, ...secondParam);

  const result = arr
    .map((i) => {
      return Number(i);
    })
    .reduce(f);

  return result;
};

module.exports = { calc };
