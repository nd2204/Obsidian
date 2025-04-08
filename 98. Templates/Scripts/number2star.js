function number2star(numberStr) {
  let number = parseFloat(numberStr);
  if (number > 5) number = 5;
  if (number <= 0) number = 0.5;
  let res = ""
  for (let i = 0; i < number * 2; i += 1) {
    res += (i % 2 == 0) ? ":LiStar:" : ":LiStarHalf:"
  }

  return res;
}

module.exports = number2star;
