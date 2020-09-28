const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  
  let regexp = /\b[A-Z]/gi;
  if (!Array.isArray(members)) return false;
  
  
  for (item of members) {
      regexp.lastIndex = 0;
    if (typeof item === "string") {
      arr.push(  regexp.exec(item)[0].toUpperCase());  
      
    } 

  }
    arr.sort();
    return arr.join('');
    


};
