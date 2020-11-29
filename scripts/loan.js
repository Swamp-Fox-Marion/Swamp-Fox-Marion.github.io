let pr = floatInt(document.getElementById("principal").value);
let ppr = floatInt(document.getElementById("periodsPerYear").value);
let y = floatInt(document.getElementById("years").value);
let ar = floatInt(document.getElementById("annualRate").value);
let paid = floatInt(document.getElementById("numberOfPaymentPaidToDate").value);
let message;

function doPayment() {
    let payment = computePayment(pr, ar, y, ppr);
    message = payment;
}

function doBalance() {
    let balance = computeBalance(pr, ar, y, ppr, paid);
    message = balance;
}

function computePayment(principal, annualRate, years, periodsPerYear) {
    let r = annualRate / periodsPerYear;
    return (principal * r) / (1 -  (1 + r) ** (-years));

}

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
    let r = annualRate / periodsPerYear;
    return principal * (1 + r) ** numberOfPaymentPaidToDate - (years * ((1 + r) ** numberOfPaymentPaidToDate)-1) / r;
}
document.getElementById("output").innerHTML = message