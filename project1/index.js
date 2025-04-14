//prvo hvatamo elemente iz html-a pomoću id-a
const todoInput = document.getElementById('todo-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

//svce taskove čuvamo u nizu
//ovo je prazan niz koji će se popunjavati sa taskovima
let tasks = [];

addTaskBtn.addEventListener("click", () => { //dodajemo event listener na dugme "add task" 
    const taskText = todoInput.value.trim() //hvata vrednost iz inputa i briše praznine sa početka i kraja stringa
    if(taskText === "") return //ako je prazan string, ne radi ništa

    const newTask = { //pravimo objekat koji će sadržati task
        id : Date.now(), //generišemo jedinstveni id koristeći trenutni datum i vreme
        text : taskText, //tekst koji je korisnik uneo
        completed : false //da li je task završen ili ne

    }
    tasks.push(newTask) //dodajemo novi task u niz taskova
    todoInput.value = "" // clear input
    console.log(tasks); //proveravamo da li je task dodat u niz


})