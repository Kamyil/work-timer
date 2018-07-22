function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
  
    m = checkTime(m);
   
    document.getElementById('clock').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function insertDate(){
    let date = new Date();
    let currentDay:number = date.getDate();
    let currentMonth:number = date.getMonth()+1;
    let currentYear:number = date.getUTCFullYear();
    const day_container = document.querySelector('#todays-date');
    let monthInWords:string;

    switch(currentMonth){

    case 1:
        monthInWords = 'styczeń';
        break;
    case 2:
        monthInWords = 'luty';
        break;
    case 3:
        monthInWords = 'marzec';
        break;
    case 4:
        monthInWords = 'kwiecień';
        break;
    case 5:
        monthInWords = 'maj';
        break;
    case 6:
        monthInWords = 'czerwiec';
        break;
    case 7:
        monthInWords = 'lipiec';
        break;
    case 8:
        monthInWords = 'sierpień';
        break;
    case 9:
        monthInWords = 'wrzesień';
        break;
    case 10:
        monthInWords = 'październik';
        break;
    case 11:
        monthInWords = 'listopad';
        break;
    case 12:
        monthInWords = 'grudzień';
        break;
    }

    day_container.textContent = `${currentDay} ${monthInWords} ${currentYear}`;
}

document.addEventListener("DOMContentLoaded",startTime);
document.addEventListener("DOMContentLoaded",checkTime);
document.addEventListener("DOMContentLoaded",insertDate);