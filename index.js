//getting a random number between 1 - 6

var randonenumber1 = Math.floor(Math.random() * 6) + 1;

//selected the first img attribute and setting the attribute to the images/dice(number).png

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randonenumber1 + ".png");  

//getting a random number between 1 - 6

var randonenumber2 = Math.floor(Math.random() * 6) + 1;

//selected the first img attribute and setting the attribute to the images/dice(number).png

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randonenumber2 + ".png");

//comparing the values and declaring the winner

if(randonenumber1 > randonenumber2) {
  document.querySelectorAll("h1")[1].innerHTML="Player 1 Won";
}
else if(randonenumber1 < randonenumber2) {
  document.querySelectorAll("h1")[1].innerHTML="Player 2 Won";
}
else{
  document.querySelectorAll("h1")[1].innerHTML="Draw";
}


































