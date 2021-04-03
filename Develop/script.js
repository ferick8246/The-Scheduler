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

var now = new Date().getHours();

function colorCode() {
  if (now > 9) {
    $("#9amslot").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#9amslot").addClass("present");
  } else if (now < 9) {
    $("#9amslot").addClass("future");
  }
  if (now > 10) {
    $("#10amslot").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#10amslot").addClass("present");
  } else if (now < 10) {
    $("#10amslot").addClass("future");
  }
  if (now > 11) {
    $("#11amslot").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#11amslot").addClass("present");
  } else if (now < 11) {
    $("11amslot").addClass("future");
  }
  if (now > 12) {
    $("12pmslot").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#12pmslot").addClass("present");
  } else if (now < 12) {
    $("#12pmslot").addClass("future");
  }
  if (now > 13) {
    $("#1pmslot").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#1pmslot").addClass("present");
  } else if (now < 13) {
    $("#1pmslot ").addClass("future");
  }
  if (now > 14) {
    $("#2pmslot").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#2pmslot").addClass("present");
  } else if (now < 14) {
    $("#2pmslot").addClass("future");
  }
  if (now > 15) {
    $("#3pmslot").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#3pmslot").addClass("present");
  } else if (now < 15) {
    $("#3pmslot").addClass("future");
  }
  if (now > 16) {
    $("#4pmslot").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#4pmslot").addClass("present");
  } else if (now < 16) {
    $("#4pmslot").addClass("future");
  }
  if (now > 17) {
    $("#5pmslot").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#5pmslot").addClass("present");
  } else if (now < 17) {
    $("#5pmslot").addClass("future");
  }
}
 