class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;
    this._incrementAmount = 1;
    this._decrementAmount = -1;
    this._updateText();
  }

  updateCompleted = (increment) => {
    this._completed += increment
      ? this._incrementAmount
      : this._decrementAmount;
    this._updateText();
  };

  updateTotal = (increment) => {
    this._total += increment ? this._incrementAmount : this._decrementAmount;
    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
