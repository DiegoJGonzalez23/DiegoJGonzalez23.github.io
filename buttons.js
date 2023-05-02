// CTRL+ K CTRL 0 folds functions and CTRL K CTRL J unfolds

/*Home page------------------------------------------------------------------------------------------------------------------- */
function dothis(){


    location.href="https://www.linkedin.com/in/diego-gonzalez-7a822a212/";
}

/*Home page------------------------------------------------------------------------------------------------------------------- */

/* Ortho Solver
function makematrix(){
    
}


/*Gambling Game*/
var balance = 500.0;


function random_dice(){
    console.log(1);
    var betamount = document.getElementById("betamount").value;
    
    var percent = document.getElementById("percent").value;
    var xx = Math.random()*100;
    var yy = parseInt(percent);
    if(betamount>balance){
        document.getElementById("errorsgambling").innerHTML = "Your balance is too low for this type of bet. Smarten up kid";
        
        setTimeout(function(){document.getElementById("errorsgambling").innerHTML = '';}, 3000); //removes message after 3s
    }

    else if(percent>=100){
        document.getElementById("errorsgambling").innerHTML = "You can't do a percentage this big. Smarten up kid";
        
        setTimeout(function(){document.getElementById("errorsgambling").innerHTML = '';}, 3000); //removes message after 3s
    }

    else if(xx < yy){
        // You win your bet
        console.log(2);
        balance += (betamount)*(100-parseInt(percent)) / (parseInt(percent));
        console.log(balance);
        var audio = document.getElementById("audio");
        if(audio.volume == 0){
            audio.play();
        }
        else{
            audio.volume=0.4;
            audio.play();

        }
        
        


    }
    else{
        // You lose your bet
        balance -= betamount;
    }

    // Reset inputs and change balance
    if(balance < 500){
        document.getElementById("balancenumber").style.color="red";
        // You have negative  balance
    }
    if(balance>=500){
        document.getElementById("balancenumber").style.color="#7dd87d"; 
    }

    if(balance==0){
        gonebroke();
    }





    balance = parseFloat(balance.toFixed(2));
    document.getElementById("balancenumber").innerHTML = "$" + balance;
    document.getElementById("percent").value="";
    document.getElementById("betamount").value="";
}

var counterofmute = 1;
function muteorunmute(){
    if(counterofmute % 2 == 1){
        var audio = document.getElementById("audio");
        audio.volume = 0;
        
        document.getElementById("changevolume") = "Pictures/volumeoff.png";
        

    }

    else{
        document.getElementById("changevolume").src = "Pictures/volumeon.png";
        var audio = document.getElementById("audio");
        audio.volume = 0.4;

    }

    counterofmute++;
}

function showpopupgambling(){
    document.getElementById("balanceatend").innerHTML  = "You had $" + balance+ " at the end.";
    document.getElementById("popupgambling").style.visibility = "visible";
    document.getElementById("popupgambling").style.transform = "translate(-50%,-50%) scale(1)";
   



}

function gamblingok(){
    // fix balance, display it, and change color to green, clear inputs
    balance = 500;
    document.getElementById("balancenumber").style.color="#7dd87d";
    document.getElementById("balancenumber").innerHTML = "$" + balance.toFixed(2);
    document.getElementById("percent").value="";
    document.getElementById("betamount").value="";

    // close popup
    document.getElementById("popupgambling").style.visibility = "hidden";
    document.getElementById("popupgambling").style.transform = "translate(-50%,-50%) scale(.1)";

    // change popup to the pop up end you end gambling session
    document.getElementById("gamblingpic").src = "Pictures/moneygreen.png";
    document.getElementById("popuptitlegambling").innerHTML = "You ended your gambling session";
    document.getElementById("popupsubtitlegambling").innerHTML = "You still had money so I consider that a win!</p>";

    
}

function gonebroke(){
    // messages of losing all money
    document.getElementById("popuptitlegambling").innerHTML = "The gambling session has ended since you have no money."
    document.getElementById("popupsubtitlegambling").innerHTML = "How could you do this, you had $500 to start?";
    document.getElementById("balanceatend").innerHTML  = "You had no money at the end :(";

    //broke pic
    document.getElementById("gamblingpic").src = "Pictures/nomoney.png";

    //making popup visible
    document.getElementById("popupgambling").style.visibility = "visible";
    document.getElementById("popupgambling").style.transform = "translate(-50%,-50%) scale(1)";
    

}


/*Gambling Game*/


/*Math game------------------------------------------------------------------------------------------------------------------------- */
var num1;
var num2;
var maxintjs = 50;

// Checking the checkboxes, if none are checked it assumes only addition
var addused = false;
var subused = false;
var multused = false;
var selectsign;
let y = 0;
function show_settings(){
    y++;
    let showsettings = document.getElementById("settingsfinal");
    if(y%2==1){
        document.getElementById("settingsfinal").style.visibility="visible";
      
    }
    else{

        document.getElementById("settingsfinal").style.visibility="hidden";
    }
}

function make_eq(){
    
    var element = document.getElementById("equation");
     num1 = Math.trunc(Math.random()*maxintjs);
     num2 = Math.trunc(Math.random()*maxintjs);

    selectsign = allowedsigns[Math.trunc(Math.random()* allowedsigns.length)];
    
    
    element.innerHTML = String(num1)+ selectsign + String(num2) + " = ?";
    
    
}
let x = 0;
var myTimer;
var questionstoask = 25;
var allowedsigns = [];

