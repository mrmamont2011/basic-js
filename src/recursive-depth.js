const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
    if(!Array.isArray(arr)) return 0;
    
    let max = 0
    arr.forEach(element => {
      max = Math.max(max, this.calculateDepth(element))
    })
    return max + 1;
  }
};