function multiplyNumbers() {
    //input number1 needs to be pounds there isnt a number2
    let number1 = document.getElementById("number1").value;
    

    
    //processing
    number1 = parseFloat(number1);
    //processing needs to convert number1 from pounds to kilograms
    //1 pounds is = to .456592 kilograms
    let kilograms = .456592 * number1;
   
    //output
    //print to console the conversion
    document.getElementById("kilograms").innerHTML = "The answer you are looking for <strong>is</strong> " + kilograms.toFixed(1) + " kilograms.";


}