//Hey guys it's a me, the same dude who made The Necromancer
//So I'm also making a seperate game that has nothing to do with THe Necromancer as a school project
//So, uh, yeah, hope you enjoy this game and every other game I ever make ever
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.canvas.width = window.innerWidth - 25;
ctx.canvas.height = window.innerHeight - 100;

ctx.fillStyle = "#1e90ff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

var scene = 3;

//All the stats about the  players
var player1X = 200;
var player1Y = 200;

var player2X = 200;
var player2Y = 220;

var dummy1X = 600;
var dummy1Y = 200;

var sword1X;
var sword1Y;

var sword2X;
var sword2Y;

var crazo1X = 560;
var crazo1Y = 600;

var crazo2X = 580;
var crazo2Y = 600;

var crazo3X = 600;
var crazo3Y = 600;

var crazo4X = 620;
var crazo4Y = 600;

var crazo5X = 640;
var crazo5Y = 600;

var finalBossX = 600;
var finalBossY = 450;


var player1Health = 50;
var player2Health = 50;

var p1Attacking = false;
var p2Attacking = false;

var dummyHealth = 20;

var crazoHealth = 30;

var giantHealth = 150;

var player1Invisible = false;

var player2Teleporting = false;

var player1Speed = 20;

var player2Speed = 20;

var player1WasInvisible = false;

var knowsInvisibility = false;

var player2Teleported = false;

var knowsTeleportation = false;

var p1attacking = false;
var p2attacking = false;

var p1Hiding = false;
var p2Hiding = false;

var enemies = "";
var items = "";

function drawPlayer1() {
  
   
sword1X = player1X + 20;
sword1Y = player1Y + 5;
 ctx.fillStyle = "black";
 ctx.fillRect(player1X, player1Y, 15, 15);
 
 if(enemies === "Dummy" && dummyHealth > 0){
   dummy(dummy1X, dummy1Y);
 } 

 if (player1Invisible === true && player1WasInvisible === true) {
  ctx.fillStyle = "gray";
  ctx.fillRect(player1X, player1Y, 15, 15);


  setTimeout(function() {
   player1Invisible = false;
     setTimeout(function() {
   player1WasInvisible = false;
   drawPlayer1();
  }, 5000);

   drawPlayer1();
  }, 5000);

 }
}

function drawPlayer2() {
  
sword2X = player2X + 20;
sword2Y = player2Y + 5;
  
  
 ctx.fillStyle = "white";
 ctx.fillRect(player2X, player2Y, 15, 15);
 
 if(player2Teleporting === true){
   player2Speed = 160;
 }
 
 if(enemies === "Dummy" && dummyHealth > 0){
   dummy(dummy1X, dummy1Y);
 } 
}

function crazo(crazoX, crazoY){
  setInterval(function(){
    if(sword1X === crazoX && sword1Y === crazoY || sword2X === crazoX && sword2Y === crazoY){
      crazoHealth = 0;
    }
    if(crazoHealth > 0){
  var hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  var random = Math.floor((Math.random() * 4) + 1);
  ctx.fillStyle = hue;
  ctx.fillRect(crazoX, crazoY, 15, 15);
  if(random === 1 && crazoX <= ctx.canvas.width){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    crazoX+= 20;
    ctx.fillRect(crazoX, crazoY, 15, 15);
  } else if(random === 2 && crazoY <= ctx.canvas.height){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    crazoY+= 20;
    ctx.fillRect(crazoX, crazoY, 15, 15);
        if(crazoX === player1X && crazoY === player1Y || crazoX === player2X && crazoY === player2Y){
      alert("You died!");
    }
  } else if(random === 3 && crazoX >= 0){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
      ctx.fillStyle = hue;
    crazoX-= 20;
    ctx.fillRect(crazoX, crazoY, 15, 15);
        if(crazoX === player1X && crazoY === player1Y || crazoX === player2X && crazoY === player2Y){
      alert("You died!");
    }
  } else if(random === 4 && crazoY >= 0){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    crazoY-= 20;
    ctx.fillRect(crazoX, crazoY, 15, 15);
    if(crazoX === player1X && crazoY === player1Y){
      alert("You died!");
      window.location.href = "http://127.0.0.1:31999/MareaderCreativeProject/index.html";
    } else if(crazoX === player2X && crazoY === player2Y){
      alert("You died!");
      window.location.href = "http://127.0.0.1:31999/MareaderCreativeProject/index.html";
    }
  }
    } 
}, 10);
}

