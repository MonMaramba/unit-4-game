//declare variable for wins, losses, runningTotal and sounds

var wins = 0;
var loss = 0;
var runningTotal = 0;
var randomNum = 0;

var sound2 = document.getElementById("lossAudio");
        
var sound1 = document.getElementById("winAudio");

//create array that contains the crystals

var crystalPoints = [];

//generate random number between 19 - 120 and display on randomNumber div

    var randomNum = [Math.floor(Math.random() * 101 + 19)];
    $('#randomNumber').text(randomNum);

//generate 4 random numbers between 1-12 and add to array. No duplicates. Array needs to have length of 4.

    for (i=0; crystalPoints.length < 4; i++) {
    var arNum = Math.floor(Math.random() * 12) + 1;
    if (crystalPoints.indexOf(arNum) < 0) {
    crystalPoints.push(arNum);
    } 
       console.log(crystalPoints);
       console.log(runningTotal);
       console.log(randomNum);
}

//create function for game reset

function reset() {

   
   crystalPoints.length = 0;
   runningTotal = 0;
   randomNum = 0;

   $('#currentTotal').text(runningTotal);
    
    crystalPoints.length = 0; 
    
    runningTotal = 0;
    
    $('#currentTotal').text(runningTotal);

    randomNum = Math.floor(Math.random() * 101 + 19);
    $('#randomNumber').text(randomNum);

    for (i=0; crystalPoints.length < 4; i++) {
        arNum = Math.floor(Math.random() * 12) + 1;
        if (crystalPoints.indexOf(arNum) < 0) {
        crystalPoints.push(arNum);
        
       } 
       console.log(crystalPoints);
       console.log(runningTotal);
       console.log(randomNum);
          
    }
 } 

//win and lose functions

function winner() {
        wins++;
        
        $('#wins').text('Wins:   ' + wins);
         
        reset();
}



function loser() {
        loss++;
       
        $('#losses').text('Losses: ' + loss);

        reset();
}


/*listen for click event and assign value to crystal
clicked and add to total. Then check for win or loss and call appropriate funciton*/


$('#crystal1').on('click', function(){
    runningTotal = parseInt(runningTotal);
    crystalPoints[0] = parseInt(crystalPoints[0]);
    runningTotal = runningTotal + (crystalPoints[0]);
    $('#currentTotal').text(runningTotal);

    if (randomNum == runningTotal) {
        //winner();
        
        sound1.play();
        winner();

    } else if (runningTotal > randomNum) {
        //loser()
        sound2.play();
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
        sound1.play();
        winner();
    } else if (runningTotal > randomNum) {
        //loser()
        sound2.play();
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
      sound1.play();
      winner();

    } else if (runningTotal > randomNum) {
        //loser()
        sound2.play();
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
        sound1.play();
        winner();
    } else if (runningTotal > randomNum) {
        //loser()
        sound2.play();
        loser();
    }
       
})


