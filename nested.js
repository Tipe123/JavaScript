let twoD = [
[1,2,3,4,5,6,7],
[8,9,10,11,12,13],
[15,16,17,18,19,20]
]

let bigHero = {
	characters:[
		{
		 name:"Hiro",
		 voice:"Tipe Monyemangene"
		},
		{
		 name:"Baynax",
		 voice:"Thato Monyemangene"
		},

		{
			name:"Fred",
			voice:"Ramaifo Timothy"
		}
	]
};

//nested for loops

let rows = twoD.length;
for(let i = 0 ; i< rows ; i++){
	let items = twoD[i].length

	for(let j = 0 ; j < items ; j++){
		console.log("["+i+"]","["+j+"]"," = "+twoD[i][j])
	}
}