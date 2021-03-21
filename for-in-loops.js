var countries = {
	"South Africa":"Africa",
	"Egypt": "Africa",
	"France" : "Europe",
	"United States Of America":"North America",
	"China":"Asia"
};

console.log(countries)

//since we can't retrieve the size of the object we can't use the for loop
	//thus we use the for( in ) looop

	for(let country in countries ){
			console.log("The country of " + country + " is in "+countries[country])
	}