const scores = [40,20,65,0,36,75,18,100,25,69];

for(let index in scores){
	if(scores[index] === 0){
		continue;
	}

	console.log(index," : ",scores[index]);

	if(scores[index] === 100){
		console.log("you are the winner")
		break;
	}
}