const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = "";
  if (!todo) {
    return;
  }

  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");
  todoElement.innerHTML = `
    <p class="todo-text">${todo}</p>
    <div class="todo-buttons">
      <button class="todo-button edit-button">Edit</button>
      <button class="todo-button delete-button">Delete</button>
    </div>
  `;
  list.appendChild(todoElement);

  const deleteButton = todoElement.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    todoElement.remove();
  });

  const editButton = todoElement.querySelector(".edit-button");
  editButton.addEventListener("click", () => {
    const todoText = todoElement.querySelector(".todo-text");
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = todoText.textContent;
    todoElement.insertBefore(editInput, todoText);
    todoText.remove();
    editInput.focus();
    editInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const editedTodo = editInput.value;
        const editedTodoText = document.createElement("p");
        editedTodoText.classList.add("todo-text");
        editedTodoText.textContent = editedTodo;
        todoElement.insertBefore(editedTodoText, editInput);
        editInput.remove();
      }
    });
  });
});


