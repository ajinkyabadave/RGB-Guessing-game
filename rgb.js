var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

 
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
        //compare color to pickedColor
        console.log(clickedColor, )
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);

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
        console.log(arr);
    }

    return arr;
}