//declare variable for wins, losses, runningTotal

var wins = 0;
var loss = 0;
var runningTotal = 0;


//create array that contains the crystals

var crystalPoints = [];

//create function for game reset

function reset() {

   var wins = wins;
   var loss = loss;
   crystalPoints.length = 0;
   runningTotal = 0;
   $('#currentTotal').text(runningTotal);
   
} 
   



//generate random number between 19 - 120 and display on randomNumber div

/*function rand() {var randomNum = [Math.floor(Math.random() * 101 + 19)];
$('#randomNumber').text(randomNum);
}*/
//generate 1 random number between 1-12 and add to array. No duplicates

    var randomNum = [Math.floor(Math.random() * 101 + 19)];
    $('#randomNumber').text(randomNum);


    for (i=0; i < 4; i++) {
    var arNum = [Math.floor(Math.random() * 12) + 1];
    if (crystalPoints.indexOf(arNum) < 0) {
    crystalPoints.push(arNum);
    } 
    console.log(crystalPoints);
}


function reset() {

    var wins = wins;
    var loss = loss;
    crystalPoints.length = 0; 
    runningTotal = 0;
    $('#currentTotal').text(runningTotal);

    var randomNum = [Math.floor(Math.random() * 101 + 19)];
    $('#randomNumber').text(randomNum);

    for (i=0; i < 4; i++) {
        var arNum = [Math.floor(Math.random() * 12) + 1];
        if (crystalPoints.indexOf(arNum) < 0) {
        crystalPoints.push(arNum);
        } 
        console.log(crystalPoints);
    }
 } 
    

//win and lose functions

function winner() {
    wins++;
        console.log(wins);
        $('#wins').text('Wins:   ' + wins);
        alert("You win!");
        reset();
}



function loser() {
        loss++;
        $('#losses').text('Losses: ' + loss);
        alert("Sorry you lose!")
        reset();
}

/*listen for click event and assign value to crystal
clicked and add to total*/


$('#crystal1').on('click', function(){
    runningTotal = parseInt(runningTotal);
    crystalPoints[0] = parseInt(crystalPoints[0]);
    runningTotal = runningTotal + (crystalPoints[0]);
    $('#currentTotal').text(runningTotal);

    if (randomNum == runningTotal) {
        //winner();
        winner();

    } else if (runningTotal > randomNum) {
        //loser()
        loser();
    }
  
})

$('#crystal2').on('click', function(){
    runningTotal = parseInt(runningTotal);
    crystalPoints[1] = parseInt(crystalPoints[1]);
    runningTotal = runningTotal + (crystalPoints[1]);
    $('#currentTotal').text(runningTotal);

    if (randomNum == runningTotal) {
        //winner();
        winner();
    } else if (runningTotal > randomNum) {
        //loser()
       loser();
    }
   
})

$('#crystal3').on('click', function(){
    runningTotal = parseInt(runningTotal);
    crystalPoints[2] = parseInt(crystalPoints[2]);
    runningTotal = runningTotal + (crystalPoints[2]);
    $('#currentTotal').text(runningTotal);

    if (randomNum == runningTotal) {
       //winner();
      winner();

    } else if (runningTotal > randomNum) {
        //loser()
        loser();
    }
 
})

$('#crystal4').on('click', function(){
    runningTotal = parseInt(runningTotal);
    crystalPoints[3] = parseInt(crystalPoints[3]);
    runningTotal = runningTotal + (crystalPoints[3]);
    $('#currentTotal').text(runningTotal);

    if (randomNum == runningTotal) {
        //winner();
        winner();
    } else if (runningTotal > randomNum) {
        //loser()
        loser();
    }

})



