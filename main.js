const results = document.querySelector('.result');
const number = document.querySelectorAll('.btn.number');
const btn2 = document.querySelector('.btn2');
const eventN = document.querySelectorAll('.btn2.event');
const del = document.querySelector('.btn1.reset');

//numbers

function click(event) {
    results.textContent += event.target.textContent;
}

number.forEach(key => key.addEventListener('click', click));

//reset

function reset(){
    results.textContent = '';
}

del.addEventListener('click', reset);

//events

function e(event) { 

let search = /[+\-\*/]/;

    if(search.test(results.textContent)){
        return;
    }
    if else()

    results.textContent += event.target.textContent;

}

eventN.forEach(key => key.addEventListener('click', e));