var randomNumber1=Math.floor(Math.random()*6)+1;// +1 for method 2
var randomNumber2=Math.floor(Math.random()*6)+1;
/*   ------------method 1------------------

var images=new Array('images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png');
document.querySelectorAll("img")[0].setAttribute("src",images[randomNumber1]);
document.querySelectorAll("img")[1].setAttribute("src",images[randomNumber2]);
*/
// ----------------------method 2--------------------
var randomDiceImage="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
var randomDiceImage1="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage1);
if(randomNumber1>randomNumber2){
   document.querySelector("h1").innerText="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
   document.querySelector("h1").innerText="Player 2 Wins!";
}
else{
   document.querySelector("h1").innerText="Draw!";
}
