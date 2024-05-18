const taskBlock = document.getElementById("taskList");

taskBlock.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteButton")) {
    const itemBlock = e.target.parentElement;
    itemBlock.remove();
  }
});
const taskButton = document.getElementById("taskButton");
const newTask = document.getElementById("newTask");

taskButton.addEventListener("click", function () {
  const taskText = newTask.value.trim();
  if (taskText !== "") {
    const itemBlock = document.createElement("li");
    itemBlock.classList.add("task-item");
    itemBlock.textContent = taskText;

    const deletButton = document.createElement("button");
    deletButton.classList.add("deleteButton");
    deletButton.textContent = "Видалити";
    itemBlock.appendChild(deletButton);
    taskBlock.appendChild(itemBlock);
    newTask.value = "";
  } else {
    alert("Будь ласка, введіть текст завдання!");
  }
});
newTask.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    taskButton.click();
  }
});
