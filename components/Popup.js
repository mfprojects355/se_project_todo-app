class Popup {
  constructor(popupSelector) {
    this._modal = document.querySelector(popupSelector);
    this._closeButton = this._modal.querySelector(".popup__close");
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
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._modal.addEventListener("mousedown", (evt) => {
      if (evt.target === this._modal) {
        this.close();
      }
    });
  }
}

export default Popup;
