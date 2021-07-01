const myInput = document.getElementById('input');
const myButton = document.getElementById('button');
const myUl = document.getElementById('ul');
const error = document.getElementById('error');



myButton.addEventListener("click", function() {
/*
    if (myInput) {

        const myLi = document.createElement('li');

        myUl.appendChild(myLi);

        myLi.innerText = myInput.value;
    }
    else if (!myInput) {
        error.innerText = "Field must not be empty";
    }
*/

const stringValue = myInput.value;
const stringLength = stringValue.length;


if (stringLength === 0) {
    //error.innerHTML = "Field must not be empty";

    alert("Field must not be empty");
   
}
else if (stringLength) {
    const myLi = document.createElement('li');
    myLi.style.cursor = "pointer";

    myUl.appendChild(myLi);

    myLi.innerText = stringValue;
}

myLi.addEventListener("click", function() {
    myLi.remove();
});

});