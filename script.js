let todos = [];

function addTodo() {
  let currentInput = document.querySelector("input").value;
  if (currentInput === "") {
    alert("Please enter a task.");
    return;
  }
  todos.push(currentInput);
  document.querySelector("input").value = "";
  render();
}

function deleteToDO(index) {
  todos.splice(index, 1);
  render();
}

function render() {
  document.querySelector(".todo-list").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const entry = rowItem(todos[i], i);
    document.querySelector(".todo-list").appendChild(entry);
  }
}

function rowItem(text, num) {
  const todoItem = document.createElement("li");
  todoItem.className = "todo-item";
  const radioEl = document.createElement("input");
  radioEl.type = "checkbox";
  radioEl.addEventListener("click", function () {
    if (radioEl.checked) {
      radioEl.checked = true;
      spanEl.classList.add("completed");
    } else {
      radioEl.checked = false;
      spanEl.classList.remove("completed");
    }
  });

  const spanEl = document.createElement("span");
  spanEl.textContent = text;

  const deleteEl = document.createElement("button");
  deleteEl.textContent = "X";
  deleteEl.addEventListener("click", function (num) {
    deleteToDO(num);
  });

  todoItem.appendChild(radioEl);
  todoItem.appendChild(spanEl);
  todoItem.appendChild(deleteEl);

  return todoItem;
}
