exports.sum = (x, y) => x + y;
exports.sub = (x, y) => x - y;

exports.multi = (x, y) => x * y;

exports.prepareString = (str) => {
  let finalArray = [];
  str.forEach((element) => {
    finalArray.push(
      element[0].toUpperCase() + element.substring(1).toLowerCase()
    );
  });
  finalArray = finalArray.toString();
  //   finalArray = finalArray.trim();

  console.log(finalArray);
};
