const numbersDiv = document.getElementById('numbersDiv');
let arrayCheck = [];

window.addEventListener('load', init());

function init() {
    printNumbers();
};

function printNumbers() {
    for (let i = 0; i < 90; i++) {
        const divNumber = document.createElement('div');
        divNumber.classList.add('numbers');
        const numberCell = document.createElement('h3');
        numberCell.innerText = i + 1;
        divNumber.appendChild(numberCell);
        numbersDiv.appendChild(divNumber);
    }
}

const btnExtraction = document.getElementById('btnExtract');
btnExtraction.addEventListener('click', function(e) {
    e.preventDefault();
    if (arrayCheck.length >= 90) {
        printNumber(extractRandom());
        endGame();
    } else {
        printNumber(extractRandom());
    }
    
     
});

function extractRandom() {
    let randomN = Math.floor(Math.random() * 90) + 1;
    for (let i = 0; i < arrayCheck.length; i++) {
        if (arrayCheck[i] === randomN) {
            randomN = Math.floor(Math.random() * 90) + 1;
            i = 0;
        }
    }
    arrayCheck.push(randomN);
    console.log(arrayCheck);
   
    return randomN;
};

function printNumber(n) {
    let divNumbers = document.querySelectorAll('.numbers, .numbers2');
    console.log(divNumbers);
    for (let i = 0; i < divNumbers.length; i++) {
        if (divNumbers[i].innerText == n) {
            divNumbers[i].classList.add('extracted')
        } 
    }
    let extractionDiv = document.getElementById('extraction');
    extractionDiv.innerHTML = '';
    let extraction = document.createElement('h2');
    extraction.innerText = `Il numero estratto è: ${n}`;
    extractionDiv.appendChild(extraction);
    extractionDiv.classList.remove('hidden');
}

function endGame () {
    btnExtraction.setAttribute('disabled', true);
    let extractionDiv = document.getElementById('extraction');
    let extraction = document.createElement('h2');
    extraction.innerText = `Fine partita - Premere reset per ricominciare`;
    extractionDiv.appendChild(extraction);
    
}

let btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', function(e) {
    let myConfirm = confirm('Sei sicuro?');
    if(!myConfirm) return;
    e.preventDefault();
    btnreset();
});

function btnreset() {
    let extractedDiv = document.querySelectorAll('.extracted');
    for (let i = 0; i < extractedDiv.length; i++) {
        extractedDiv[i].classList.remove('extracted')
    }
    arrayCheck = [];
    let extractionDiv = document.getElementById('extraction');
    extractionDiv.innerHTML = '';
    btnExtraction.removeAttribute('disabled');
}

const formCards = document.querySelector('form');
formCards.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';
    const numbersCard = document.getElementById('inputCards').value;
    printCards(numbersCard);
    formCards.reset();
}

function printCards(n) {
    const cardsContainer = document.getElementById('cardsContainer')
    for (i = 0; i < n; i++) {
        let newDivCard = document.createElement('div');
        newDivCard.classList.add('cards');
        
        for (j = 0; j < 15; j++) {
            let arrayCheck2 = [];
            let newDiv = document.createElement('div');
            newDiv.classList.add('numbers2');
            let newCell = document.createElement('h3');
            let random = Math.floor(Math.random() * 90) + 1;
            for (let a = 0; a < arrayCheck2.length; a++) {
                if (arrayCheck2[a] === random) {
                    random = Math.floor(Math.random() * 90) + 1;
                    a = 0;
                }
            }
            arrayCheck2.push(random);
            newCell.innerText = random;
            newDiv.appendChild(newCell);
            newDivCard.appendChild(newDiv);
        }
        cardsContainer.appendChild(newDivCard);
    }
}