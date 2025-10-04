//DOM document object model

//Search

const  counterValue = document.getElementById("counter-value");

// counterValue.innerText = 7777;
const actionMinus = document.getElementById("action-minus")

const actionReset = document.getElementById("action-reset")

const actionPlus = document.getElementById("action-plus")

function resetCounter () {
    counterValue.innerText = 0
    setCounterColor ();
}

//events 
actionReset.addEventListener("click", resetCounter);

function plusCounter () {
    let value = Number (counterValue.innerText);
    value++;
    counterValue.innerText = value;
    setCounterColor ();
}

actionPlus.addEventListener('click',plusCounter);

function minusCounter () {
    let value = Number (counterValue.innerText);
    value--;
    counterValue.innerText = value;
    setCounterColor ();
}

actionMinus.addEventListener('click', minusCounter);


function setCounterColor () {
    let value = Number (counterValue.innerText);
    if (value > 0) {
        counterValue.style.color = "lime";
    }else if (value < 0) {
        counterValue.style.color = "red";
    }else {
        counterValue.style.color = "cyan";
    }
}

//DRY don't repead yourself


// primitive
// let a = 1;
// let b = a;

// b++

// console.log(a);


// not primitive 
// let objA = {Number: 1};
// let objB = objA;

// objB.Number++;

// console.log(objA.Number);

