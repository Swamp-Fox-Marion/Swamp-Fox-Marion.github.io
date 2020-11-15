//input define variables
let i = 1;
let answer = "";
//processing a repeating loop
while (i <= 12) {
    answer +=`5 x ${i} = ${5 * i} <br>`;
    i++;
}
//output to the console the repeating message
document.getElementById("output").innerHTML = answer