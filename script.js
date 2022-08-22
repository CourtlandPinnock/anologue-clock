function movement() {
    let hourHand = document.getElementById("hourHand");
    let minuteHand = document.getElementById("minuteHand");
    let secondHand = document.getElementById("secondHand");

    

    
    
    let timeRun = setInterval(() => {
        const time = new Date();
       let secondDeg = time.getSeconds() * 6;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
        //console.log(secondDeg);
        
        let minuteDeg = time.getMinutes() * 6
        //console.table(minuteDeg);
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    
    
        let hourDeg = (time.getHours() - 12) * 30;
        //console.log(hourDeg);
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }, 1000);
    

}

movement();