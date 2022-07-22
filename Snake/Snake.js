var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var cnvs; 
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;
var foodX;
var foodY;
var goX = 0;
var goY = 0;
var sBody = [];
var score = 0;
var life = 3;
var updateScore = document.getElementById("score");
var gameOver = false;
var life = document.querySelector(".life");

window.onload = function () {
 board = document.getElementById("board");
 board.height = rows * blocksize;
 board.width = cols * blocksize;
 cnvs = board.getContext("2d");
 foodPlace();
 document.addEventListener("keyup", directionChanger);
 setInterval(update, 1000/10);
}

function update() {
 if (gameOver){
  return;
 }
 cnvs.fillStyle = "#8EC19D";
 cnvs.fillRect(0,0,board.width,board.height);

 cnvs.fillStyle = "#030700";
 cnvs.strokeRect(foodX,foodY,blocksize,blocksize);

 if(snakeX == foodX && snakeY == foodY){
  score++;
  updateScore.innerHTML = " " + score;
  sBody.push([foodX,foodY])
  foodPlace();
 }


 for(let i=sBody.length-1; i>0; i--){
  sBody[i] = sBody[i-1];
 }

 if(sBody.length){
  sBody[0] = [snakeX,snakeY]
 }

 cnvs.fillStyle = "#030700";
 snakeX += goX * blocksize;
 snakeY += goY * blocksize;
 cnvs.fillRect(snakeX,snakeY,blocksize,blocksize);
 for (let i = 0; i<sBody.length; i++){
  cnvs.fillRect(sBody[i][0], sBody[i][1], blocksize, blocksize);
 }
 if(snakeX<0 || snakeX>cols*blocksize || snakeY<0 || snakeY>rows*blocksize  ){
  gameOver = true;
  life.textContent = "GAME OVER";
 }

 for(let i=0; i<sBody.length; i++){
  if(snakeX == sBody[i][0] && snakeY == sBody[i][1]){
   gameOver = true;
   life.textContent = "GAME OVER";
  }
 }
} 



function directionChanger(e) {
 if(e.code == "ArrowUp" && goY != 1){
  goX = 0;
  goY = -1;
 }
 else if(e.code == "ArrowDown" && goY != -1){
  goX = 0;
  goY = 1;
 }
 else if(e.code == "ArrowLeft" && goX != 1){
  goX = -1;
  goY = 0;
 }
 else if(e.code == "ArrowRight" && goX != -1){
  goX = 1;
  goY = 0;
 }
}


function foodPlace() {
 foodX = Math.floor(Math.random()*cols)*blocksize;
 foodY = Math.floor(Math.random()*rows)*blocksize;
}