function dummy(dummyX, dummyY){
    if(dummyHealth > 0){
  enemies = "Dummy";
  ctx.fillStyle = "brown";
  ctx.fillRect(dummyX, dummyY, 15, 15);
  
  ctx.fillStyle = "black";
  ctx.fillText(dummyHealth, dummyX, dummyY - 10);
  } else if(dummyHealth <= 0) {
    ctx.fillStyle = "#1e90ff";
    ctx.fillRect(dummyX - 10, dummyY - 10, 30, 30);
    enemies = "";
  }
}

function laser(laserX, laserY){
  ctx.fillStyle = "red";
  ctx.fillRect(laserX, laserY, 20, 40);
var move = setInterval(function(){
    laserX--;
  if(laserY > player1Y && player1Invisible === false){
    laserY--;
      ctx.fillStyle = "red";
  ctx.fillRect(laserX, laserY, 20, 40);
  } else if(laserY < player1Y && player1Invisible === false){
    laserY++;
      ctx.fillStyle = "red";
  ctx.fillRect(laserX, laserY, 20, 40);
  } else if (laserY > player2Y){
    laserY--;
      ctx.fillStyle = "red";
  ctx.fillRect(laserX, laserY, 20, 40);
  } else if(laserY < player2Y){
    laserY++;
      ctx.fillStyle = "red";
  ctx.fillRect(laserX, laserY, 20, 40);
  }
  
  if(player1Y >= laserY && player1Y <= laserY + 40 && player1X === laserX){
    player1Health = 0;
    alert("You died!");
    window.location.href = 'http://127.0.0.1:31999/MareaderCreativeProject/index.html';
  } if(player2Y >= laserY && player2Y <= laserY + 40 && player2X === laserX){
    player2Health = 0;
    alert("You died!");
    window.location.href = 'http://127.0.0.1:31999/MareaderCreativeProject/index.html';
  }
  
  if(laserX <= 0){
    clearInterval(move);
  }
  }, 12);
}

function giant(giantX, giantY){
  setInterval(function(){
  if(giantHealth > 0){
    ctx.fillStyle = "#ffd09e";
    ctx.fillRect(giantX + 15, giantY - 320, 400, 400);
    ctx.fillStyle = "#0015ff";
    ctx.fillRect(giantX, giantY, 425, 600);
    ctx.fillStyle = "black";
    ctx.fillRect(giantX + 25, giantY - 250, 50, 159);
    
    ctx.fillStyle = "black";
    ctx.fillText(giantHealth, giantX, giantY);
    
    if(sword1X === giantX){
      giantHealth -= 5;
            ctx.clearRect(giantX, giantY - 10, 20, 10);
       ctx.fillStyle = "black";
       ctx.fillText(giantHealth, giantX, giantY);
    } 
    
    if(sword2X === giantX){
      giantHealth -= 5;
      ctx.clearRect(giantX, giantY - 10, 20, 10);
      ctx.fillStyle = "black";
      ctx.fillText(giantHealth, giantX, giantY);
    }
  
    setTimeout(function(){
      laser(giantX + 25, giantY - 259);
    }, 5000);
  } else if(giantHealth <= 0){
    alert("The giant is dead, continue to your final battle!");
  }
  }, 1000);
}

function finalBoss(){
  ctx.fillStyle = "#000f23";
  ctx.fillRect(finalBossX, finalBossY, 50, 50);
  setInterval(function(){
    if(finalBossY > 0){
       ctx.fillStyle = "#000f23";
       ctx.fillRect(finalBossX, finalBossX, 50, 50);
      finalBossY++;
    } 
  }, 1);
}


//This is probably the worst attack animation ever, but I'm just going to leave it like this for now
function sword1() {
sword1X = player1X + 20;
sword1Y = player1Y + 5;

  if(sword1X >= dummy1X && sword1X + 5 <= dummy1X + 15 && dummyHealth > 0){
    dummyHealth -= 5;
    ctx.fillStyle = "#1e90ff";
    ctx.fillRect(dummy1X, dummy1Y - 20, 20, 10);
    
    ctx.fillStyle = "black";
    ctx.fillText(dummyHealth, dummy1X, dummy1Y - 10);
  } 
if(p1attacking === false){
 ctx.fillStyle = "gray";
 ctx.fillRect(sword1X, sword1Y, 30, 5);
 p1attacking = true;
}


 setTimeout(function() {
 ctx.fillStyle = "#1e90ff";
 ctx.fillRect(sword1X, sword1Y, 30, 5);
 p1attacking = false;
 }, 500);
}

