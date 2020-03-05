const monthName = userMonth => {
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "August",
    "september",
    "october",
    "november",
    "december"
  ];
  let userTextLower = userMonth.toLowerCase();
  let arrUserTextLower = userTextLower.split(" ");
  let result = "";
  let arrWinter = ["december", "january", "february"];
  let arrSpring = ["march", "april", "may"];
  let arrSummer = ["june", "july", "august"];
  let arrAutumm = ["september", "october", "november"];
  for (let i = 0; i < arrUserTextLower.length; i++) {
    if (
      monthNames.includes(arrUserTextLower[i]) &&
      arrAutumm.includes(arrUserTextLower[i])
    ) {
      result = arrUserTextLower[i] + " Autumm";
    } else if (
      monthNames.includes(arrUserTextLower[i]) &&
      arrWinter.includes(arrUserTextLower[i])
    ) {
      result = arrUserTextLower[i] + " Winter";
    } else if (
      monthNames.includes(arrUserTextLower[i]) &&
      arrSpring.includes(arrUserTextLower[i])
    ) {
      result = arrUserTextLower[i] + " Spring";
    } else if (
      monthNames.includes(arrUserTextLower[i]) &&
      arrSummer.includes(arrUserTextLower[i])
    ) {
      result = arrUserTextLower + " Summer";
    } else {
      result = "This is not a valid value";
    }
  }
  return result;
};
console.log(monthName("This is a month name."));
console.log(monthName("January"));
