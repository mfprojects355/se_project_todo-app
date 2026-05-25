import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import {
  initialTodos,
  validationConfig,
  sectionConfig,
  todoTemplateSelector,
  counterSelector,
  addTodoPopupSelector,
  addTodoButtonSelector,
} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForms.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(addTodoButtonSelector);
const addTodoForm = document.querySelector(validationConfig.formSelector);
const todosList = document.querySelector(sectionConfig.containerSelector);

const generateTodo = (data) => {
  const todo = new Todo(data, todoTemplateSelector);
  return todo.getView();
};

const todoCounter = new TodoCounter(initialTodos, counterSelector);

const todoSection = new Section({
  ...sectionConfig,
  renderer: (item) => {
    todoSection.addItem(generateTodo(item));
  },
});

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

const handleAddTodoSubmit = ({ name, date: dateInput }) => {
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const newTodo = { id: uuidv4(), name, date, completed: false };
  todoSection.addItem(generateTodo(newTodo));
  todoCounter.updateTotal(true);
  formValidator.resetValidation();
};

const addTodoPopup = new PopupWithForm(addTodoPopupSelector, handleAddTodoSubmit);

addTodoPopup.setEventListeners();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

todosList.addEventListener("change", (evt) => {
  if (evt.target.matches(".todo__completed")) {
    todoCounter.updateCompleted(evt.target.checked);
  }
});

todosList.addEventListener(
  "click",
  (evt) => {
    if (evt.target.closest(".todo__delete-btn")) {
      const todoEl = evt.target.closest(".todo");
      const wasCompleted = todoEl.querySelector(".todo__completed").checked;

      if (wasCompleted) {
        todoCounter.updateCompleted(false);
      }
      todoCounter.updateTotal(false);
    }
  },
  true,
);

todoSection.renderItems();
