const todoList = document.getElementById('todoList');
const listInput = document.getElementById('listInput');
const btnInsert = document.getElementById('btnInsert');
const myActivities = document.getElementById('myActivities');
const listItems = [];
let controllo = [];

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
        newbtn.appendChild(newspan);
        newDiv.appendChild(newp);
        newDiv.appendChild(newbtn);
        myActivities.appendChild(newDiv);
    }
}

function deleteItem(index) {
    listItems.splice(index, 1);
    printList();
    lined();
}




function lined () {
    let newTask = document.querySelectorAll('.pippo');
    for (let i = 0; i < newTask.length; i++) {
        newTask[i].addEventListener('click', function () {
            newTask[i].classList.toggle('lined');
        })
    }
}