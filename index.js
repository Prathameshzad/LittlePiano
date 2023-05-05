var numberOfbuttons = document.querySelectorAll(".piano").length;

for(var i=0; i<numberOfbuttons;i++){
    document.querySelectorAll(".piano")[i].addEventListener("click",function(){
        var buttonClick = this.innerHTML;
        makesound(buttonClick);

        buttonAnimation(buttonClick);
    });

document.addEventListener("keypress", function(event){
    
    makesound(event.key);

    buttonAnimation(event.key);
})
}

function makesound(key){
    switch (key) {
        case "w":
            var key1 = new Audio("sound/C3.mp3");
            key1.play();
            break;

        case "a":
            var key2 = new Audio("sound/D3.mp3");
            key2.play();
            break; 

        case "s":
            var key3 = new Audio("sound/E3.mp3");
            key3.play();
            break;

        case "d":
            var key4 = new Audio("sound/Eb3.mp3");
            key4.play();
            break;      

        case "j":
            var key5 = new Audio("sound/F3.mp3");
            key5.play();
            break;

        case "k":
            var key6 = new Audio("sound/G3.mp3");
            key6.play();
            break;

        case "l":
            var key7 = new Audio("sound/Gb3.mp3");
            key7.play();
            break;

        default:
            console.log();
            break;
    }
}

function buttonAnimation(button){

    var currButton = document.querySelector("." + button);
    currButton.classList.add("pressed");
    setTimeout(function () {
       currButton.classList.remove("pressed") 
    }, 100);
}