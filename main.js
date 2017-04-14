//Hey guys it's a me, the same dude who made The Necromancer
//So I'm also making a seperate game that has nothing to do with THe Necromancer as a school project
//So, uh, yeah, hope you enjoy this game and every other game I ever make ever
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.canvas.width = window.innerWidth - 25;
ctx.canvas.height = window.innerHeight - 100;

ctx.fillStyle = "#1e90ff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);


//All the stats about the  players
var player1X = 200;
var player1Y = 200;

var player2X = 200;
var player2Y = 220;

var player1Invisible = false;

var player2Teleporting = false;

var player1Speed = 20;

var player2Speed = 20;

var player1WasInvisible = false;

var knowsInvisibility = false;

var player2Teleported = false;

var knowsTeleportation = false;

function drawPlayer1() {
    ctx.fillStyle = "black";
    ctx.fillRect(player1X, player1Y, 15, 15);

    if (player1Invisible === true && player1WasInvisible) {
        ctx.fillStyle = "gray";
        ctx.fillRect(player1X, player1Y, 15, 15);


        setTimeout(function() {
            player1Invisible = false;
            player1WasInvisible = true;

            drawPlayer1();
        }, 5000);

        setTimeout(function() {
            player1WasInvisible = false;
            drawPlayer1();
        }, 15000);

    }
}

function drawPlayer2() {
    ctx.fillStyle = "white";
    ctx.fillRect(player2X, player2Y, 15, 15);
}


//This is probably the worst attack animation ever, but I'm just going to leave it like this for now
function attackAnimation1(){
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(player1X + 20,player1Y,30,10, 13);
  ctx.stroke();
  setTimeout(function(){
    ctx.clearRect(player1X + 20, player1Y, 30, 10);
  }, 250);
}

function attackAnimation2(){
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(player1X + 20,player1Y,30,10, 13);
  ctx.stroke();
}

drawPlayer1();
drawPlayer2();

var speech = document.getElementById("speech");

var tc1 = new Audio('Voice/TutorialClip1.mp3');
//tc1.play();

var scene = 1;


//The bulk of the code is here for some reason

