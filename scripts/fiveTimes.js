let i = 1;
let answer = "";
while (i <= 12) {
    answer +=`5 x ${i} = ${5 * i} <br>`;
    i++;
}

document.getElementById("output").innerHTML = answer