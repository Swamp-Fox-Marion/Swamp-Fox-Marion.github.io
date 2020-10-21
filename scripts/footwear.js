function decideForMe(){
    var text = document.getElementById("weather").value
    switch (text) {
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
            //using switch statement was fewest lines of code
            //simple for me to know what results I wanted and the results I got
    }    
}