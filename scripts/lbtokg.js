function multiplyNumbers() {
    //input number1 needs to be pounds there isnt a number2
    let number1 = document.getElementById("number1").value;
    let number2 = ("0.456592").value;

    
    //processing
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    //add the two numbers together and store in my output variable
    //processing needs to convert number1 from pounds to kilograms
    //1 pounds is = to .456592 kilograms
    let sum = number1*number2;

    //output
    //print to screen the conversion
    document.getElementById("sum").innerHTML = "The conversion <strong>is</strong> " + sum + ".";


}