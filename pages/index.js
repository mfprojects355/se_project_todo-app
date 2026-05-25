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
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(addTodoButtonSelector);
const addTodoForm = document.forms["add-todo-form"];

const todoCounter = new TodoCounter(initialTodos, counterSelector);

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(false);
}

const generateTodo = (data) => {
  const todo = new Todo(data, todoTemplateSelector, handleCheck, handleDelete);
  return todo.getView();
};

const renderTodo = (data) => {
  todoSection.addItem(generateTodo(data));
};

const todoSection = new Section({
  ...sectionConfig,
  renderer: renderTodo,
});

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

const handleAddTodoSubmit = ({ name, date: dateInput }) => {
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const newTodo = { id: uuidv4(), name, date, completed: false };
  renderTodo(newTodo);
  todoCounter.updateTotal(true);
  formValidator.resetValidation();
};

const addTodoPopup = new PopupWithForm(
  addTodoPopupSelector,
  handleAddTodoSubmit,
);

addTodoPopup.setEventListeners();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

todoSection.renderItems();
