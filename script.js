const form = document.querySelector(".form");
const inputBox = document.querySelector(".inputBox");
const addBtn = document.querySelector(".addBtn");
const todoListSection = document.querySelector(".todoList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

addBtn.addEventListener("click", () => {
  value = inputBox.value;
  if (value) {
    const todoDiv = document.createElement("div");
    const todoElement = document.createElement("input");
    const editTodoBtn = document.createElement("button");
    const deleteTodoBtn = document.createElement("button");
    todoElement.value = value;
    todoElement.setAttribute("readonly", "readonly");
    inputBox.value = "";
    todoDiv.appendChild(todoElement);
    todoDiv.appendChild(editTodoBtn);
    todoDiv.appendChild(deleteTodoBtn);
    todoDiv.setAttribute("class", "todoDiv");
    todoListSection.appendChild(todoDiv);
    editTodoBtn.innerText = "edit";
    deleteTodoBtn.innerText = "delete";
    editTodoBtn.addEventListener("click", () => {
      if (editTodoBtn.innerText === "edit") {
        todoElement.removeAttribute("readonly");
        todoElement.focus();
        editTodoBtn.innerText = "save";
      } else {
        if (todoElement.value.length === 0) {
          alert("Enter a edited value please");
        } else {
          todoElement.setAttribute("readonly", "readonly");
          editTodoBtn.innerText = "edit";
        }
      }
    });
    deleteTodoBtn.addEventListener("click", () => {
      todoListSection.removeChild(todoDiv);
    });
  } else {
    alert("Enter something");
  }
});
