let blocks_area = document.getElementById('game');
let buttons;
let flag = 0 ;
let temp_button , temp_button1;
let series = [1,1,2,2,3,3,4,4,5,5,6,6];
let shuffled = []  ;
let length = 12;

init(); 

function init() {
    shuffle();
    for(i = 0 ; i<12 ; i++) {
        
        blocks_area.innerHTML += '<button value= ' + shuffled[i] + ' ></button>' ;  
    }
    buttons = blocks_area.getElementsByTagName("BUTTON");

    for( i = 0 ; i<12 ; i++) {
       buttons[i].addEventListener('click', function() {
                this.innerHTML = this.value ;
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
               }
            },200);
           }
       })
       
    }
    
}


  function shuffle() {
      for(index = 0 ; index <12 ; index++) {
        let num = Math.floor(Math.random() * length);
        shuffled[index] =  series[num] ;
        for(i = num ; i <length ; i++) {
            series[i] = series[i+1];   
        }
        length--;
    }
  }

  function display() {

      for(i = 0 ; i<12 ; i++) {
          console.log(shuffled[i]);
      }
  }

