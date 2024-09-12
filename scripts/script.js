//$('body').css("background-color", "yellow");

//the function in this is an immediately invoked function expression (IIFE)
$('#getButton').on("click", function(){
  let bakerName = $("#bakerName").val();
  let spiritAnimals = ["🦕","🐏","🐒","🦄","🐻‍","🐭","🦒","🐉","🦩","File not found"];
  let randomAnimal = [(Math.floor(Math.random() * spiritAnimals.length))];
  $("#greetingArea").text("Hi there, " + bakerName + "!");
  $("#spiritAnimalSpot").text("Your spirit animal is: " + spiritAnimals[randomAnimal] + "!");
});
//give a greeting,
//and then tell them their spirit animal