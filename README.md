# The Simple ToDo App

A client-side to-do list application built with vanilla JavaScript. The project was refactored using object-oriented programming: each to-do is rendered by a `Todo` class instance, and the add-to-do form is validated by a `FormValidator` class.

## Functionality

- Renders an initial list of to-do items from a JavaScript array
- Opens and closes the add-to-do modal via the Add button, close button, or Escape key
- Creates new to-dos with optional due dates; submit works via the Create button or Enter in a form field
- Marks to-dos as completed or uncompleted via checkbox
- Deletes to-dos with the Delete button
- Generates unique IDs for new items with the `uuid` package (CDN)
- Uses unique `id` / `for` attributes on checkboxes and labels
- Validates the form in real time; disables Create until inputs are valid
- Resets the form only after a successful submission (closing without submit keeps entered data)

## Technology

- HTML5, CSS3 (BEM-style file structure)
- JavaScript (ES6 modules, classes, private methods with `_` prefix)
- `Todo` and `FormValidator` classes in separate files
- Constants in `utils/constants.js`
- `uuid` v4 from CDN (`https://jspm.dev/uuid`)
- GitHub Pages for deployment

## Screenshots

Add screenshots of your deployed app here before submission, for example:

![The Simple ToDo App main view](./images/screenshot-main.png)

## Deployment

This project is deployed on GitHub Pages:

- https://mfprojects355.github.io/se_project_todo-app/

Repository: https://github.com/mfprojects355/se_project_todo-app
