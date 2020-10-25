function doMath () {
    //input is user input change string to integer
    let a = parseInt(document.getElementById("a")).value;
    let b = parseInt(document.getElementById("b")).value;
    let operator = document.getElementById("opSel").value;
    let answer = parseInt(document.getElementById("answer")).value;



//processing is determining the options
    if (operator == "+") {
        answer === a + b
        document.getElementById("return").innerHTML = "Correct";
    }else if (operator == "-") {
        answer === a - b
        document.getElementById("return").innerHTML = "Correct";
    }else if (operator == "*") {
        answer === a * b
        document.getElementById("return").innerHTML = "Correct";
    }else if (operator == "/") {
        answer === a / b
        document.getElementById("return").innerHTML = "Correct";
    }else {
        document.getElementById("return").innerHTML = "Incorrect";
    }
}