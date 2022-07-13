
function dothis(){


    location.href="https://www.linkedin.com/in/diego-gonzalez-7a822a212/";
}




var num1;
var num2;
function make_eq(){
    var element = document.getElementById("equation");
     num1 = Math.trunc(Math.random()*100);
     num2 = Math.trunc(Math.random()*100);
    element.innerHTML = String(num1)+ " + " +String(num2) + " = ?";
    
    
}
let x = 0;
var myTimer;
function start_end(){
    x++
    var element = document.getElementById("startbutton");
    if(x % 2 == 1){
        myTimer = setInterval(function() {tick();}, 1000);
        make_eq();
        element.innerHTML="END";
    }
    else{
        
        x--;
        check_answer();
        

    }



}


function check_answer(){
    var str = document.getElementById("answer").value;
    if (str == String(num1+num2)){ // you got the answer correct
        make_eq();
        document.getElementById("answer").value = "";
        update_count();
        
    }
    else{
       
         // you got it wrong// have to make new game send their score and do other stuff
        // Show time when you got it wrong or ended
        clearInterval(myTimer);
        var changetimeonpopup = document.getElementById("timeend");
        var minutesasstring = minutespassed;
        if(minutespassed<10){minutesasstring="0"+minutespassed;}
        var secondsasstring = timeelapsed;
        if(secondsasstring<10){secondsasstring="0"+timeelapsed;}
        changetimeonpopup.innerHTML= "Your time was : " + minutesasstring +":" +secondsasstring;
        minutespassed=0;
        timeelapsed=0;
        document.getElementById("seconds").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00:";
        // show score
        var changescorefinal = document.getElementById("finalscore");
        changescorefinal.innerHTML = "Your score was : " + counter;

        // show pop up itself
        let popup = document.getElementById("popup");
        popup.classList.remove("close-popup");
        popup.classList.add("open-popup");

        // change the counter back to 0
        counter = -1;
        update_count();

    }
}

function closepopup(){
    var element1 = document.getElementById("startbutton"); // changes button back to start 
    element1.innerHTML="START";
    x++;

    let popup = document.getElementById("popup"); // closes popup
    popup.classList.add("close-popup");

    // makes text to start new adventure
    var element2 = document.getElementById("equation");
    element2.innerHTML ="Press start to begin your math adventures";

    //clear input box
    var str = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
}



var counter = 0;
function update_count(){
    
    counter++;
    document.getElementById('counterr').innerHTML = counter;
}
var daysincemarch2020 = 829;
function update_dayssince(){
    daysincemarch2020+=1;
    document.getElementById("daysince").innerHTML = "Days since I started programming: " + daysincemarch2020;

}

var timeelapsed = 0; //seconds elapsed
var minutespassed = 0;
function tick(){
    timeelapsed++;
    if(timeelapsed < 10){
        document.getElementById("seconds").innerHTML = "0" + timeelapsed;
    }
    else if(timeelapsed>=60){
        minutespassed++;

        if(minutespassed<10){
            document.getElementById("minutes").innerHTML = "0" + minutespassed+":";
    
        }
        else{
            document.getElementById("minutes").innerHTML = minutespassed+":";
    }
    timeelapsed = 0;
    document.getElementById("seconds").innerHTML = "00";
        
        
    }
    else{
        document.getElementById("seconds").innerHTML = timeelapsed;
    }
    
}

// Enter WORKS ON MATH GAME NOW 
document.getElementById("answer").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submitbutton").click();
    }
});