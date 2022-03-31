var clueHoldTime = 500;
const cluePauseTime = 333;
const nextClueWaitTime = 500;


var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime2 = 500;
var score = 0;
var highScore = 0;

function startGame(){
  pattern = [];
  patterns();
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("commence").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("commence").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
  clueHoldTime = 500;
  if(score > highScore){
    highScore = score;
    $("#highscore").text(score-1);
  }
  score = 0;
}
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; 
  clueHoldTime -= 35;
  score++;
  for(let i=0;i<=progress;i++){
    console.log("playSingClue; " + 'pattern[i]' + clueHoldTime + "ms")
    setTimeout(playSingleClue,delay,pattern[i])
    delay += clueHoldTime;
    delay += cluePauseTime; 
    $("#score").text(score-1);
  }
}
function loseGame(){
  stopGame();
  alert("Womp womp. Game over.")
  clueHoldTime = 500;
  score = 0;
}
function winGame(){
  stopGame();
  alert("WINNER WINNER, CHICKEN DINNER! You win!")
  clueHoldTime = 500;
  score = 0;
}
function guess(btn){
  console.log(guessCounter);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length-1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    loseGame();
  }
}
function patterns(){
  for(let i = 0; i < 15; i++){
    var num2 = Math.floor(Math.random() * 5)
    if(num2 > 0){
      pattern.push(num2);
      console.log(pattern);
    }
  }
  return pattern;
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
