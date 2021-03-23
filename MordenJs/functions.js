//arrow functions

const calArea = radious =>  3.14 * radious**2;

const area = calArea(5);

console.log(area)

const bill = (products , tax) =>{
	let total = 0;
	for(let i =0 ; i<products.length; i++){
		total += products[i] + products[i]*tax;
	}

	return total;
}


console.log(bill([10,15,30],0.2))