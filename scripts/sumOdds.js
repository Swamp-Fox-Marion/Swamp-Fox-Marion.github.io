/*In a file named, sumOdds.html, write a program that asks the user for an
 integer n and then outputs the sum of all the odd integers between 1 and n, 
 inclusive.
For example,
if a user entered 10, your program would add 1 + 3 + 5 + 7 + 9 and output 25.

If a user entered 11, your program would add 1 + 3 + 5 + 7 + 9 + 11 and output 36.*/


//user input will be the ending for the repetition

//for (let i = 1; i<= userInput; i++)
   
function sumOdds() {
    let n = document.getElementById("n").value;
    let count = 0;
    let i;


    
    /*Processing is placing the input into the fuction and repeat until perameters 
have been met*/
    for (let i=1; i <= n; i++){
        count += i;
        i++;
        
        
    
    }
    /*Output is the repetition has met its concluding factors and the results displays
to the user*/
    document.getElementById("output").innerText = "The sum of the odds is " + count
}
   


