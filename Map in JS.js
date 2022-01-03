let firstHashMap = new Map();


let secondHashMap=new Map(
    [
        [1,"Rahul"],
        [2,"Radha"],
        [3,"Gita"]
    ]
);
var b=1;
{
    var a=5;
    console.log("ainner"+a);
    console.log("binner"+b);
}
console.log("a"+a);
console.log("b"+b);



const m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]]);
let n=new Map();
console.log(firstHashMap);
console.log(secondHashMap);
console.log(m);
console.log("Hello");
console.log(secondHashMap.size);
console.log(m.size);
console.log(secondHashMap.get("Gita"));