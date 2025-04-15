document.addEventListener("DOMContentLoaded", () => {


    //prvo hvatamo elemente iz html-a pomoću id-a
    const todoInput = document.getElementById('todo-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    //svce taskove čuvamo u nizu
    //ovo je prazan niz koji će se popunjavati sa taskovima
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => renderTasks(task)) //prolazimo kroz sve taskove i renderujemo ih na stranici

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
        renderTasks(newTask) //renderujemo novi task na stranici
        todoInput.value = "" // clear input

        console.log(tasks); //proveravamo da li je task dodat u niz


    })


    function renderTasks(task) {
        const li = document.createElement("li");
    li.setAttribute("data-id", task.id); //dodajemo id taska kao atribut li elementu
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span> 
    <button>delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return; //ako je kliknuto na dugme, ne radi ništa
      task.completed = !task.completed; //menjamo status taska na suprotno i dodajemo klasu "completed" na li element
      li.classList.toggle("completed"); //dodajemo klasu "completed" na li element i menjamo status taska na suprotno
      saveTasks();
    });
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //zaustavljamo propagaciju događaja, da ne bi došlo do izvršavanja event listener-a na li elementu
        tasks = tasks.filter((t) => t.id !== task.id); //filtriramo taskove i brišemo onaj koji je obrisan pomocu array filter metode
        // ovde je t.id id taska koji je obrisan, a task.id je id taska koji se nalazi u nizu tasks
        li.remove(); //uklanjamo li element sa stranice
        saveTasks(); //čuvamo promene u local storage
     
    });
    todoList.appendChild(li); //dodajemo li element u ul listu
  }

  //sada dodajemo funkciju koja će pamtiti taskove u local storage
  function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks)) //json.stringify pretvara niz u string koji se može sačuvati u local storage
  }
});