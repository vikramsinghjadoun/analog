const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360) + 90;
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60) * 60) + 90;
    const hours = now.getHours();
    const hoursDegree = (hours/60) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    
    //console.log(secondsDegree)
}

setInterval(setDate , 1000);