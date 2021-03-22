let cities = ['Polokwane','luistrichard','Johhanesburg','Pretoria','Kimberly','Durban','Bloem Fontein'];

//determine the length of each item and save it to the array

let nameLengths = cities.map(function(item , index , array){
	let len = item.length;

	return item + " Has " + len + " characters" 
})

console.log(nameLengths)