function start_end(){
    

    if(document.getElementById("adding").checked){
        addused = true;
        allowedsigns.push(" + ");
    }
    
    if(document.getElementById("subtract").checked){
        subused = true;
        allowedsigns.push(" - ");
    }
    
    if(document.getElementById("multiply").checked){
        multused = true;
        allowedsigns.push(" * ");
    }
    if(!addused && !subused && !multused){
        addused = true;
        allowedsigns.push(" + ");
    }


    x++
    var element = document.getElementById("startbutton");
    if(x % 2 == 1){
        document.getElementById("settingsbutton").style.visibility="hidden";
        document.getElementById("settingsfinal").style.visibility="hidden";
        element.innerHTML="END"; // Switches start button to end button

        // Makes correct number of questions, if no input regular number is 25
        var inputforquestions = document.getElementById("numberquestions").value;
        if(inputforquestions != ""){
            questionstoask = parseInt(inputforquestions);
            var displayquestions = document.getElementById("totalq").innerHTML = "/" + inputforquestions;
        }

        // Checks for max int, if no input regular number is 50
        var maxintegerinputted = document.getElementById("maxint").value;
        if(maxintegerinputted != ""){
            maxintjs = parseInt(maxintegerinputted);
            
        }

        //Hide Settings tab
        let setting = document.getElementById("settingsfinal");
        setting.classList.add("close-settings");




        //At the END of the start  process
        myTimer = setInterval(function() {tick();}, 1000); // starts timer
        make_eq(); // brand new question



    }
    else{
        
        x--;
        check_answer();
        

    }



}


function check_answer(){
    var str = document.getElementById("answer").value;
    //console.log(10000);
    if(selectsign == " + "){
        //console.log("addition");
        if (str == String(num1+num2)){ // you got the answer correct

            make_eq();
            document.getElementById("answer").value = "";
            update_count();
            
        }
        else{
            //console.log(num1+num2);
            //console.log(str);
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
            changescorefinal.innerHTML = "Your score was : " + counter + "/" + questionstoask;
    
            // show pop up itself
            let popup = document.getElementById("popup");
            popup.classList.remove("close-popup");
            popup.classList.add("open-popup");
    
            // change the counter back to 0
            counter = -1;
            update_count();
    
        }

    }

    else if(selectsign == " - "){
        //console.log("subtraction");
        if (str == String(num1-num2)){ // you got the answer correct
            
            document.getElementById("answer").value = "";
            update_count();
            make_eq();
            
        }
        else{
           // console.log(num1-num2);
            //console.log(str);
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
            changescorefinal.innerHTML = "Your score was : " + counter + "/" + questionstoask;
    
            // show pop up itself
            let popup = document.getElementById("popup");
            popup.classList.remove("close-popup");
            popup.classList.add("open-popup");
    
            // change the counter back to 0
            counter = -1;
            update_count();
    
        }

    }

    else if(selectsign == " * "){
        //console.log("multiplication");
        if (str == String(num1*num2)){ // you got the answer correct
            make_eq();
            document.getElementById("answer").value = "";
            update_count();
            
        }
        else{
            //console.log(num1*num2);
           // console.log(str);
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
            changescorefinal.innerHTML = "Your score was : " + counter + "/" + questionstoask;
    
            // show pop up itself
            let popup = document.getElementById("popup");
            popup.classList.remove("close-popup");
            popup.classList.add("open-popup");
    
            // change the counter back to 0
            counter = -1;
            update_count();
    
        }

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

    // Open settings up again and clear the settings input boxes

    let setting = document.getElementById("settingsfinal");
    setting.classList.remove("close-settings");
    document.getElementById("numberquestions").value = "";
    document.getElementById("maxint").value = "";

    // Reset things about the popup (make it a lost message again)

    document.getElementById("popuptitle").innerHTML = "You lost :(";
    document.getElementById("popupsubtitle").innerHTML = "Thank you for playing!";
    document.getElementById("yalost").src = "Pictures/redx.jpg";

    document.getElementById("settingsbutton").style.visibility="visible";
    y = 0;

    // reset sign array
    allowedsigns = [];

        
}


// checks score and updates score when you get something right or when you win  ---------
var counter = 0;
function update_count(){ 
    
    counter++;
    document.getElementById('counterr').innerHTML = counter;

    if(counter == questionstoask){ // if you win show popup that you won 
        // Show score on popup
        var changescorefinal = document.getElementById("finalscore");
        changescorefinal.innerHTML = "Your score was : " + counter +"/"+questionstoask;

        // change timer back to 00:00 and display time that you won in
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

        // Switch the you lost popup to you won!
        document.getElementById("popuptitle").innerHTML = "You Won !! :)";
        document.getElementById("popupsubtitle").innerHTML = "Einstein Level of GENIUS";
        document.getElementById("yalost").src = "Pictures/checkmark.jpg";
        
        // change the counter back to 0 and total questions
        counter = 0;
        document.getElementById('counterr').innerHTML = counter;
        questionstoask = 25;
        document.getElementById("totalq").innerHTML = "/" + questionstoask;

        // show popup itself
        let popup = document.getElementById("popup");
        popup.classList.remove("close-popup");
        popup.classList.add("open-popup");
    }
}
// checks score and updates score when you get something right or when you win  ---------


// STOPWATCH FOR MATH GAME------------------------------------------------------------------------
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
// STOPWATCH FOR MATH GAME---------------------------------------------------------------------------



/*Math game------------------------------------------------------------------------------------------------------------------------- */