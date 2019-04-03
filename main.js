let blocks_area = document.getElementById('game');
let buttons;
let flag = 0 ,start = 0,time = 59 ,currentScore = 0,counter;
let temp_button , temp_button1;
let series = [];
let shuffled = []  ;
const noOfBlocks = 20;
let seriesLength = noOfBlocks;
init(); 

function init() {

    generateSeries(noOfBlocks);
    shuffle();
    for(index = 0 ; index<noOfBlocks ; index++) {
        blocks_area.innerHTML += '<button value= ' + shuffled[index] + ' ></button>' ;  
    }
    buttons = blocks_area.getElementsByTagName("BUTTON");
    for( i = 0 ; i<noOfBlocks ; i++) {
       buttons[i].addEventListener('click', function() {
                
                this.innerHTML = this.value ;
                if(start == 0) {
                    counter = setInterval(startTimer , 1000);
                    start = 1 ;
                }
                if(flag == 0 ) {
                    flag = 1 ;
                    temp_button = this;
                } else {
                    flag = 0 ;
                    temp_button1 = this;
                setTimeout(function() {
                if(temp_button1.value != temp_button.value) {
                   temp_button1.innerHTML = '' ;
                   temp_button.innerHTML = '';
               } else if (temp_button1.value == temp_button.value) {
                   addScore(10);
                   temp_button.disabled = true;
                   temp_button1.disabled = true;

               }
            },200);
           }
       })
       
    }
    
}

  function addScore(score) {
      currentScore = parseInt(document.getElementById("score").innerHTML);
      currentScore += score;
      document.getElementById("score").innerHTML = currentScore  ;
      
      if(currentScore == 100) {
        alert("Congratulations you won ");
        clearInterval(counter);
        resetGame();
        return ;
    }
  }
  function generateSeries(num) {
      let count = 1;
      for(i = 0  ; i<num ; i+=2) {
          series[i] = count;
          series[i+1] = count;
          count++;
      }
  }
  
  function shuffle() {
      for(index = 0 ; index <noOfBlocks ; index++) {
        let num = Math.floor(Math.random() * seriesLength);
        shuffled[index] =  series[num] ;
        for(i = num ; i <seriesLength ; i++) {
            series[i] = series[i+1];   
        }
        seriesLength--;
    }
  
  }

  function display() {

      for(i = 0 ; i<12 ; i++) {
          console.log(shuffled[i]);
      }
  }

function startTimer() {
    timer = document.getElementById("timer");

    if(time == 0) {
        timer.innerHTML = "0:00";
        alert("You score is " + currentScore);
        clearInterval(counter);
        resetGame();
    }

    if(time >= 10) {
        timer.innerHTML = "0:" + time ;
        time-- ;
    } else if(time <10 ) {
        timer.innerHTML = "0:0" + time ;
        time--;
    } 
}

function resetGame() {
    flag = 0 ;
    start = 0; 
    time = 59 ;
    currentScore = 0 ;
    series = [];
    shuffled = []  ;
    seriesLength = noOfBlocks;
    generateSeries(noOfBlocks);
    shuffle();
    for(index = 0 ; index < noOfBlocks ; index++) {
        buttons[index].innerHTML = "";
        buttons[index].value = shuffled[index];
        buttons[index].disabled = false;
    }
    document.getElementById("score").innerHTML = 0;
    document.getElementById("timer").innerHTML = "1:00";
    clearInterval(counter);
}