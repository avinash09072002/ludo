

var score1=0, score2=0;

function logic(){
   var num1= Math.floor(Math.random() *6)+1;
   var num2=Math.floor(Math.random() *6)+1;

  ChangeImage('img1',num1);
  ChangeImage('img2',num2);

     score1= score1+num1;
     score2= score2+num2;

  document.getElementById('name1').innerHTML = 'MI score  ' + score1;
  document.getElementById('name2').innerHTML = 'CSK score  ' + score2;
  if (score1>50 ){
          document.getElementById('name1').innerHTML =  ' MI winner';
            document.getElementById('name2').innerHTML = '';
      }
  else if(score2>50){
    document.getElementById('name1').innerHTML =  'CSK winner ';
      document.getElementById('name2').innerHTML = '';
  }


 }

function ChangeImage(img,number){

  var song1 = new Audio('songs/crash.mp3');
  song1.play();


  if(number==1){
    document.getElementById(img).src='image/dice1.png';
  }
  else if(number==2){
    document.getElementById(img).src='image/dice2.png';
  }
  else if(number==3){
    document.getElementById(img).src='image/dice3.png';
  }
  else if(number==4){
    document.getElementById(img).src='image/dice4.png';
  }
  else if(number==5){
    document.getElementById(img).src='image/dice5.png';
  }
  if(number==6){
    document.getElementById(img).src='image/dice6.png';
  }
}
