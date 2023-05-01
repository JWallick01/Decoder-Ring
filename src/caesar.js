// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    

 
  

  function caesar(input, shift, encode = true) {
    if(shift === "undefined")  shift = 0;
    if(encode === false) shift = shift * -1;
  
    if(shift === 0 || shift > 25 || shift < -25 || !shift ){
        return false;
      }
    
    let result = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let lowerCaseInput = input.toLowerCase();
   
   for(i=0; i < lowerCaseInput.length; i++){
     let currentLetter = lowerCaseInput[i];
     if(!alphabet.includes(currentLetter)){
       result += currentLetter;
       continue;
     }
     let currentIndex = alphabet.indexOf(currentLetter);
     let newIndex = currentIndex + shift;
     if(newIndex > 25) newIndex = newIndex - 26;
     if(newIndex < 0) newIndex = newIndex + 26;
     result += alphabet[newIndex];
     
   }
    return result;
   
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
