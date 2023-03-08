// let tasks = JSON.parse(localStorage.getItem("todo-list"))

// Add task to list
export let input = document.getElementById('input');
export let add = document.getElementById('add-task');
export let ul = document.getElementById('task-list');

export let date = document.getElementById('date')
export let time = document.getElementById('time')


function Add() {
  let newTask = input.value;

  if (newTask === '') {
    alert('Empty');
    return
  }
  let li = document.createElement("li");
  li.className = "tasks";

  let label = document.createElement("label");
  let task = document.createElement("input");
  task.type = "checkbox";
  task.setAttribute("onclick","updateStatus(this)")
  let div = document.createElement('div');
  div.className = "task";
  div.innerText = newTask;

  let img = document.createElement('img');
  img.src = "garbage-bin-10420.svg";
  img.className = "del";
  img.setAttribute('onclick','deleteTask(this)');

  let dayTask = document.createElement('p');
  dayTask.innerHTML = date.value;

  let timeTask = document.createElement('p');
  timeTask.innerHTML = time.value;
  label.appendChild(task);
  li.appendChild(label);
  li.appendChild(div);
  li.appendChild(timeTask);
  li.appendChild(dayTask);
  li.appendChild(img);
  ul.appendChild(li);
  input.value = '';
  date.value = '';
  time.value = '';

  let currentDate = new Date();


  // let cur = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate());
  let uls = document.getElementsByTagName('li');
  for (let i=0;i < uls.length;i++) {
    let item = uls[i].lastChild.previousSibling;
    let s = item.previousSibling.textContent;
    s = item.textContent +'T' +  s;
    let sec = Date.parse(s);
    console.log(sec);
    if (sec - currentDate <= 0) {
      console.log(uls[i]);
      uls[i].classList.add("deadline");
    }

  }
}

// Check
function updateStatus(select){
  let check = select.parentElement.firstChild;
  let taskName = select.parentElement.parentElement.firstChild.nextSibling;
  console.log(taskName);
  if (check.checked) {
    taskName.classList.add("checked");
  } else {
    taskName.classList.remove("checked");
  }
}

// Delete
function deleteTask(select) {
  let deleted = select.parentElement;
  deleted.remove();
}
