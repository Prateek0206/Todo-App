import { generateId } from "./functions.js";
const body = document.body;
const submitButton = document.getElementsByClassName("js-submit-button")[0];
const taskList = document.querySelector(".js-task-list");
const doneTaskList = document.querySelector(".right-container .js-task-list");
let taskListInnerHtml = ``;
let doneTaskListName = ``;
let tickSvg = "";
let status = "";
export let numberOfTasks = 0;
submitButton.addEventListener("click", () => {
  if (status === "done") {
    tickSvg = ` <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="rgb(0, 172, 0)"
                    >
                      <path
                        d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      />
                    </svg>`;
  } else {
    tickSvg = `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path
                          d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"
                        />
                      </svg>`;
  }

  taskList.innerHTML = "";
  const inputText = document.querySelector(".js-input");
  let taskId = generateId();
  if (inputText.value.trim() != "") {
    status='notDone'
    numberOfTasks++;
    taskListInnerHtml += `<div class="task-name" id="${taskId}">
                  <span>${inputText.value}</span>
                  <div class="options">
                    <span title="task complete" class="js-task-complete" data-id="${taskId}">
                      ${tickSvg}
                    </span>
                    <span title="task-cancel" class="js-task-cancel" data-id="${taskId}">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path
                          d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>`;
    taskList.innerHTML = taskListInnerHtml;
    inputText.value = "";
  } else {
    alert("Task cannot be empty");
  }
});

body.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    let tickSvg = `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path
                          d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"
                        />
                      </svg>`;
    taskList.innerHTML = "";
    const inputText = document.querySelector(".js-input");
    let taskId = generateId();
    if (inputText.value.trim() != "") {
      numberOfTasks++;
      taskListInnerHtml += `<div class="task-name" id="${taskId}">
                  <span>${inputText.value}</span>
                  <div class="options">
                    <span title="task complete" class="js-task-complete" data-id="${taskId}">
                      ${tickSvg}
                    </span>
                    <span title="task-cancel" class="js-task-cancel" data-id="${taskId}">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path
                          d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>`;
      taskList.innerHTML = taskListInnerHtml;
      inputText.value = "";
    } else {
      alert("Task cannot be empty");
    }
  } else {
    return;
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.closest(".js-task-cancel")) {
    status='Done'
    tickSvg=` <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="rgb(0, 172, 0)"
                    >
                      <path
                        d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      />
                    </svg>`
    const clickedButton = event.target.closest(".js-task-cancel");
    const taskId = clickedButton.dataset.id;

    if (numberOfTasks == "1") {
      document.getElementById(`${taskId}`).remove();
      numberOfTasks = 0;
      taskList.innerHTML = `<div class="task-name">
                  <span>Your task will show here</span>
                  <div class="options">
                    <span title="task complete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path
                          d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"
                        />
                      </svg>
                    </span>
                    <span title="task-cancel js-task-cancel">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path
                          d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>`;
      taskList.classList.add('opacity=0')
      taskList.classList.add('green-mark-on')
    } else {
      document.getElementById(`${taskId}`).remove();
      numberOfTasks--;
    }
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.closest(".js-task-complete")) {
    const clickedButton = event.target.closest(".js-task-complete");
    const taskId = clickedButton.dataset.id;
    console.log(numberOfTasks);

    if (numberOfTasks == "1") {
      console.log("1");
      numberOfTasks = 0;
      doneTaskListName += `${document.getElementById(`${taskId}`).outerHTML}`;
      document.getElementById(`${taskId}`).remove();
      taskList.innerHTML = `<div class="task-name">
                  <span>Your task will show here</span>
                  <div class="options">
                    <span title="task complete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path
                          d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"
                        />
                      </svg>
                    </span>
                    <span title="task-cancel js-task-cancel">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path
                          d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>`;
      doneTaskList.innerHTML = "";
      taskListInnerHtml=''
      doneTaskList.innerHTML = doneTaskListName;
    } else {
      console.log("2");
      doneTaskListName += `${document.getElementById(`${taskId}`).outerHTML}`;
      document.getElementById(`${taskId}`).remove();
      numberOfTasks--;
      doneTaskList.innerHTML = "";
      doneTaskList.innerHTML = doneTaskListName;
    }
  }
});
