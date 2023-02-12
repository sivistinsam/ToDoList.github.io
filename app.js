const input = document.querySelector('#input');
const addBtn = document.querySelector('#add');
const tasks = document.querySelector('.tasks');
const taskCount = document.querySelector('#spanNumber');

const cancel = document.querySelector('.fa-xmark');
const strike = document.querySelector('.fa-strikethrough');


input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active');
    }
    else {
        addBtn.classList.remove('active');
    }
});


let newTaskList = [];
function addList() {

    let pos = tasks.firstElementChild;
    if (input.value.trim() != 0) {
        let newTask = document.createElement('div');
        newTask.classList.add('item');
        newTask.innerHTML = `
        
        <h5>${input.value}</h5>
            <div class="btn">
                <i class="fa-sharp fa-solid fa-strikethrough"></i>
                <i class="fa-solid fa-xmark"></i>

            </div>
            
        `

        if (pos == null) {
            tasks.appendChild(newTask);
        }
        else {
            tasks.insertBefore(newTask, pos);
        }

        newTaskList.push(newTask);
        count();
        // const dataFromLocal = localStorage.getItem(input.value);
        // console.log("dataFromLocal", dataFromLocal);
        // let ram = input.value;
        // const tom = localStorage.setItem("listName", JSON.stringify(ram));
        // const rom = localStorage.getItem("listName");
        // const parsedMovieData = JSON.parse(rom);
        // console.log(parsedMovieData);








        input.value = '';
    }
    else {
        alert('Please enter a task :)')
    }

}

function count() {
    taskCount.innerHTML = newTaskList.length;
}



addBtn.addEventListener('click', () => {
    addList();
});

input.addEventListener('keyup', (event) => {
    if (event.which == 13) {
        addList();
    }
});

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
        newTaskList.pop(newTaskList.newTask);
        count();

    }
});

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-strikethrough')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});