function sword2() {
sword2X = player2X + 20;
sword2Y = player2Y + 5;

  if(sword2X >= dummy1X && sword2X + 5 <= dummy1X + 15 && dummyHealth > 0){
    dummyHealth -= 5;
    ctx.fillStyle = "#1e90ff";
    ctx.fillRect(dummy1X, dummy1Y - 20, 20, 10);
    
    ctx.fillStyle = "black";
    ctx.fillText(dummyHealth, dummy1X, dummy1Y - 10);
  }

 ctx.fillStyle = "gray";
 ctx.fillRect(sword2X, sword2Y, 30, 5);
 p1attacking = true;



 setTimeout(function() {
 ctx.fillStyle = "#1e90ff";
 ctx.fillRect(sword2X, sword2Y, 30, 5);
 p1attacking = false;
   
 }, 500);
}

drawPlayer1();
drawPlayer2();

finalBoss();

var speech = document.getElementById("speech");

//var tc1 = new Audio('Voice/TutorialClip1.mp3');
//tc1.play();


//The bulk of the code is here for some reason

//It's pretty messy but I cleaned it up the best I could
document.addEventListener('keydown', function(e) {
 //Attack keyCodes
 if(e.keyCode === 191 && scene >= 2){
  sword2X = player2X + 20;
  sword2Y = player2Y + 5;

   sword2();
   p2attacking = true;
   drawPlayer2();
   
 } 
 
 if(e.keyCode === 49 && scene >= 2){
  sword1X = player1X + 20;
  sword1Y = player1Y + 5;
   
    sword1();
    p1attacking = true;
    drawPlayer1();
   
}  
  
  
  
 if (e.key == "w") {
  ctx.clearRect(player1X, player1Y, 15, 15);
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(player1X, player1Y, 15, 15);
  player1Y -= player1Speed;
  drawPlayer2();
  drawPlayer1();

 } else if (e.key == "a") {
  ctx.clearRect(player1X, player1Y, 15, 15);
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(player1X, player1Y, 15, 15);
  player1X -= player1Speed;
  drawPlayer2();
  drawPlayer1();

 } else if (e.key == "s") {
  ctx.clearRect(player1X, player1Y, 15, 15);
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(player1X, player1Y, 15, 15);
  player1Y += player1Speed;
  drawPlayer2();
  drawPlayer1();

 }
if (e.key == "d") {
   ctx.clearRect(player1X, player1Y, 15, 15);
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(player1X, player1Y, 15, 15);
  player1X += player1Speed;
  drawPlayer2();
  drawPlayer1();

  if (player1X >= ctx.canvas.width - 500 && player2X <= ctx.canvas.width - 500 || player2X >= ctx.canvas.width - 500 && player1X <= ctx.canvas.width - 500) {
   if (scene === 0) {
    speech.innerHTML = "You both need to be at the edge of the screen to proceed!";
   }
  }


  if (player1X >= ctx.canvas.width - 500 && player2X >= ctx.canvas.width - 500) {
         ctx.fillStyle = "#1e90ff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
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

   } else if(scene === 2){
     dummy(dummy1X, dummy1Y);
     
    speech.innerHTML = "Alright, time for your most important skill yet";
    setTimeout(function(){
      speech.innerHTML = "How to use your sword!";
      setTimeout(function(){
       speech.innerHTML = "Both of you have this ability!";
       setTimeout(function(){
        speech.innerHTML = "For Player 1, press 1 to use your sword";
        setTimeout(function(){
          speech.innerHTML = "For Player 2, press /";
          setTimeout(function(){
            speech.innerHTML = "Try it on the dummies to the right";
          }, 3000);
        }, 3000);
        
       });
      }, 2750);
    }, 4000);
   }
   else if(scene === 3){
     alert("Fun fact: Did you know ninjas were based in Japan?");
     alert("AHH, CRAZOS!!! They're blind so invisibilty doesn't work. They run around until they touch you, then they kill you!");
     crazo(crazo1X, crazo1Y);
crazo(crazo2X, crazo2Y);
crazo(crazo3X, crazo3Y);
crazo(crazo4X, crazo4Y);
crazo(crazo5X, crazo5Y);
     speech.innerHTML = "";
   } else if(scene === 4){
     crazoHealth = 0;
     ctx.fillStyle = "#1e90ff";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     alert("Fun fact: Did you know that ninjas start training at age 4?");
     alert("Now here is one of the deadly giants");
     giant(600, 250);
   } else if(scene === 5){
     alert("Fun fact: Ninjas were actually samurai that were disgraced");
     alert("Here is the final boss, use all you know to take him down!!!");
          ctx.fillStyle = "#1e90ff";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     finalBoss();
   }
  }


 } else if (e.keyCode === 38) {
  ctx.clearRect(player2X, player2Y, 15, 15);
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(player2X, player2Y, 15, 15);
  player2Y -= player2Speed;
  drawPlayer2();
  drawPlayer1();
 } else if (e.keyCode === 39) {
  ctx.clearRect(player2X, player2Y, 15, 15);
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(player2X, player2Y, 15, 15);
  player2X += player2Speed;


  if (player1X >= ctx.canvas.width - 500 && player2X <= ctx.canvas.width - 500 && scene === 0 || player2X >= ctx.canvas.width - 500 && player1X <= ctx.canvas.width - 500 && scene === 0) {
   speech.innerHTML = "You both need to be at the edge of the screen to proceed!";
  }


  if (player1X >= ctx.canvas.width - 500 && player2X >= ctx.canvas.width - 500) {
             ctx.fillStyle = "#1e90ff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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

      speech.innerHTML = "Ninja in black hood, press E to turn gray";

     }, 4000);
    }, 3750);

   } else if(scene === 2){
     dummy(dummy1X, dummy1Y);
     
    speech.innerHTML = "Alright, time for your most important skill yet";
    setTimeout(function(){
      speech.innerHTML = "How to use your sword!";
      setTimeout(function(){
       speech.innerHTML = "Both of you have this ability!";
       setTimeout(function(){
        speech.innerHTML = "For Player 1, press 1 to use your sword";
        setTimeout(function(){
          speech.innerHTML = "For Player 2, press /";
          setTimeout(function(){
            speech.innerHTML = "Try it on the dummies to the right";
          }, 3000);
        }, 3000);
        
       });
      }, 2750);
    }, 4000);
   } else if(scene === 3){
          alert("AHH, CRAZOS!!! They're blind so invisibilty doesn't work. They run around until they touch you, then they kill you!");
     crazo(crazo1X, crazo1Y);
crazo(crazo2X, crazo2Y);
crazo(crazo3X, crazo3Y);
crazo(crazo4X, crazo4Y);
crazo(crazo5X, crazo5Y);
   }
  }


  drawPlayer2();
  drawPlayer1();
 } else if (e.keyCode === 40) {
  ctx.clearRect(player2X, player2Y, 15, 15);
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(player2X, player2Y, 15, 15);
  player2Y += player2Speed;
  drawPlayer2();
  drawPlayer1();
 } else if (e.keyCode === 37) {
  ctx.clearRect(player2X, player2Y, 15, 15);
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(player2X, player2Y, 15, 15);
  player2X -= player2Speed;
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

       setTimeout(function() {
        speech.innerHTML = "Now of course, the white hooded ninja has ninja abilities too!";

        setTimeout(function() {
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

  setTimeout(function() {
   player1Invisible = false;
   drawPlayer1();
  }, 5000);
 }
 

 if (e.keyCode === 16 && scene === 1 && player2Teleported === false && knowsTeleportation === false) {
  player2Teleporting = true;
  knowsTeleportation = true;
  player2Teleported = true;
  player2Speed = 160;

  setTimeout(function() {
   player2Teleporting = false;
   setTimeout(function(){
    player2Teleported = false; 
   });
   player2Speed = 20;
  }, 5000);

  speech.innerHTML = "Pretty cool right?";
  setTimeout(function() {
   speech.innerHTML = "Even though your not invisible like your friend";
   setTimeout(function() {
    speech.innerHTML = "You're able to travel super fast";
    setTimeout(function() {
     speech.innerHTML = "You're enemies literally won't know what hit them!";
     setTimeout(function() {
      speech.innerHTML = "Now head to the right of the screen for your training on how to fight!";
     }, 4000);
    }, 2750);
   }, 2900);
  }, 2000);
 }

 if (e.keyCode === 16 && scene !== 0 && player2Teleported === false && knowsTeleportation === true) {
  player2Teleporting = true;
  player2Teleported = true;
  player2Speed = 150;

  setTimeout(function() {
   player2Teleporting = false;
   setTimeout(function(){
    player2Teleported = false; 
   });
   player2Speed = 20;
  }, 5000);
 }
});

