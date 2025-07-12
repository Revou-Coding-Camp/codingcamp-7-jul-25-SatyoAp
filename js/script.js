const inputData = document.getElementById("todo-input");
const inputTanggal = document.getElementById("due-date");
const form = document.getElementById("task-form");
const listElement = document.getElementById("task-items");

const showAllBtn = document.getElementById("show-all-btn");
const completeData = document.getElementById("complete-btn");
const inProgressData = document.getElementById("in-progress-btn");

const deleteData = document.getElementById("delete-btn");

function createTaskRow(taskText, duedate) {
  const row = document.createElement("tr");
  row.classList.add("in-progress", "bg-white", "border-b", "hover:bg-gray-50");

  const nameCell = document.createElement("td");
  nameCell.textContent = taskText;

  const dateCell = document.createElement("td");
  dateCell.textContent = duedate;

  const statusCell = document.createElement("td");
  statusCell.textContent = "In Progress";

  const actionCell = document.createElement("td");
  actionCell.classList.add("px-4", "py-2", "space-x-2");

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add(
    "bg-green-500",
    "text-white",
    "px-2",
    "py-1",
    "rounded",
    "text-sm",
    "hover:bg-green-600",
    "cursor-pointer"
  );
  completeButton.addEventListener("click", () => {
    row.classList.remove("in-progress");
    row.classList.add("completed");
    statusCell.textContent = "Completed";
    completeButton.disabled = true;
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add(
    "bg-red-500",
    "text-white",
    "px-2",
    "py-1",
    "rounded",
    "text-sm",
    "hover:bg-red-600",
    "cursor-pointer",
    "mt-2"
  );
  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  actionCell.appendChild(completeButton);
  actionCell.appendChild(deleteButton);

  row.appendChild(nameCell);
  row.appendChild(dateCell);
  row.appendChild(statusCell);
  row.appendChild(actionCell);

  return row;
}

function addTask(event) {
  event.preventDefault();
  const taskText = inputData.value.trim();
  const duedate = inputTanggal.value;
  if (taskText === "") return;

  const newRow = createTaskRow(taskText, duedate);
  listElement.appendChild(newRow);

  inputData.value = "";
  inputTanggal.value = "";
}

function showAllTasks() {
  const rows = listElement.querySelectorAll("tr");
  rows.forEach((row) => (row.style.display = ""));
}

function showCompletedTasks() {
  const rows = listElement.querySelectorAll("tr");
  rows.forEach((row) => {
    if (row.classList.contains("completed")) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function showInProgressTask() {
  const rows = listElement.querySelectorAll("tr");
  rows.forEach((row) => {
    if (row.classList.contains("in-progress")) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function deleteAllTasks() {
  const rows = listElement.querySelectorAll("tr");
  rows.forEach((row) => {
    row.remove();
  });
}

form.addEventListener("submit", addTask);
showAllBtn.addEventListener("click", showAllTasks);
completeData.addEventListener("click", showCompletedTasks);
inProgressData.addEventListener("click", showInProgressTask);
deleteData.addEventListener("click", deleteAllTasks);
