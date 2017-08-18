// alert("connected");

// using 2 methods 
//setting up 2 variables that pull from ids in html that reference the buttons from the html
var p1Button = document.querySelector("#p1");
// var player2 = document.querySelector("p2")
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
//these are the the variables that reference the spans in the html, allows me to adjust the text content
var p1Score = document.querySelector("#p1score");
var p2Score = document.querySelector("#p2score");
//variables that will keep track of the scores of the players
var player1Score = 0;
var player2Score = 0;
//input to change the value of the game
var input = document.querySelector("input");
// var inputValue = document.querySelector("#play");
var inputValue = document.querySelector("p span");
//boolean that decides when the game is over = true, win is the win cond.
var gameOver = false;
var win = 5;

input.addEventListener("change", function(){
	//this refers to whatever the event was listening on -> input
	inputValue.textContent = this.value; 
	//when i do this, im changing the type from number to string which fucks up what I'm comparing
	// win = input.value;
	win = Number(this.value);
	reset();
});

//click is a built in event
p1Button.addEventListener("click", function(){
	if(!gameOver){
	player1Score++;
	// console.log(player1Score, win);
		if(win === player1Score){
			p1Score.classList.add("winner");
			p2Score.classList.add("loser");
			gameOver = true;
			// alert("Player 1 WINS!");
		}	
	p1Score.textContent = player1Score;

	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	player2Score++;
	
		if(win === player2Score){
			p2Score.classList.add("winner");
			p1Score.classList.add("loser");
			gameOver = true;
			// alert("Player 2 WINS!");
		}
	p2Score.textContent = player2Score;
	}
});


resetButton.addEventListener("click", function(){
	reset();
});


function reset(){
	player1Score = 0;
	player2Score = 0;
	p1Score.textContent = player1Score;
	p2Score.textContent = player2Score;
	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner");
	p1Score.classList.remove("loser");
	p2Score.classList.remove("loser");
	gameOver = false;
}