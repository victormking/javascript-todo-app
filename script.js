// 1. Grab the HTML elements we need
const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// 2. Add a click event to the "Add Task" button
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim(); // Get the input text and remove spaces

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // 3. Create a new list item (li) element
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  // 4. Add click to toggle "completed" status
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  // 5. Add right-click to remove task
  listItem.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Prevent the right-click menu
    listItem.remove();
  });

  // 6. Add the task to the list
  taskList.appendChild(listItem);

  // 7. Clear the input box
  taskInput.value = "";
});
