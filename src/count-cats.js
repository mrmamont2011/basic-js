module.exports = function countCats(matrix) {
        
  if(!matrix == true) return 0;
  let sum=0;
  
  for (let i=0; i<matrix.length;i++){
             for(let j=0; j<(matrix[i].length); j++) if (matrix[i][j]=='^^') sum++;             
          
      
      }
    
  return (sum);
};
