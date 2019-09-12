var random_answer;
var lose = 0;
var win = 0;
var previous = 0;

var resetAndStart = function(){
    $(".crystal").empty();

    var images = [
    
        "https://gamepedia.cursecdn.com/atlas_gamepedia_en/3/31/Crystal.png",
        "https://img.pngmix.com/pm/crystals/crystals_005.png",
        "https://img.pngmix.com/pm/crystals/crystals_004.png",
        "https://media.giphy.com/media/fQMmshQtGmqXxwHoO1/giphy.gif"
    ];
    


random_answer = Math.floor(Math.random() * 69) + 30;
console.log(random_answer);


$("#answer").html("Your Starting Number: " + random_answer);

for (var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class":"crystal", "data-random": random

        });

        $(".crystals").append(crystal);

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background -size":"cover"
        });

       

    }
      
  $("#crystal").on("click", function(){

    console.log($(this).attr("data-random"));
  })  


$("#previous").html("Total Score: " + previous);

}




resetAndStart();




var crystal = $("<div>");
        crystal.attr({
            "class":"crystals", "data-random": random

        });

        $(".crystals").append(crystals);

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background -size":"cover"
        });

$(document).on('click',"crystals", function() {

    var num = parseInt($(this).attr('data-random'));

    previous += num;
    
    $("#previous").html("Total Score: " + previous);

    if (previous > random_answer) {

    lose++;

    $("#lose").html("Loser!: " + lose );
    previous = 0;

    resetAndStart();


}

else if (previous === random_answer){


    win++;
    $("#win").html("Winner!: " + win);

    previous = 0;

    resetAndStart();

}
});





