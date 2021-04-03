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
function nineAM() {
  var input_textarea = document.querySelector("9amslot");
  var output_div = document.querySelector("#9amslot");
  var save_button = document.querySelector("#button9am");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem("content");
  input_textarea.value = localStorage.getItem("content");

  function updateOutput() {
    localStorage.setItem("content", input_textarea.value);

    output_div.textContent = input_textarea.value;
  }
}



function tenAM() {
  var input_textarea2 = document.querySelector("#10amslot");
  var output_div2 = document.querySelector("#10amslot");
  var save_button2 = document.querySelector("#button10am");

  save_button2.addEventListener("click", updateOutput2);

  output_div2.textContent = localStorage.getItem("content2");
  input_textarea2.value = localStorage.getItem("content2");

  function updateOutput2() {
    localStorage.setItem("content2", input_textarea2.value);

    output_div2.textContent = input_textarea2.value;
  }
}

function elevenAM() {
  var input_textarea3 = document.querySelector("#11amslot");
  var output_div3 = document.querySelector("#11amslot");
  var save_button3 = document.querySelector("#button11am");

  save_button3.addEventListener("click", updateOutput3);

  output_div3.textContent = localStorage.getItem("content3");
  input_textarea3.value = localStorage.getItem("content3");

  function updateOutput3() {
    localStorage.setItem("content3", input_textarea3.value);

    output_div3.textContent = input_textarea3.value;
  }
}