document.addEventListener("DOMContentLoaded", () => {


    //prvo hvatamo elemente iz html-a pomoću id-a
    const todoInput = document.getElementById('todo-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    //svce taskove čuvamo u nizu
    //ovo je prazan niz koji će se popunjavati sa taskovima
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.array.forEach(task => renderTask(task)) //prolazimo kroz sve taskove i renderujemo ih na stranici

    addTaskBtn.addEventListener("click", () => { //dodajemo event listener na dugme "add task" 
        const taskText = todoInput.value.trim() //hvata vrednost iz inputa i briše praznine sa početka i kraja stringa
        if (taskText === "") return //ako je prazan string, ne radi ništa

        const newTask = { //pravimo objekat koji će sadržati task
            id: Date.now(), //generišemo jedinstveni id koristeći trenutni datum i vreme
            text: taskText, //tekst koji je korisnik uneo
            completed: false //da li je task završen ili ne

        }
        tasks.push(newTask) //dodajemo novi task u niz taskova
        saveTasks() // ovo je dodato da bismo sačuvali taskove u local storage i ovde je dodato posle pisanja funkcije saveTasks na liniji 32
        todoInput.value = "" // clear input
        console.log(tasks); //proveravamo da li je task dodat u niz


    })


    function renderTask(task) {


    }

    //sada dodajemo funkciju koja će pamtiti taskove u local storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks)) //json.stringify pretvara niz u string koji se može sačuvati u local storage
    }
})