//It's pretty messy but I cleaned it up the best I could
document.addEventListener('keydown', function(e) {
    if (e.key == "w") {
        ctx.clearRect(player1X, player1Y, 15, 15);
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player1Y -= player1Speed;
        drawPlayer2();
        drawPlayer1();

    } else if (e.key == "a") {
        ctx.clearRect(player1X, player1Y, 15, 15);
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player1X -= player1Speed;
        drawPlayer2();
        drawPlayer1();

    } else if (e.key == "s") {
        ctx.clearRect(player1X, player1Y, 15, 15);
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player1Y += player1Speed;
        drawPlayer2();
        drawPlayer1();

    }



//I had way too much fun messing with these powerups =D
//I would strongly reccomend just being on the first scene of the game and edit the code a bit so you can use these powerups no cooldown, it's the best game of tag you will ever play
    if (e.keyCode === 69 && scene === 1 && player1WasInvisible === false && knowsInvisibility === false) {
      knowsInvisibility = true;
        player1Invisible = true;
        player1WasInvisible = true;
        drawPlayer1();
        speech.innerHTML = "Very good, very good!";
        setTimeout(function() {
            speech.innerHTML = "Now if you're gray, that means the enemy can't see you";
            setTimeout(function() {
                speech.innerHTML = "You're practically invisible!";
                setTimeout(function() {
                    speech.innerHTML = "Now you have to admit, this is an awesome ability";
                    setTimeout(function() {
                        speech.innerHTML = "And you can sneak up on enemies too!";
                        setTimeout(function() {
                            speech.innerHTML = "But there's a 15 second cooldown to invisibility so use it wisely";
                            
                            setTimeout(function(){
                             speech.innerHTML = "Now of course, the white hooded ninja has ninja abilities too!";
                             
                             setTimeout(function(){
                              speech.innerHTML = "If you press shift, you'll teleport, try it out!"; 
                             }, 3000);
                            }, 4900);
                        }, 2250);
                    }, 5000);
                }, 2000);
            }, 3000);
        }, 1750);
    }

    if (e.keyCode === 69 && scene !== 0 && player1WasInvisible === false && knowsInvisibility === true) {
        player1Invisible = true;
        player1WasInvisible = true;
        drawPlayer1();
        
              setTimeout(function(){
        player1Invisible = false;
         drawPlayer1();
      }, 5000);
    }
    
    if (e.keyCode === 16 && scene === 1 && player2Teleported === false && knowsTeleportation === false){
      player2Teleporting = true;
      knowsTeleportation = true;
      player2Speed = 150;
      
      setTimeout(function(){
        player2Teleporting = false;
        player2Teleported = true;
        player2Speed = 10;
      }, 5000);
  
  if(player2Teleported === true){
    
            setTimeout(function(){
        player2Teleported = false;
      }, 15000);
  }
      
      speech.innerHTML = "Pretty cool right?";
      setTimeout(function(){
        speech.innerHTML = "Even though your not invisible like your friend";
        setTimeout(function(){
          speech.innerHTML = "You're able to travel super fast";
          setTimeout(function(){
            speech.innerHTML = "You're enemies literally won't know what hit them!";
            setTimeout(function(){
             speech.innerHTML = "Now head to the right of the screen for your training on how to fight!"; 
            }, 4000);
          }, 2750);
        }, 2900);
      }, 2000);
    }
    
    
    if (e.keyCode === 16 && scene !== 0 && player2Teleported === false && knowsTeleportation === true){
      
      player2Teleporting = true;
      player2Speed = 150;
      
      setTimeout(function(){
        player2Teleporting = false;
        player2Speed = 10;
      }, 5000);
    }
    
    //Attack keyCodes
    if (e.keyCode === 191 && scene === 0){
      
    }

  
    if (e.key == "d") {
        ctx.clearRect(player1X, player1Y, 15, 15);
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player1X += player1Speed;
        drawPlayer2();
        drawPlayer1();

        if (player1X >= ctx.canvas.width - 500 && player2X <= ctx.canvas.width - 500 || player2X >= ctx.canvas.width - 500 && player1X <= ctx.canvas.width - 500) {
          if(scene === 0){
                       speech.innerHTML = "You both need to be at the edge of the screen to proceed!"; 
          }
        }


        if (player1X >= ctx.canvas.width - 500 && player2X >= ctx.canvas.width - 500 && scene === 0) {
            player1X = 200;
            player1Y = 200;

            player2X = 200;
            player2Y = 220;

            ctx.clearRect(player1X, player1Y, 15, 15);
            ctx.clearRect(player2X, player2Y, 15, 15);

            drawPlayer1();
            drawPlayer2();

            scene++;

            if (scene === 1) {

                speech.innerHTML = "Congratulations, you made it to the next phase";
                setTimeout(function() {
                    speech.innerHTML = "So, now you need to finally learn some evasive maneuvers";
                    setTimeout(function() {

                        speech.innerHTML = "Ninja in black hood, press E to turn invisible!";

                    }, 4000);
                }, 3750);

            }
        }

    } else if (e.keyCode === 38) {
        ctx.clearRect(player2X, player2Y, 15, 15);
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player2Y -= player2Speed;
        drawPlayer2();
        drawPlayer1();
    } else if (e.keyCode === 39) {
        ctx.clearRect(player2X, player2Y, 15, 15);
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player2X += player2Speed;


        if (player1X >= ctx.canvas.width - 500 && player2X <= ctx.canvas.width - 500 && scene === 0 || player2X >= ctx.canvas.width - 500 && player1X <= ctx.canvas.width - 500 && scene === 0) {
            speech.innerHTML = "You both need to be at the edge of the screen to proceed!";
        }


        if (player1X >= ctx.canvas.width - 500 && player2X >= ctx.canvas.width - 500) {
            player1X = 200;
            player1Y = 200;

            player2X = 200;
            player2Y = 220;

            ctx.clearRect(player1X, player1Y, 15, 15);
            ctx.clearRect(player2X, player2Y, 15, 15);

            drawPlayer1();
            drawPlayer2();

            scene++;

            if (scene === 1) {

                speech.innerHTML = "Congratulations, you made it to the next phase";
                setTimeout(function() {
                    speech.innerHTML = "So, now you need to finally learn some evasive maneuvers";
                    setTimeout(function() {

                        speech.innerHTML = "Ninja in black hood, press tab to turn gray";

                    }, 4000);
                }, 3750);

            }
        }


        drawPlayer2();
        drawPlayer1();
    } else if (e.keyCode === 40) {
        ctx.clearRect(player2X, player2Y, 15, 15);
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player2Y += player2Speed;
        drawPlayer2();
        drawPlayer1();
    } else if (e.keyCode === 37) {
        ctx.clearRect(player2X, player2Y, 15, 15);
        ctx.fillStyle = "#1e90ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player2X -= player2Speed;
        drawPlayer2();
        drawPlayer1();
    }
});
