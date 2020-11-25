let a = floatInt(document.getElementById("principal").value);
let r = floatInt(document.getElementById("periodsPerYear").value);
let n = floatInt(document.getElementById("years").value);
let x = floatInt(document.getElementById("annualRate").value);
let d = floatInt(ocument.getElementById("numberOfPaymentPaidToDate").value);
let message;

function doPayment() {
    let payment = computePayment(a, x, n, r);
    message = payment;
}

function doBalance() {
    let balance = computeBalance(a, x, n, r, d);
    message = balance;
}

function computePayment(principal, annualRate, years, periodsPerYear) {
    return (a*(r%x))%(1-(1+(r%x))**-n)

}

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
    return a(1+(r%x))**d - (p((1+(r%x))**d)-1)%r;
}
document.getElementById("output").innerHTML = message