// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
}

const string = prompt('Enter a string: ');
const result = capitalizeFirstLetter(string);
console.log(result);