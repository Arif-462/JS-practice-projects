
function myTime (){
    var myDate = new Date();
    var hr, min = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes(): myDate.getMinutes(),
    sec = (myDate.getSeconds() < 10)? "0" + myDate.getSeconds() : myDate.getSeconds(),
    mins = (myDate.getHours() >= 12)? "PM":"AM";

    var dayOf = myDate.getDay();

    if(myDate.getHours() == 0){
        hr = 12;
    } else if(myDate.getHours() > 12 ){
        hr = myDate.getHours() - 12;
    }
    else{
        hr = myDate.getHours;
    }

    var currentTime = hr +" : "+ min +" : "+ sec ;

    document.getElementsByClassName("hour")[0].innerHTML = currentTime;
    document.getElementsByClassName("min")[0].innerHTML = mins; 
    
    var myDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satarday"],
    Mymonth = ["January", "February", "March", "Appril", "May", "Jun", "July", "August","September", "October","Novemvber","December"],
    day = myDate.getDate();

    var currentDate = myDay[myDate.getDay()] +", "+ day +" " + Mymonth[myDate.getMonth()] +" " + myDate.getFullYear();
    document.getElementsByClassName("day")[0].innerHTML = currentDate;
    
}

myTime();

setInterval(function(){
    myTime();
}, 1000);

setInterval();