///buttons

//Math.floor((Math.random() * 10) + 1);

var but = 0;
var scoreKeep;
var highest = 0;
var score = 0;

init();

function init(){
  getButtons();
  scoreKeep = document.getElementById("score");
  generateNext();
  updateScore();
}

function generateNext(){

  for(var x = 0;x<Math.floor(score/10);x++){
    but = Math.floor(Math.random()*100);
    var button = document.getElementById(""+but);
    if(button.style.visibility != "visible"){
      button.style.visibility = "visible";
    }
    var rand = Math.floor(Math.random()*3);
    if(rand == 0){
      rand = Math.floor(Math.random()*7);
      if(rand==0){
        button.style.color = "white";
      }else if(rand==1){
        button.style.color = "black";
      }else if(rand==2){
        button.style.color = "yellow";
      }else if(rand==3){
        button.style.color = "blue";
      }else if(rand==4){
        button.style.color = "red";
      }else if(rand==5){
        button.style.color = "green";
      }else{
        button.style.color = "purple";
      }
    }else if(rand ==1){
      rand = Math.floor(Math.random()*7);
      if(rand==0){
        button.style.borderColor = "white";
      }else if(rand==1){
        button.style.borderColor = "black";
      }else if(rand==2){
        button.style.borderColor = "yellow";
      }else if(rand==3){
        button.style.borderColor = "blue";
      }else if(rand==4){
        button.style.borderColor = "red";
      }else if(rand==5){
        button.style.borderColor = "green";
      }else{
        button.style.borderColor = "purple";
      }
    }else{
      rand = Math.floor(Math.random()*7);
      if(rand==0){
        button.style.backgroundColor = "white";
      }else if(rand==1){
        button.style.backgroundColor = "black";
      }else if(rand==2){
        button.style.backgroundColor = "yellow";
      }else if(rand==3){
        button.style.backgroundColor = "blue";
      }else if(rand==4){
        button.style.backgroundColor = "red";
      }else if(rand==5){
        button.style.backgroundColor = "green";
      }else{
        button.style.backgroundColor = "purple";
      }
    }
  }
  but = Math.floor(Math.random()*100);
  var button = document.getElementById(""+but);
  if(button.style.visibility != "visible"){
    button.style.visibility = "visible";
  }
  button.innerHTML = score+1;
}

function reset(){
  for(var x = 0;x<100;x++){
    var button = document.getElementById(""+x);
    button.innerHTML = "";
    button.style.visibility = "hidden";
  }
  score = 0;
}

function button(num){
  if(num == but){
    score++;
    if(score>highest){
      highest = score;
    }
  }
  else{
    reset();
  }
  generateNext();
  updateScore();
}

function getButtons(){
  for(var x = 0;x<100;x++){
    var button = document.getElementById(""+x);
    button.innerHTML = "";
    button.style.visibility = "hidden";
  }
}

function updateScore(){
  scoreKeep.innerHTML = "Score: "+score+" | Highest Score: "+highest;
}
