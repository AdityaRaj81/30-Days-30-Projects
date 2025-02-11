document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  const addButton = document.getElementById("add-btn");
  const clearButton = document.getElementById("clear-btn");
  const progressText = document.getElementById("progress-text");

  // Load tasks from localStorage
  loadTasks();

  // Show current date and time
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Add new task when 'Add' button is clicked
  addButton.addEventListener("click", addTask);

  // Clear all tasks
  clearButton.addEventListener("click", clearAllTasks);

  // Handle item check, edit, and delete
  listContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
      saveTasks();
    } else if (e.target.classList.contains("edit-btn")) {
      editTask(e.target.parentElement);
    } else if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTasks();
    }
  });

  function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
      alert("You must write something!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Create Edit and Delete buttons
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.classList.add("edit-btn");
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);

    listContainer.appendChild(li);
    inputBox.value = "";
    saveTasks();
  }

  function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
    updateProgress();
  }

  function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
    updateProgress();
  }

  function editTask(taskItem) {
    const updatedTask = prompt("Edit Task:", taskItem.textContent);
    if (updatedTask) {
      taskItem.firstChild.textContent = updatedTask;
      saveTasks();
    }
  }

  function clearAllTasks() {
    listContainer.innerHTML = "";
    saveTasks();
  }

  function updateProgress() {
    const totalTasks = listContainer.children.length;
    const completedTasks = document.querySelectorAll("#list-container .checked").length;
    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    progressText.textContent = `${progress}%`;
  }

  function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").textContent = now.toLocaleDateString(undefined, options);
    document.getElementById("current-time").textContent = now.toLocaleTimeString();
  }
});
