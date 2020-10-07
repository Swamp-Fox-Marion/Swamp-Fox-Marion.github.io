function addnumbers() {
    //input
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    //processing
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    //add the two numbers together and store in my output variable
    let sum = number1 + number2;

    //output
    document.getElementById("sum").innerHTML = "The sum <strong>is</strong> " + sum + ".";


}