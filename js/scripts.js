// Business Logic
const beep = "beep!"

var beepBoop = function(input) {
  let numbers = [];
  for (let i = 0; i <= input; i++) {
    numbers.push(i.toString());
  };

  var beepBoop = numbers.map(function(number) {
    if (numbers.includes("1")) {
      return number = beep;
    } else {
      return number;  
    };
  });
  return beepBoop;
};  

// UI Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {

    const inputNumber = parseInt($("input#inputNumber").val());
    event.preventDefault();
  })
    $("#response").show();
  });
});