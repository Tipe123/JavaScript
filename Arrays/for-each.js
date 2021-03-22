let cities = ['Polokwane','luistrichard','Johhanesburg','Pretoria','Kimberly','Durban','Bloem Fontein'];

// cities.forEach(city)

// function city(item , index , array){
// 	console.log(index , item)
// }



//using anynomuous functions
cities.forEach(function(item , index , array){
	if(item === "Polokwane"){
			item = item.toUpperCase()
	}else{

		item = item.toLowerCase()

	}
	console.log(index , item)
})