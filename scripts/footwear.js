function decideForMe(){
    //input is the selection of the dropdown set as a variable as 'let weather
    let weather = document.getElementById("weather").value
    //processing the input from user through a switch statement(s)
    //to output the string that coresponds with the correct process from the unput from user
    switch (weather) {
        case "hot":  
            document.getElementById("shoes").innerText ="It is best you wear sandals today";
            break;
        case "rain":
            document.getElementById("shoes").innerText ="The recommended footwear today is galoshes";
            break;
        case "snow":
            document.getElementById("shoes").innerText ="To keep your feet warm wear boots";
            break;    
        default:
            document.getElementById("shoes").innerText ="Who cares about the weather just wear shoes you love today";
            break;
            
    }    
}