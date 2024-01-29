var elDiceOne = document.getElementById("dice1");
var elDiceTwo = document.getElementById("dice2");
var elDiceThree = document.getElementById("dice3");
var elComeOut = document.getElementById("roll");
var btnbowl = document.getElementById("movebowl");
var btnvibrate = document.getElementById("vibrate");
var bowl = document.querySelector(".bowl");

elComeOut.onclick = function () {
  rollDice();
};
btnbowl.onclick = function () {
  const move = "move";
  bowl.classList.toggle(move);

  if (btnbowl.innerHTML === "Mở bát") {
    btnbowl.innerHTML = "Đóng bát";
  } else {
    btnbowl.innerHTML = "Mở bát";
  }
};

btnvibrate.onclick = function () {
  bowl.classList.add('vibrate');
  setTimeout(() => {
    bowl.classList.remove('vibrate');
  }, 2000);
  rollDice();
};

function rollDice() {
  var diceOne = Math.floor(Math.random() * 6 + 1);
  var diceTwo = Math.floor(Math.random() * 6 + 1);
  var diceThree = Math.floor(Math.random() * 6 + 1);

  console.log(diceOne + " " + diceTwo + " " + diceThree);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove("show-" + i);
    if (diceOne === i) {
      elDiceOne.classList.add("show-" + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove("show-" + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add("show-" + k);
    }
  }
  for (var k = 1; k <= 6; k++) {
    elDiceThree.classList.remove("show-" + k);
    if (diceThree === k) {
      elDiceThree.classList.add("show-" + k);
    }
  }
  // setTimeout(rollDice(), 1000);
}
