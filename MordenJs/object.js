let user ={
	name:"crystal",
	age:22,
	email:"monyemangene.2@gmail.com",
	blogs:['Why giving up since you have a way','The life of a programmer is amazing'],
	location:"mankwene Limpopo South-africa"
}

console.log("Type of variable we are using :",typeof user)

console.log("Our", typeof user,"is:",user);
console.log(user.name)

user.name = 'Tipe'
console.log("After updating the name property\n",user.name)

//we can pass properties as varibles

const key = 'blogs'

console.log("our array of blogs",user[key])

//using functions to methods

user ={
	name:"crystal",
	age:22,
	email:"monyemangene.2@gmail.com",
	blogs:[
		{title:'Why giving up since you have a way',likes:30},
		{title:'The life of a programmer is amazing',likes:45}
		],
	location:"mankwene Limpopo South-africa",
	login: function(){
		console.log("user logged in")
	},
	logout: function(){
		console.log("user logged out");
	} ,

	//we are creating a function that logs out the blogs

	blogChange: function(){
		for (var i = this.blogs.length - 1; i >= 0; i--) {
			 if(i === 0){
			 	this.blogs[i].title = "Changed it" ;
			 }else if(i === 1){
			 	this.blogs[i].title ="Changed it tooo";
			 }
		}
	},

	//set function
	logBlogs: function(){
		console.log("\nOut put from the end of the list\n")
		for (var i = this.blogs.length - 1; i >= 0; i--) {
			 		console.log(this.blogs[i].title," \n has liked by ",this.blogs[i].likes," people")
			 		}
	}
}


user.login();
user.logout();
user.logBlogs();
user.blogChange();
console.log(user.blogs)


//Math object

console.log("Math PI number:",Math.PI);

console.log("Math Euler number e:",Math.E)

//random numbers

const random = Math.random();


console.log( Math.round(random * 100))