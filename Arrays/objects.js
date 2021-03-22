var dog={
	name:"Woody",
	type:"Dog"
};

var cat={
	name:"Bob",
	type:"Cat"
};


//creating an array with a list of objects

var pets = [dog  , cat];

console.log(pets)

//add to the array

var dog2 = {
	name:"Spider",
	type:"Bull Dog"
}

pets.push( dog2)
console.log("\nAfter Pushing An Element into The Array\n")
console.log(pets)

//adding a new property into object cat

cat.age = 2;

dog['age'] = 12;

console.log("\nAfter  adding properties in the objects\n")
console.log(pets)
