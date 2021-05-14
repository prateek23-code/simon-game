var buttoncolors =["red","blue","green","yellow"];
var game=[];
var a=[];
var level=0;
var tw=0;


document.addEventListener("keypress",news);
$("button").click(function(event){
    $(this).addClass("pressed");
    
    var chosecolor = this.id;
    a.push(chosecolor);
    console.log(a);
    var gh=chosecolor+".mp3";
    var audio = new Audio(gh);
    audio.play();
    animatePress(chosecolor);
    tw = tw+1;
    if(tw == level){
        if(_.isEqual(game, a)){
            alert("success");
            
        }
        else{
            alert("wrong");
        }
    }
});


function tyu(){
    $("h1").text("level"+level);
}

function news(){
    tyu();
    var rand =  Math.floor(Math.random() * Math.floor(4));
    var rt=buttoncolors[rand];
    game.push(rt);
    var d= "#"+rt;
    $(d).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var tv = rt+".mp3";
    console.log(game);
    level=level+1;
    var audio = new Audio('po.mp3');
    audio.play();

  

}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  