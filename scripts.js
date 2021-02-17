function getCurrentTime(){

    var currentTime = new Date();
    var currentHrs = currentTime.getHours();
    var currentMins = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    currentHrs = updateTime(currentHrs);
    currentMins = updateTime(currentMins);
    currentSeconds = updateTime(currentSeconds);


    document.getElementById("clock-box").innerText = currentHrs + ":"+currentMins + ":" + currentSeconds;
    setTimeout(getCurrentTime, 500);
    
}

function updateTime(n){

    if(n < 10){

        return "0"+n;
    }else{
        return n;
    }
}


getCurrentTime();