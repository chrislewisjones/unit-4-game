$(document).ready(function() {
  // Set our variables, we have a number to target, options for the value of each topping which I will set as objects within an array,
  // a running score, wins/losses

  var targetNumber;
  var score = 0;
  var win = 0;
  var lose = 0;

  var toppings = [
    {
      topping: "pep",
      value: 0
    },
    {
      topping: "mush",
      value: 0
    },
    {
      topping: "cheese",
      value: 0
    },
    {
      topping: "pepper",
      value: 0
    }
  ];

  // the 4 images on the html need to be clicked to score

  $(".topping").on("click", function() {
    // then apply a value from the toppings array to each topping, each time the clicks are made we need to check for a win/loss and update the player stats by calling their functions.
    var top = $(this).attr("id");
    for (var i = 0; i < toppings.length; i++) {
      if (toppings[i].topping === top) {
        score += toppings[i].value;
      }
    }
    console.log(score);
    checkWinLoss();
    updateHtml();
  });

  // the game requires a random target number between 19 and 120 on start (function), also update the html.

  function start() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(targetNumber);
    applyValues();
    console.log(toppings);
    updateHtml();
  }
  start();

  // a function to update the html items which is called on start, restart and button click.
  function updateHtml() {
    $("#target").text("Topping Target: " + targetNumber);
    $("#wins").text("Wins: " + win);
    $("#losses").text("Losses: " + lose);
    $("#score").text("Score: " + score);
  }

  // each crystal requires a random score value between 1 and 12, this function runs our new values.
  function applyValues() {
    for (var i = 0; i < toppings.length; i++) {
      toppings[i].value = Math.floor(Math.random() * 12) + 1;
    }
  }

  // we need to tally up the aggregate scoring and alert the player if they win/lose, the restart for another game.

  function checkWinLoss() {
    if (score === targetNumber) {
      win++;
      alert("Winner, winner, Pizza dinner!");
      restart();
    } else if (score >= targetNumber) {
      lose++;
      alert("You got too greedy, no pizza for dinner!");
      restart();
    }
  }

  function restart() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    applyValues();
    score = 0;
    updateHtml();
  }
});
