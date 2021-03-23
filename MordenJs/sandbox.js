//Working with functions of strings

	let email = 'monyemangene.2@gmail.com';

	console.log("Using The lastIndexOf method\n");
		//This function actually starts the string from the end going to the start of the string to retrieve the last element 
	 result = email.lastIndexOf('e');
	console.log(result);


	console.log("Using The Slice method\n");

	 result = email.slice( 0 , 4); //This will output the first five characters
	console.log(result);


	console.log("Using The substr Method");

		//This function basically return the substring of the given string
	 result = email.substr( 4 , 5) // this will output 5 substring characters
	console.log(result)


	console.log("Using replace method \n");

	result = email.replace('m' , 'M'); //After replacing it returns the whole string and it replaces the first one it reaches

	console.log(result)


