let hour = 0,
  minutes = 24,
  seconds = 60,
  workTime = 25,
  timerOn = false;

  const timerLoop = () => {
  const wav = 'alarm.wav';
  const audio = new Audio(wav);

  if (timerOn) {  

    if (hour < 10){
    $('#hours').text('0' + hour);
    }
    else {
      $('#hours').text(hour);
    }
    if(minutes < 10){
    $('#minutes').text('0' + minutes);
    }
    else{
      $('#minutes').text(minutes);
    }

    if (seconds > 0) {
      seconds -= 1;

      if (seconds < 10) {
        $('#seconds').text('0' + seconds);

      } else {
        $('#seconds').text(seconds);
      }

      setTimeout(timerLoop, 1000);

    } else if (minutes + seconds > 0) {
      minutes -= 1;
      $('#minutes').text(minutes);
      seconds = 60;
      
      
      if (minutes < 10) {
        $('#minutes').text('0' + minutes);

      } else {
        $('#minutes').text(minutes);
      }
      timerLoop();
     
    } 
   else if (hour + minutes + seconds > 0) {
    hour -= 1;
    $('#hours').text(hour);
    minutes = 59;
    seconds = 60;
    timerLoop();
    
    if (hour < 10) {
      $('#hours').text('0' + hour);

    } else {
      $('#hours').text(hour);
    }

  } else {
        audio.play();
        timerLoop(); 
    }
  }
}

$('#workPlus').click(function () {
  workTime += 1;
  if(workTime > 60){
    hour = parseInt( workTime / 60);
    
    minutes = parseInt (workTime % 60 - 1);
  } else{
  minutes = (workTime - 1);
  seconds = 60;
  }
  $('#workTime').text(workTime + ' min');
});

$('#reset').click(function(){
  timerOn = false;
  $('#clockStatus').text('Click to start again!');
  $('#hours').text('00');
  $('#minutes').text('25');
  $('#seconds').text('00');
  hour = 0;
  minutes = 24;
  workTime = 25;
  $('#workTime').text(workTime + ' min');
})


$('#workMinus').click(function () {
  if (workTime > 0) {
    workTime -= 1;
    if(workTime > 60){
      hour = parseInt( workTime / 60);
      
      minutes = parseInt (workTime % 60 - 1);
    } else{
    hour = 0;  
    minutes = (workTime - 1);
    seconds = 60;
    }

    $('#workTime').text(workTime + ' min');
  }
});

$('#circleClock').click(function () {
  if (timerOn) {
    timerOn = false;
    
    $('#clockStatus').text('Click to start again!');
  } else {
    timerOn = true;
    timerLoop();
    $('#clockStatus').text('Timer is running...');
  }
});