import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const counterText = document.querySelector(".counter__text");

const handleEscapeClose = (evt) => {
  if (evt.key === "Escape") {
    closeModal(addTodoPopup);
  }
};

const openModal = (modal) => {
  modal.classList.add("popup_visible");
  document.addEventListener("keydown", handleEscapeClose);
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
  document.removeEventListener("keydown", handleEscapeClose);
};

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

const updateCounter = () => {
  const total = todosList.querySelectorAll(".todo").length;
  const completed = todosList.querySelectorAll(".todo__completed:checked").length;
  counterText.textContent = `Showing ${completed} out of ${total} completed`;
};

const renderTodo = (data) => {
  const todo = generateTodo(data);
  todosList.append(todo);
  updateCounter();
};

todosList.addEventListener("change", (evt) => {
  if (evt.target.matches(".todo__completed")) {
    updateCounter();
  }
});

todosList.addEventListener("click", (evt) => {
  if (evt.target.closest(".todo__delete-btn")) {
    updateCounter();
  }
});

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const newTodo = { id: uuidv4(), name, date };
  renderTodo(newTodo);
  formValidator.resetValidation();
  closeModal(addTodoPopup);
});

initialTodos.forEach(renderTodo);
