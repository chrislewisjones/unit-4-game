$(document).ready(function() {
  // Set our variables, we have a number to target, options for the value of each crystal which I will put into an array,
  // a running score and wins/losses

  var targetNumber;
  var score = 0;
  var win = 0;
  var lose = 0;
  var toppingString = [];
  var toppingValue;

  var toppings = [
    {
      t: "pep",
      v: 0
    },
    {
      t: "mush",
      v: 0
    },
    {
      t: "cheese",
      v: 0
    },
    {
      t: "pepper",
      v: 0
    }
  ];

  // the 4 images on the html need to be clicked to score

  $(".topping").on("click", function() {
    console.log(this);
    var topping = $(this).attr("id");
    for (var i = 0; i < toppings.length; i++) {
      if (toppings[i].t === topping) {
        score += toppings[i].v;
      }
    }
    console.log(score);
    checkWinLoss();
    updateHtml();
  });

  // $(".crystal-image").on("click", function() {
  //   var crystalValue = $(this).attr("data-crystalvalue");
  //   crystalValue = parseInt(crystalValue);

  // the game requires a random target number between 19 and 120.

  function start() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(targetNumber);

    applyValues();
    console.log(toppings);

    // the target number is then placed onto the page.
    updateHtml();
  }
  start();
  // each crystal requires a random score value between 1 and 12

  function updateHtml() {
    $("#target").text("Topping Target: " + targetNumber);
    $("#wins").text("Wins: " + win);
    $("#losses").text("Losses: " + lose);
    $("#score").text("Score: " + score);
  }

  function applyValues() {
    for (var i = 0; i < toppings.length; i++) {
      toppings[i].v = Math.floor(Math.random() * 12) + 1;
    }
  }

  // we need to tally up the scoring and alert the player if they win/lose
  // score += toppingValue;
  // console.log(score);

  function checkWinLoss() {
    if (score === targetNumber) {
      win++;
      alert("Winner, winner, Pizza dinner!");
      restart();
    } else if (score >= targetNumber) {
      lose++;
      alert("You got too greedy, no pizza for you!");
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
