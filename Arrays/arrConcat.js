let a = [2,4,6,8]
let b = [1,3,5,7]

//Combining arrays

let c = a.concat(b);

console.log(c.sort())

//Another way

let d = [].concat(a,b,c).sort();

console.log("d" , d)