var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

var prevSeconds = 0;
var prevMinute = 0;
var prevHour = 0;

var totalSecondsDegrees = 90;
var totalMinutesDegrees = 90;
var totalHoursDegrees = 90;


function setDate(){
  var now = new Date();

  var seconds = now.getSeconds();
  var secondsDifference = seconds - prevSeconds;

  if (secondsDifference < 0) {
    secondsDifference = 1;
  }

  var secondsDifferenceInDegrees = ((secondsDifference / 60) * 360);
  totalSecondsDegrees = totalSecondsDegrees + secondsDifferenceInDegrees;
  secondHand.style.transform = 'rotate(' + totalSecondsDegrees + 'deg)';

  var minutes = now.getMinutes();
  var minutesDifference = minutes - prevMinute;

  if (minutesDifference < 0) {
    minutesDifference = 1;
  }

  var minutesDifferenceInDegrees = ((minutesDifference / 60) * 360);
  totalMinutesDegrees = totalMinutesDegrees + minutesDifferenceInDegrees;
  minuteHand.style.transform = 'rotate(' + totalMinutesDegrees + 'deg)';

  var hours = now.getHours();
  var hourPercentOver = minutes / 60;
  hours = hours + (1 * hourPercentOver);
  var hoursDifference = hours - prevHour;

  if (hoursDifference < 0) {
    hoursDifference = 1;
  }

  var hoursDifferenceInDegrees = ((hoursDifference / 12) * 360);
  totalHoursDegrees = totalHoursDegrees + hoursDifferenceInDegrees;
  hourHand.style.transform = 'rotate(' + totalHoursDegrees + 'deg)';

  prevSeconds = seconds;
  prevMinute = minutes;
  prevHour = hours;
}

setInterval(setDate, 1000);
