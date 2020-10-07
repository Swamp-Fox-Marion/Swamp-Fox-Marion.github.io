function addnumbers() {
    //input
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    //processing
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let sum = number1 + number2;

    //output
    document.getElementById("output").innerHTML = "The sum <strong>is</strong> " + sum + ".";


}