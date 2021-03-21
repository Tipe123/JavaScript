var names=['Jeff Lebowski', 'Donnie Kerabatsos','Walter Mitty','Bunny Wisky','karl Molasti'];
var numOfNames = names.length;

//itereate and output the list
for(let i =0 ; i<names.length ; i++){
	console.log((i+1) + ": "+names[i])
}

//iterate and output the array in reverse order

		//There are many steps that kills(create) the cate(code)

				//First of which is using the reverse build in function
					console.log("\nusing reverse function traversing\n")
				names.reverse();

				for (var i = 0; i < names.length; i++) {
					console.log((i+1) + ": "+names[i])
				}


				//Second is to output from the last element
var names=['Jeff Lebowski', 'Donnie Kerabatsos','Walter Mitty','Bunny Wisky','karl Molasti'];
				console.log("\nTraversing in reverse order\n")

				for(let i = names.length - 1;i >=0 ;i--){
					console.log((i+1) + ": "+names[i])
				}