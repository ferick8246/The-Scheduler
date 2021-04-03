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

 // added api to check temprature 
 var tePescoElOllo = 'https://api.openweathermap.org/data/2.5/weather?q=houston&units=imperial&appid=4354bae4bc4f80de34b0ce15453d2200';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      
     return response.json()
      
    })
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp)
      document.querySelector("#temp").innerHTML= "temp "+ data.main.temp + "&#8457;"
    });
}

getApi(tePescoElOllo);
  
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

function twelvePM() {
  var input_textarea4 = document.querySelector("#12pmslot");
  var output_div4 = document.querySelector("#12pmslot");
  var save_button4 = document.querySelector("#button12pm");

  save_button4.addEventListener("click", updateOutput4);

  output_div4.textContent = localStorage.getItem("content4");
  input_textarea4.value = localStorage.getItem("content4");

  function updateOutput4() {
    localStorage.setItem("content4", input_textarea4.value);

    output_div4.textContent = input_textarea4.value;
  }
}


function onePM() {
  var input_textarea5 = document.querySelector("#1pmslot");
  var output_div5 = document.querySelector("#1pmslot");
  var save_button5 = document.querySelector("#button1pm");

  save_button5.addEventListener("click", updateOutput5);

  output_div5.textContent = localStorage.getItem("content5");
  input_textarea5.value = localStorage.getItem("content5");

  function updateOutput5() {
    localStorage.setItem("content5", input_textarea5.value);

    output_div5.textContent = input_textarea5.value;
  }
}
function twoPM() {
  var input_textarea6 = document.querySelector("#2pmslot");
  var output_div6 = document.querySelector("#2pmslot");
  var save_button6 = document.querySelector("#button2pm");

  save_button6.addEventListener("click", updateOutput6);

  output_div6.textContent = localStorage.getItem("content6");
  input_textarea6.value = localStorage.getItem("content6");

  function updateOutput6() {
    localStorage.setItem("content6", input_textarea6.value);

    output_div6.textContent = input_textarea6.value;
  }
}


function threePM() {
  var input_textarea7 = document.querySelector("#3pmslot");
  var output_div7 = document.querySelector("#3pmslot");
  var save_button7 = document.querySelector("#button3pm");

  save_button7.addEventListener("click", updateOutput7);

  output_div7.textContent = localStorage.getItem("content7");
  input_textarea7.value = localStorage.getItem("content7");

  function updateOutput7() {
    localStorage.setItem("content7", input_textarea7.value);

    output_div7.textContent = input_textarea7.value;
  }
}
function fourPM() {
  var input_textarea8 = document.querySelector("#4pmslot");
  var output_div8 = document.querySelector("#4pmslot");
  var save_button8 = document.querySelector("#4pmslot");

  save_button8.addEventListener("click", updateOutput8);

  output_div8.textContent = localStorage.getItem("content8");
  input_textarea8.value = localStorage.getItem("content8");

  function updateOutput8() {
    localStorage.setItem("content8", input_textarea8.value);

    output_div8.textContent = input_textarea8.value;
  }
}


function fivePM() {
  var input_textarea9 = document.querySelector("#5pmslot");
  var output_div9 = document.querySelector("#5pmslot");
  var save_button9 = document.querySelector("#button5pm");

  save_button9.addEventListener("click", updateOutput9);

  output_div9.textContent = localStorage.getItem("content9");
  input_textarea9.value = localStorage.getItem("content9");

  function updateOutput9() {
    localStorage.setItem("content9", input_textarea9.value);

    output_div9.textContent = input_textarea9.value;
  }
}