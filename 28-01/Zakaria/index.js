const checkMonth1 = month => {
  //month = month.toLowerCase();
  let months = [
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January"
  ];
  let automn = ["august", "september", "october"];
  let winter = ["november", "december", "january"];
  let spring = ["february", "march", "april"];
  let summer = ["may", "june", "july"];
  months = months.map(editedMonth => editedMonth.toLowerCase());
  if (months.includes(month) && automn.includes(month)) {
    return "Autumm";
  } else if (months.includes(month) && winter.includes(month)) {
    console.log(month + " Winter");
  } else if (months.includes(month) && spring.includes(month)) {
    console.log(month + " Spring");
  } else if (months.includes(month) && summer.includes(month)) {
    console.log(month + " Summer");
  }
};
checkMonth1();
