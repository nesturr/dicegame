document.getElementsByClassName("button1")[0].onclick = dice;


function dice(){
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var img = "images/dice" + randomNumber1 + ".png"
var img2 = "images/dice" + randomNumber2 + ".png"
document.getElementsByClassName("img1")[0].setAttribute("src", img);
document.getElementsByClassName("img2")[0].setAttribute("src", img2);
if(randomNumber1 > randomNumber2){
	document.querySelector("h1").textContent = "Player One Wins";
} else if (randomNumber1 === randomNumber2){
	document.querySelector("h1").textContent = "Draw";
} else {
	document.querySelector("h1").textContent = "Player Two Wins";
}
}