/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  newCard()
}

function newCard () {
  let suits = ["♦", "♥", "♠", "♣"]
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  document.querySelector("#center").innerHTML = numbers[indexNumbers];
  document.querySelector("#end").innerHTML = suits[indexSuits];
  document.querySelector("#top").innerHTML = suits[indexSuits];
  
  let colorClass = suits[indexSuits] == "♦" || suits[indexSuits] == "♥" ? "text-danger" : "text-dark";
  document.querySelector("#top").className = colorClass
  document.querySelector("#center").className = colorClass
  document.querySelector("#end").className = colorClass
  };
  
  document.querySelector("#start").addEventListener("click", newCard);

  setInterval (newCard, 3000)
  
  /*let intervalClick;
  function startRandom() {
      intervalClick = setInterval(newCard, 3000);
  }
  document.querySelector("#start").addEventListener("click", startRandom);*/
