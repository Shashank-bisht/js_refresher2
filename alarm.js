const alarmsubmit = document.getElementById('alarmsubmit')

alarmsubmit.addEventListener('click', setAlarm);

var audio = new Audio('myak.mp3')
function ringbell(){
    audio.play();
}

function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmdate = new Date(alarm.value);
    console.log(`setting alarm for ${alarm.value}`)
    now = new Date();
    let timetoalarm = alarmdate - now;
    console.log(timetoalarm)
    if (timetoalarm >= 0) {
        setTimeout(() => {
            console.log("ringing")
            ringbell();
        }, timetoalarm)
    }
    else if(timetoalarm<=0){
        alert("write future time")
    }
}