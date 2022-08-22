function movement() {
    let hourHand = document.getElementById("hourHand");
    let minuteHand = document.getElementById("minuteHand");
    let secondHand = document.getElementById("secondHand");

    

    
    
   /* let timeRun = setInterval(() => {
        
       let secondDeg = time.getSeconds() * 6;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
        //console.log(secondDeg);
        
        let minuteDeg = time.getMinutes() * 6
        //console.table(minuteDeg);
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    
    
        let hourDeg = (time.getHours() - 12) * 30;
        //console.log(hourDeg);
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }, 1000); */
    
    let timeMech = setInterval( () => {
        const timeMech = new Date();
        let secondDegMech = timeMech.getSeconds();
        miliSecondDegMech = timeMech.getMilliseconds();
        let currentMiliSec = secondDegMech * 1000 + miliSecondDegMech;
        //console.log(currentMiliSec)
        secondHand.style.transform = `rotate(${currentMiliSec * 0.006}deg)`;

        let minuteDegMech = timeMech.getMinutes();
        let currentMin = minuteDegMech * 60 * 1000 + currentMiliSec;
        minuteHand.style.transform = `rotate(${currentMin * 0.0001}deg)`
        //console.log(currentMin);

        
    }, 1);
    
    let timeHoursMech = setInterval(() => {
        const time = new Date();
        let currentMin = time.getMinutes();
        let hoursMech = time.getHours();
        hoursMech = (hoursMech - 12) * 60;
        hoursMech = (hoursMech + currentMin) * 0.5;
        console.log(hoursMech / 0.5);
        hourHand.style.transform = `rotate(${hoursMech}deg)`;
    }, 5);

}

movement();