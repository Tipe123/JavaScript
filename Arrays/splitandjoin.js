//join is used to convert an array to a string
//split takes the entire string and split it

let sentense = "Hello my name is Tipe Monyemangene"

let words = sentense.split(" ")

console.log(words)



chars = sentense.split("")

console.log(chars)

let JoinTheArray = words.join(" ")

console.log(JoinTheArray.length)

let x = sentense.split(" ").sort().join(" ");
console.log(x)