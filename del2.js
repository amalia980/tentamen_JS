/*============= #1 =============*/

function myFunction() {
    return 5;
}
console.log(myFunction());

/*============= #2 =============*/

myFunction2 = () => 10;
console.log(myFunction2());

/*============= #3 =============*/

function myFunction3(five, ten) {
    return five + ten;
}
console.log(myFunction3(5, 10))

/*============= #4 =============*/

myFunction4 = (five, fifteen) => five + fifteen;
console.log(myFunction4(5, 15));

/*============= #5 =============*/

function myFunction5() {
    console.log(myFunction());
}

myFunction5();