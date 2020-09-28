const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sample = parseFloat(sampleActivity);
  if(typeof sampleActivity !=='string' || isNaN(sample)) return false;
    
  if (sample <=0 || sample >15) return false;
  
  return Math.ceil(Math.log(MODERN_ACTIVITY/sample)/(0.693/HALF_LIFE_PERIOD));

  
};
