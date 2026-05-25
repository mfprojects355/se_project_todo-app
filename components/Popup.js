class Popup {
  constructor(popupSelector) {
    this._modal = document.querySelector(popupSelector);
  }

  open() {
    this._modal.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close() {
    this._modal.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._modal.addEventListener("mousedown", (evt) => {
      if (
        evt.target === this._modal ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
