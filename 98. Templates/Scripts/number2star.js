function number2star(numberStr) {
  let number = parseFloat(numberStr);
  if (number > 5) number = 5;
  if (number <= 0) number = 0.5;

  let whole = Math.floor(number);
  let frac = number - whole;

  let res = ""

  for (let i = 0; i < whole; i += 1) {
    res += ":LiStar:";
  }

  return (frac < 0.5) ? res : res + ":LiStarHalf:";
}

module.exports = number2star;
