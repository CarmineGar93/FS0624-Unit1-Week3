const todoList = document.getElementById('todoList');
const listInput = document.getElementById('listInput');
const btnInsert = document.getElementById('btnInsert');
const myActivities = document.getElementById('myActivities');
const listItems = [];
let arrayCheck = [];

btnInsert.addEventListener('click', function(e) {
    e.preventDefault();
    if (!checkInput()) return;
    pushArray();
    printList();
    lined();
    todoList.reset();
});

function checkInput() {
    if(listInput.value === '') {
        return false;
    } else {
        return true;
    }
}

function pushArray () {
    listItems.push(listInput.value);
}

function printList () {
    arrayCheck = [];
    let newTask = document.querySelectorAll('.lined');
    for (let i = 0; i < newTask.length; i++) {
        arrayCheck.push(newTask[i].textContent);
    }
    myActivities.innerHTML = '';
    listItems.sort();
    for (let i = 0; i < listItems.length; i++) {
        let newDiv = document.createElement('div');
        let newp = document.createElement ('p');
        newp.classList.add('pippo');
        let newbtn = document.createElement('button');
        newbtn.setAttribute('type', 'button');
        newbtn.setAttribute('onclick', `deleteItem(${i});`);
        let newspan = document.createElement('span');
        newspan.classList.add('material-symbols-outlined');
        newspan.innerText = 'delete';
        newp.innerText = listItems[i];
        for (let j = 0; j < arrayCheck.length; j++) {
            if(arrayCheck[j] === listItems[i]) {
                newp.classList.add('lined');
            }
        }
        newbtn.appendChild(newspan);
        newDiv.appendChild(newp);
        newDiv.appendChild(newbtn);
        myActivities.appendChild(newDiv);
    }
    
}

function deleteItem(index) {
    arrayCheck = [];
    let newTask = document.querySelectorAll('.lined');
    for (let i = 0; i < newTask.length; i++) {
        arrayCheck.push(newTask[i].textContent);
    }
    listItems.splice(index, 1);
    printList();
    lined();
}




function lined () {
    let newTask = document.querySelectorAll('.pippo');
    for (let i = 0; i < newTask.length; i++) {
        newTask[i].addEventListener('click', function () {
            newTask[i].classList.toggle('lined');
            console.log(newTask[i].classList);
        })
    }
}

console.log('Ciao');
