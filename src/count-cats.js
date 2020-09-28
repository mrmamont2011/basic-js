<<<<<<< HEAD
module.exports = function countCats(matrix) {
        
  if(!matrix == true) return 0;
  let sum=0;
  
  for (let i=0; i<matrix.length;i++){
             for(let j=0; j<(matrix[i].length); j++) if (matrix[i][j]=='^^') sum++;             
          
      
      }
    
  return (sum);
}
=======
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
>>>>>>> f98a58a34671527de94016f7436aaa6f9729ff77
