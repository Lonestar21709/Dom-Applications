//array that holds colors
var numSquares = 6;
// var colors = generateRandomColors(numSquares);
var colors = [];
//assigning random pos in the array colors to pickedColor
var pickedColor;
//Each html class labeled "square" is assigned to var squares, creates an array -> squares = [".square", ."square", ....]
var squares = document.querySelectorAll(".square");
//assigning the span id labeled colorDisplay to  a var, which will be used to show the color to select.  Its basicaally a variable that holds text, which will be filled by the string from the array colors.
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquareListeners();
	reset();
}

function setupModeButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//another way of doing if else, ternary operator
			// this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			if(this.textContent === "Easy"){
				numSquares = 3;
			}else{
				numSquares = 6;
			}
			reset();
		});
	}
}


function setupSquareListeners(){
	//setup square listeners 
	//loop will cycle through the squares array, and assigns a color from the colors[i] to the squares[i] background color, then it will assign an event listener to squares[i]
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		//squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square, this refers to squares[i]
			var clickedColor = this.style.backgroundColor; 
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				// alert("Correct!");
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				// alert("Incorrect!");
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}	
}
function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	//reset header color
	h1.style.backgroundColor = "steelblue";	
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickColor();
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickColor();
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}	
// });

resetButton.addEventListener("click", function(){
	reset();
	// //generate new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color from array
	// pickedColor = pickColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// //change colors of squares
	// this.textContent = "New Colors";
	// messageDisplay.textContent = "";
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// //reset header color
	// h1.style.backgroundColor = "steelblue";
});



//inserting the picked color in the text of span colorDisplay
// colorDisplay.textContent = pickedColor;







//replaces all colors in squares array with the correct color
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	//so its picking a random number from 0-5 which refers to the indexs in color array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



function generateRandomColors(num){
	//make an array
	var array = []
	//add num random colors to array, repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		array.push(randomColor());

	}
	//return that array
	return array;
}

function randomColor(){
	//pick a  "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue from 0-255"
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}




