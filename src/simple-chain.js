const CustomError = require("../extensions/custom-error");


const chainMaker = {

  
    array : [],

    getLength() {
      return this.array.length;
    },
    addLink(value) {
      
      if (value === undefined) {

        this.array.push(' ');
      } else {

        this.array.push(`${value}`);
      } 
       
      return this;
    },

    removeLink(pos) {
            if ( (typeof(pos) !== 'number' ) || (pos < 1) || (pos > this.array.length) ) {
              this.array = []; throw Error('Error number');
            };
                this.array.splice(pos-1, 1);
     
      return this;
    },

    reverseChain() {
      if (this.array.length> 1) this.array.reverse();
     
      return this;
    },
    finishChain() {
     
      let str = '';
      if (this.array.length === 0) { str = ''}
       else {

      this.array.forEach((el, ind, array) => {
        if (array.length === 0) {
           this.array = []; 
           str = '';
          }

              if ((ind === 0) || (ind < (array.length-1))) 
                { if (array.length ===1 ) {
                  str = `${str}( ${el} )`
                } else {
                  str = `${str}( ${el} )~~`} 
                } else  {
                  str = `${str}( ${el} )`
                }
      });
    }
      this.array = [];
      return str;
    }

  
  
 
};

module.exports = chainMaker;
