const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';
  if ({}.toString.call(date) !== '[object Date]') {
    throw new Error('error object Date');
  }
  
  let month = date.getMonth();

  
  if (month>=2 && month < 5) return 'spring';
  if (month>=5 && month < 8) return 'summer';
  if (month>=8 && month < 11) return 'fall';
  return 'winter';
  
  


};
