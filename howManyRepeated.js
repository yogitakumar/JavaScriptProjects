function howManyRepeated(str){
   try{ return str.split("").sort().join("").match(/(.)\1+/g).length; }
   catch(e){ return 0; } // if TypeError
}

console.log(howManyRepeated("Aasdefsgh!!!"));