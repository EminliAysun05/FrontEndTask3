document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskText} <button class="delete-task">Delete</button>`;
        
        taskList.appendChild(newTask);
        taskInput.value = "";  

        newTask.querySelector('.delete-task').addEventListener('click', function() {
            newTask.remove();
            
        }
        
    );
    } else {
        alert("Please enter a task!");
    }
});
document.querySelectorAll('.delete-task').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();  
    });
});
