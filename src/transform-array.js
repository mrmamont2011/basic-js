const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr) ||  arr === null) throw new Error('throws an Error if arr is not an Array');
  let result = [];
  let isFinish = false;
  
  for (let i = 0; i < arr.length; i++ ){
    switch (arr[i]) {
      case '--discard-next':
        if(i != arr.length - 1) {
          i++;
          if(arr[i+1] == '--double-prev' || arr[i+1] == '--discard-prev') {
            i++;
          }
        }
      break;
      case '--discard-prev':
        if(i > 0) result.pop();
        break;


      case '--double-next':
          if(i != arr.length - 1) {
            result.push(arr[i+1],arr[i+1]);
            i++;
          }
          break;
      case '--double-prev':
        if(i > 0) result.push(arr[i-1]);
        break;

      default:
      result.push(arr[i]);
  

    }
  }

  return result;
  
};
