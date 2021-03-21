//Array every()
//check every element to see if it returns true

let numbers = [40 , 16 , 67 , 345 , 22 , 23 ,142 , 63 , 69 , 283 ]

let greaterThan20 = numbers.every(function(num){
	return num > 20
})

console.log(greaterThan20)

let greaterThan10 = numbers.every(function(num){
	if(num >= 10){
	return num 
	}
})

console.log(greaterThan10)

