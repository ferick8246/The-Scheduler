window.onload = function(){
  colorCode();
  nineAM();
  tenAM();
  elevenAM();
  twelvePM();
  onePM();
  twoPM();
  threePM();
  fourPM();
  fivePM();
 }
  
 //view current time 

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);
 