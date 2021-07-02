// Business Logic
const beep = " Beep!"
const boop = " Boop!"
const neighbor = " Won't you be my neighbor?"

var beepBoop = function(input) {
  let numbers = [];
  for (let i = 0; i <= input; i++) {
    numbers.push(i.toString());
  };

  var beepBoop = numbers.map(function(number) {
    if (number.includes("3")) {
      return number = neighbor;
    } else if (number.includes("2")) {
      return number = boop;
    } else if (number.includes("1")) {
      return number = beep;
    } else {
      return number;  
    };
  });
  return beepBoop;
};  

// UI Logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input").val());
    var results = beepBoop(input);
    $("#results").text(results);
    $(".output").show();
  });
});