class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _createViewElement() {
    const todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    this._nameEl = todoElement.querySelector(".todo__name");
    this._checkboxEl = todoElement.querySelector(".todo__completed");
    this._labelEl = todoElement.querySelector(".todo__label");
    this._dateEl = todoElement.querySelector(".todo__date");
    this._deleteBtn = todoElement.querySelector(".todo__delete-btn");

    return todoElement;
  }

  _setName() {
    this._nameEl.textContent = this._data.name;
  }

  _setCheckbox() {
    this._checkboxEl.checked = this._data.completed;
    this._checkboxEl.id = `todo-${this._data.id}`;
    this._labelEl.setAttribute("for", `todo-${this._data.id}`);
  }

  _setDueDate() {
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      this._dateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleCheckboxChange() {
    this._data.completed = this._checkboxEl.checked;
  }

  _setEventListeners() {
    this._deleteBtn.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    this._checkboxEl.addEventListener("change", () => {
      this._handleCheckboxChange();
    });
  }

  getView() {
    this._element = this._createViewElement();
    this._setName();
    this._setCheckbox();
    this._setDueDate();
    this._setEventListeners();
    return this._element;
  }
}

export default Todo;
