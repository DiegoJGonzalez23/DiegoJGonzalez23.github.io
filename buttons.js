let x = 1;
function help(){

    let image = document.getElementById('social');

    if(x%2==1){


       image.src = "Pictures/IMG_3163 (2).png";

        x++;
    }
    else{
        image.src="Pictures/img222.PNG";
        x++;
    }




}

function dothis(){


    location.href="https://www.linkedin.com/in/diego-gonzalez-7a822a212/";
}

function timeSince(){


    var mydate = new Date();
    var yearsince = mydate.getFullYear()-2020;
    var monthsince = mydate.getMonth-4;
    
}