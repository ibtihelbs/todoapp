// selecting elements :
const form = document.querySelector("form");
const taskWrap = document.querySelector("#tasks-wrap");
const add = document.querySelector("#add");
const completed = document.querySelector(".completed");
const active = document.querySelector(".active");
function createNewTask(e) {
  e.preventDefault();

  //create div with a class single-task flex between
  const singleTask = document.createElement("div");
  singleTask.setAttribute("class", "single-task flex between");

  /* create  <div class="flex">
  <input type="checkbox" class="state" />
  <p>new task</p>
</div> using js */
  //1 - create the flex div
  const flex = document.createElement("div");
  flex.setAttribute("class", "flex");
  //create input checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "state");
  // create p
  const p = document.createElement("p");
  //add the content of the input in p
  p.innerHTML = add.value;

  // ADDING P and checkbox to flex div
  flex.appendChild(checkbox);
  flex.appendChild(p);

  //add flex to singleTask
  singleTask.appendChild(flex);
  //create delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete");
  const cross = document.createElement("img");
  cross.setAttribute("src", "./images/icon-cross.svg");
  cross.setAttribute("alt", "icon-cross");
  deleteBtn.appendChild(cross);
  singleTask.appendChild(deleteBtn);
  taskWrap.appendChild(singleTask);
  add.value = "";
  /////add delete and complete functionalities
  const deleteGrp = document.querySelectorAll(".delete");
  const singleTasks = document.querySelectorAll(".single-task");
  const checkboxs = document.querySelectorAll(".state");
  const tasks = document.querySelectorAll("p");
  for (let i = 0; i < deleteGrp.length; i++) {
    deleteGrp[i].addEventListener("click", function () {
      singleTasks[i].style.display = "none";
    });
    checkboxs[i].addEventListener("change", function () {
      console.log(tasks[i]);
      tasks[i].style.textDecoration = "line-through";
    });
  }
  completed.addEventListener("click", function () {
    for (let j = 0; j < singleTasks.length; j++) {
      if (checkboxs[j].checked == false) {
        singleTasks[j].style.display = "none";
      }
    }
  });
  active.addEventListener("click", function () {
    for (let j = 0; j < singleTasks.length; j++) {
      if (checkboxs[j].checked == true) {
        singleTasks[j].style.display = "none";
      }
    }
  });
}
form.addEventListener("submit", createNewTask);
