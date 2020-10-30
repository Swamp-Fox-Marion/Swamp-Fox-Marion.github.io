function alarm() {
    /* On all weekdays (Monday through Friday) that are not holidays,
        your program should output “Get up!” On all other days
       (weekends and holidays) your program should output “Sleep in.”
        The three holidays that your program must check for are         
        January 1 (New Year’s Day), July 4 (U.S. Independence Day), 
        and December 25 (Christmas). You don’t need to include other 
        holidays in your program because most other holidays do not
        occur on a fixed day each year.*/

        // I put this here hoping it would display the date on the console
    document.getElementById("date").innerHTML = new Date();
       
        
    let now = new Date();   
    let month = now.getMonth();
    let dayOfMonth = now.getUTCDate();
    let dayOfWeek = now.getUTCDay();
// I used == because I was getting error with only =
    if (month == 0 && dayOfMonth == 1) {
        message = "Sleep in.";
    }
    else if (month== 6 && dayOfMonth == 4) {
        message = "Sleep in.";
    }
    else if (month == 11 && dayOfMonth == 25) {
        message = "Sleep in.";
    }
    else if (dayOfWeek == 6 || dayOfWeek == 0) {
        message = "Sleep in.";
    }
    else {
        message = "Get up!";
    }
    document.getElementById("message").innerHTML = message;
    
}
