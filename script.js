    // Create Objects to manipulate elements with.
    let hourHand = document.getElementById("hourHand");
    let minuteHand = document.getElementById("minuteHand");
    let secondHand = document.getElementById("secondHand");
    
    // This function selects which movement the user wants active, and calls the relevent function. Default is quartz.
function selectMovement() {
    // Variable to store which movement is active.
    let movement = "";
    
    // Set default as quartz function.
    if (movement === "") {
        quartz();
    }
    
    // If user clicks quartz button active quartz function.
    let quartzBtn = document.getElementById("quartzBtn");
    quartzBtn.addEventListener("click", () => {
        movement = "quartz";
        if (movement === "quartz") {
            quartz();
        }
    })
    
    // If user clicks mechanical button active mechanical() function.
    let mechBtn = document.getElementById("mechBtn");
    
    mechBtn.addEventListener("click", () => {
        movement = "mechanical"
        if (movement === "mechanical") {
            mechanical();
        }
    })
     
}
    



function mechanical() {
    
    const mechanicalInterval = setInterval(() => {
        
        // Fetch current time.
        const time = new Date();
        // Get current seconds.
        let secondDegMech = time.getSeconds();
        // Get current milliseconds.
        miliSecondDegMech = time.getMilliseconds();
        // Multiply the current seconds by 1000 to get current milliseconds + the current milliseconds of the current second. 
        // This way we keep track of the current milliseconds withing the entire minute.
        let currentMiliSec = secondDegMech * 1000 + miliSecondDegMech;
        // To rotate to desired degree we multiply by 0.006 the current millisecond because 360 deg / 60000 milliseconds == 0.006.
        secondHand.style.transform = `rotate(${currentMiliSec * 0.006}deg)`;
        // Retrive the current minute within the hour.
        let minuteDegMech = time.getMinutes();
        // We are trying to get the current minute within the hour to the millisecond. 
        // Example if getMinutes returns 10. 10min * 60(to which second we are on) == 600seconds * 1000 == 600000 milliseconds + current millisecond within the minute
        // There are 3,600,000 milliseconds in a hour. So 360 degrees / 3,600,000 milliseconds == 0.0001 degrees per millisecond movement on the minute hand.
        let currentMin = minuteDegMech * 60 * 1000 + currentMiliSec;
        minuteHand.style.transform = `rotate(${currentMin * 0.0001}deg)`
        
        let currentMinHour = time.getMinutes();
        let hoursMech = time.getHours();
        // To calculate the position of the hour hand, hours are converted in to minutes, out of one full rotation of the 12 hour format.
        // There are 720 minutes in a 12 hour period. Knowing this we can calculate the position of the hour hand if in minutes.
        // - 12 from hours to get 12 hour format, then mulitply by 60 to convert into minutes.
        // 
        hoursMech = (hoursMech - 12) * 60;
        // 360 degrees / 720 minutes == 0.5 degrees for each minute. Hours + current minute within the hour mulitply by 0.5 gives us the degrees we need.
        let hoursDegrees = (hoursMech + currentMinHour) * 0.5;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    });
    
}

function quartz() {
    const quartzInterval = setInterval(() => {
        // Fetch current time.
        const time = new Date();
        // Get current seconds in the minute and multiply by 6 because each second in a minute == 6 degrees.
        let secondDeg = time.getSeconds() * 6;
        // Rotate to desired degrees (current seconds * 6).
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
        // Get current minutes in the hour and multiply by 6 because 360 deg / 60 minutes == 6 deg per minute.
        let milli = time.getMilliseconds()
        let currentSec = time.getSeconds() * 1000 + milli;
        // console.log(currentSec);
        let minuteDeg = time.getMinutes() * 60 * 1000 + currentSec;
        // Rotate to desired degrees (current minute * 6);
        minuteHand.style.transform = `rotate(${minuteDeg * 0.0001}deg)`;
        console.log( minuteDeg);
        // Get current hours - 12 beacause getHours returns in 24 hour format, multiply by 60.
        let minutesMilli = time.getMinutes();
        // getHours returns 24 hour format, so - 12 gives us the 12 hour equiv. Mulitply by 60 = gives us the minute representation of that hour, only the hour.
        // Hence we add the minutes of within the current hour later to get the degrees.
        let hoursMilli = (time.getHours() - 12) * 60;
        // console.log(hoursMilli);
        let hoursDegrees = (minutesMilli + hoursMilli) * 0.5;
        // console.log(hoursDegrees / 0.5);
        // Rotate to desired deg based on time.
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    });

}

selectMovement();