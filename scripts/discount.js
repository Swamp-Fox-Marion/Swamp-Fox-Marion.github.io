function discount() {
    /*You work for a retail store that wants to increase sales on Tuesday
    and Wednesday which are the store’s slowest sales days. In a file named 
    discount.html, write a program that takes a customer’s subtotal amount as
    input and if the subtotal is greater than $50 and today is Tuesday or
    Wednesday, the program should subtract 10% from the subtotal. Your program
    should then compute and output the total amount due by adding sales tax
    of 6% to the subtotal. Help: Within your program, use this JavaScript
    code that will get the current day of the week from your computer’s
    clock:     var dayOfWeek = new Date().getDay();
    If you use the above code, the variable dayOfWeek will hold 0 if today is 
    Sunday, 1 if today is Monday, and so on to 6 if today is Saturday. */
    
    /*customers subtotal > 50 && dayOfWeek = 2 || dayOfWeek = 3
    then - .10 from subtotal 
    output is new subtotal + sales tax .06 */

    //input the required info for the program to run the function
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let dayOfWeek = new Date().getUTCDay();
    let newSubtotal;


    //processing the info taken from the user input and the internal system
    if (subtotal > 50 && dayOfWeek == 2 || subtotal >50 && dayOfWeek == 3) {
        newSubtotal = subtotal - (subtotal * .10);
        message = newSubtotal + (newSubtotal * .06) ;
        
    } else {
        message = subtotal + (subtotal * .06);
    }
    //output the message that the process had computed
    document.getElementById("output").innerHTML = message;
}   