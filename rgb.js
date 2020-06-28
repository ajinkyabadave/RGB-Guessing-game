var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
         
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected"); 
        if(this.textContent === "Easy")
            numSquares = 3;
        else
            numSquares = 6;
        
        reset();     
    });
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
}

colorDisplay.textContent = pickedColor;

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.background = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.background = colors[i];
//         squares[i].style.background = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    // colors = generateRandomColors(numSquares);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New colors";
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.background = colors[i];
    // }
    // h1.style.background = "steelblue";
    // messageDisplay.textContent = "";
    reset();
});
 
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
        //compare color to pickedColor
        
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again";
            changeColor(clickedColor);
            h1.style.background = clickedColor;

		} else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color){
    for(var i =0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
   var randomNum = Math.floor(Math.random() * colors.length );
   return colors[randomNum];
   console.log(randomNum);
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        var eachColor = "rgb(";
        eachColor += Math.floor(Math.random() * 256);
        eachColor += ", ";
        eachColor += Math.floor(Math.random() * 256);
        eachColor += ", ";
        eachColor += Math.floor(Math.random() * 256);
        eachColor += ")";
        arr.push(eachColor);

    }

    return arr;
}