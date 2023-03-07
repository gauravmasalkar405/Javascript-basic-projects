const todoInput = document.querySelector("#to-do");
const todoBtn = document.querySelector("#add-btn");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo() {
  event.preventDefault();

  if (todoInput.value !== "") {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";

    const newToDo = document.createElement("li");
    newToDo.className = "todo-item";
    newToDo.innerText = todoInput.value;

    todoDiv.appendChild(newToDo);
    todoInput.value = "";

    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = `<i class="uil uil-check"></i>`;
    completedBtn.className = "complete-btn";
    todoDiv.appendChild(completedBtn);

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = `<i class="uil uil-trash"></i>`;
    trashBtn.className = "trash-btn";
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);
  }
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fade-away");

    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    const todoItem = todo.querySelector(".todo-item");
    todoItem.classList.toggle("completed");
  }
}

todoInput.focus();

document.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addTodo();
  }
});
