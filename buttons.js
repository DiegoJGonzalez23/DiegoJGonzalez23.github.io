
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

function check_answer(){
    var str = document.getElementById("answer").value;
    if (str == String(num1+num2)){
        make_eq();
        document.getElementById("answer").value = "";
        update_count();
    }
    else{
        counter = -1;
        update_count();
        let popup = document.getElementById("popup");
        popup.classList.add("open-popup");
    }
}

function closepopup(){
    let popup = document.getElementById("popup");
        popup.classList.add("close-popup");
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
