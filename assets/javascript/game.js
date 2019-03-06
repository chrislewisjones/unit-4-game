$(document).ready(function() {
  // Set our variables, we have a number to target, options for the value of each crystal which I will put into an array,
  // a running score and wins/losses

  var targetNumber;
  var numberOptions = [];
  var score = 0;
  var win = 0;
  var lose = 0;

  // the 4 images on the html need to be clicked to score

  $(".topping").on("click", function() {
    var imageType = $(this).attr("id");
    console.log(this);
  });

  // $(".crystal-image").on("click", function() {
  //   var crystalValue = $(this).attr("data-crystalvalue");
  //   crystalValue = parseInt(crystalValue);

  // the game requires a random target number between 19 and 120.

  function start() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(targetNumber);

    // the target number is then placed onto the page.
    $("#target").text("Topping Target: " + targetNumber);
    $("#wins").text("Wins: " + win);
    $("#losses").text("Losses: " + lose);

    // each crystal requires a random score value between 1 and 12

    var pep = Math.floor(Math.random() * 12) + 1;
    var mush = Math.floor(Math.random() * 12) + 1;
    var cheese = Math.floor(Math.random() * 12) + 1;
    var pepper = Math.floor(Math.random() * 12) + 1;
  }

  start();

  //   for (var i = 0; i < 4; i++) {
  //     numberOptions.push(Math.floor(Math.random() * 12) + 1);
  //     console.log(numberOptions);

  //     var pep = numberOptions[0];
  //     var mush = numberOptions[1];
  //     var cheese = numberOptions[2];
  //     var pepper = numberOptions[3];
  //   }

  // we need to tally up the scoring and alert the player if they win/lose
  score += numberOptions;
  console.log(score);

  if (score === targetNumber) {
    win++;
    alert("Winner, winner, Pizza dinner!");
    restart();
  } else if (score >= targetNumber) {
    loss++;
    alert("You got too greedy, no pizza for you!");
    restart();
  }

  function restart() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#targetNumber").text(targetNumber);
    pep = Math.floor(Math.random() * 12) + 1;
    mush = Math.floor(Math.random() * 12) + 1;
    cheese = Math.floor(Math.random() * 12) + 1;
    pepper = Math.floor(Math.random() * 12) + 1;
    score = 0;
    $("#curScore").text(score);
  }
});
