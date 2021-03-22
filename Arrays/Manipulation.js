var characters=['luke','Leila','Han','Chewie'];

console.log("The Original array is:\n" + characters)

//splice allows us to remove and also optionally add new things in a array

//it requires two parameters   the first one is the position of the starting item and the second one is for the number of elements to be removed
 characters.splice(0,1,"Tipe")
console.log("\n \nUpdating the first element in an array:\n" + characters)



characters.splice(1,2,"Thumana");
console.log("\n \nReplacing the  second & second elements To be replaced with Thumana :\n  "+characters)



characters.splice(1 , 1,"Lebo","Tumi")
console.log("\n \nReplacing the second element with two values:")
console.log(characters)

characters.splice(1 , 2);

console.log("\n \nDeleting two element in an array starting from the second element:")
console.log(characters)


//Working with sorting an array element

// Output the elements in reverse order

var characters=['Luke','Leila','Han','Chewie'];

characters.reverse()

console.log("\n \n Output the element in reverse order:\n  "+ characters)

//Output the elements in order

characters.sort()
console.log("\n \n Output the element in Ascending order:\n  "+ characters)


var characters=['Luke','Leila','Han',"Tipe",'Chewie'];
characters.sort().reverse()

console.log("\n \n Output the element in reverse order:\n  "+ characters)

//Searching

//Serching an array

var position = characters.indexOf('Tipe');

console.log("   Position of "+characters[position] +" is : " + position)

// Searching the last index of an element in an array

var position = characters.lastIndexOf('Luke')

console.log("\n The last index of "+characters[position]+ " is : "+position) 