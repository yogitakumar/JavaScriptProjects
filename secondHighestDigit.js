var n = secondHighestDigit("124531234" );
console.log(n);

function secondHighestDigit(input) {
var arr=[];
try{
for(var i of input){
    if(!isNaN(i)){
             arr.push(parseInt(i));
           }
    
    
}
if(arr.length>1){
    arr.sort();
    return arr[arr.length-2];
}
else{
    return -1;
}

}
catch(e){
    return 0;
}
}