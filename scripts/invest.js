let message = " ";
function doFV() {
    let pr = floatInt(document.getElementById("principal").value);
    let ppr = floatInt(document.getElementById("periodsPerYear").value);
    let y = floatInt(document.getElementById("years").value);
    let ar = floatInt(document.getElementById("annualRate").value);
    let future = computeFutureValue(pr, ar, y, ppr);
    message = `${future}`;
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    /*Where f is the future value, a is the 
    investment amount sometimes called the 
    principal, r is the growth rate per period, 
    and n is the total number of periods throughout 
    the life of the investment.*/
    let r = annualRate / periodsPerYear
    return principal * (1 + r)**years;
    

    //r = annualRate/periodsPerYear
}
document.getElementById("output").innerHTML = message