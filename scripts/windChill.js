/*The formula for computing the wind chill factor is 
   f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
where f is the wind chill factor in Fahrenheit, t is the air temperature
in Fahrenheit, and s is the wind speed in miles per hour at five feet above
the ground.
In addition, wind chill is not calculated for temperatures above 
50 degrees Fahrenheit nor for wind speeds below 3 miles per hour. You should NOT
call the function if the input does not meet these specifications.*/

/*In a file named windChill.html, write an HTML document which contains two text
 fields, a button, and a div. The first text field should be labeled “Temperature”
 nd the second should be labeled “Wind Speed”. The button should have the text
  “Wind Chill” written on it. Write two functions with these headers:

function doInputOutput()
function windChill(tempF, speed)
The first function (doInputOutput) must be called from the onclick attribute of
 the button and must do the following:

get a temperature from the first text field and store the value into a variable
 named temperature
get a wind speed from the second text field and store the value into a variable
 named windspeed
call the second function (windChill) if both inputs meet the specifications
store the value returned by windChill in a variable named windchill
output the value returned by windChill to the div for the user to see
The second function (windChill) must

take a temperature in Fahrenheit as a parameter
take a wind speed in miles per hour as a parameter
calculate the wind chill factor as a temperature in Fahrenheit
return the wind chill factor in Fahrenheit*/



function doInputOutput(){
    let speed = parseFloat(document.getElementById("s").value);
    let tempF = parseFloat(document.getElementById("t").value);
    let message = " ";


    if (tempF < 50 && speed > 3) {
        let sc = parseInt(windChill(tempF, speed));
        document.getElementById("output").innerHTML  = `${sc} F`;
    }else{
        document.getElementById("output").innerHTML = `Temp is too high OR wind speed is too low to calculate a wind chill. Try again later.`
    }
}
function windChill(tempF, speed) {
    let windchill = 35.74 + 0.6215 *tempF - 35.75 * speed**0.16 + 0.4275 * tempF * speed**0.16;
    return windchill;
}