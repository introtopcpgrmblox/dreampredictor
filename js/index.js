var restart = 0;
var dream = ["nightmare", "dream", "nightmare"]
var action = ["1", "flying over", "sleeping in", "running through", "being chased in"];
var location = ["1", "Texas", "The White House", "Your home", "A Giant Clock", "A field"];
var caviat = ["1", "with fog", "while your phone is dead", "with nobody else around", "in total silence"]
var wake = ["1", "sweating", "pleasantly"]
$("button").click(sayFortune)
function sayFortune() {
  var random = Math.floor(Math.random() * dream.length) + 1;
    var random2 = Math.floor(Math.random() * action.length) + 1;
    var random3 = Math.floor(Math.random() * location.length) + 1;
    var random4 = Math.floor(Math.random() * caviat.length) + 1;
    var random5 = Math.floor(Math.random() * wake.length) + 1;
$("#output").text(dream [random])
$("#output2").text(dream [random2])
$("#output3").text(dream [random3])
$("#output4").text(dream [random4])
$("#output5").text(dream [random5])
}