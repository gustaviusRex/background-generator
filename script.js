var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

function setInitialGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
}

function displayInitialBackground() {
    css.textContent = body.style.background + ";";
}




function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";

}

function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function randomizeColors() {
    var randomColor1 = generateRandomColor();
    var randomColor2 = generateRandomColor();
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient();
}


color1.addEventListener("input",setGradient);
color2.addEventListener("input", setGradient)
randomButton.addEventListener("click", randomizeColors);

setInitialGradient();

displayInitialBackground();