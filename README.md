# The Simple ToDo App

A client-side to-do list application built with vanilla JavaScript and ES6 classes. Each to-do item is rendered by a `Todo` class instance, the add-to-do form is validated by `FormValidator`, items are managed with `Section`, the modal uses `Popup` and `PopupWithForm`, and progress is tracked with `TodoCounter`.

## Functionality

- Renders an initial list of to-do items from a JavaScript array
- Opens and closes the add-to-do modal via the Add button, close button, overlay click, or Escape key
- Creates new to-dos with optional due dates; submit works via the Create button or Enter in a form field
- Marks to-dos as completed or uncompleted via checkbox
- Deletes to-dos with the Delete button
- Displays a live counter of completed vs. total to-do items
- Generates unique IDs for new items with the `uuid` package (CDN)
- Uses unique `id` / `for` attributes on checkboxes and labels
- Validates the form in real time; disables Create until inputs are valid
- Resets the form only after a successful submission (closing without submit keeps entered data)

## Technology

- HTML5, CSS3 (BEM-style file structure)
- JavaScript (ES6 modules, classes, private methods with `_` prefix)
- `Todo`, `FormValidator`, `Section`, `Popup`, `PopupWithForm`, and `TodoCounter` classes in separate files
- Constants and configuration in `utils/constants.js`
- `uuid` v4 from CDN (`https://jspm.dev/uuid`)
- GitHub Pages for deployment

## Deployment

This project is deployed on GitHub Pages:

- https://mfprojects355.github.io/se_project_todo-app/

Repository: https://github.com/mfprojects355/se_project_todo-app
