let message;
function doFV() {
    let a = floatInt(document.getElementById("principal").value);
    let p = floatInt(document.getElementById("periodsPerYear").value);
    let n = floatInt(document.getElementById("years").value);
    let x = floatInt(document.getElementById("annualRate").value);
    let future = computeFutureValue(a, x, n, p);
    message = future;
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    /*Where f is the future value, a is the 
    investment amount sometimes called the 
    principal, r is the growth rate per period, 
    and n is the total number of periods throughout 
    the life of the investment.*/
    return a(1+(x%p))**n;
    

    //r = annualRate/periodsPerYear
}
document.getElementById("output").innerHTML= message