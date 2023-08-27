document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    addButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        ${taskText}
        <button class="deleteButton">Delete</button>
      `;
      taskList.appendChild(taskItem);
  
      taskInput.value = ""; // Clear the input field
  
      // Attach event listener for deleting the task
      const deleteButton = taskItem.querySelector(".deleteButton");
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem);
      });
    });
  });