function number2star(numberStr) {
  let number = parseFloat(numberStr);
  if (number > 5) number = 5;
  if (number <= 0) number = 0.5;
  number *= 2;
  let res = ""
  for (let i = 0; i < number - 1; i += 1) {
    res += ":LiStar:";
  }

  return (number % 2 == 0) ? res : res + ":LiStarHalf:";
}

module.exports = number2star;
