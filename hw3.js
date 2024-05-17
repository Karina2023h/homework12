 const taskList = document.getElementById("taskList");

    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("deleteButton")) {
            const taskItem = event.target.parentElement;
            taskItem.remove();
        }
    });

    const addTaskButton = document.getElementById("addTaskButton");
    const newTaskInput = document.getElementById("newTaskInput");

     addTaskButton.addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");
            taskItem.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton");
            deleteButton.textContent = "Видалити";

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            newTaskInput.value = "";
        } else {
            alert("Будь ласка, введіть текст завдання!");
        }
    });

    newTaskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
