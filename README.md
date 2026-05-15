# Simple Todo App

A client-side to-do list app refactored with object-oriented JavaScript. Users can view todos, add new items with optional due dates, mark items complete, delete items, and validate the add-todo form.

## Functionality

- Display initial to-do items from configuration data
- Open and close the add-todo modal
- Create new to-dos with unique IDs (via `uuid`)
- Optional due dates with formatted display
- Mark to-dos complete or delete them
- Real-time form validation with disabled submit until inputs are valid
- Reset form fields and validation state after successful submission only

## Technology

- HTML, CSS (BEM-style blocks)
- JavaScript ES modules
- OOP: `Todo` and `FormValidator` classes
- `uuid` imported from CDN (`jspm.dev`)

## Project structure

```
components/     Todo.js, FormValidator.js
pages/          index.js, index.css
utils/          constants.js
```

## Deployment

This project is deployed on GitHub Pages:

- https://mfprojects355.github.io/se_project_todo-app/

Repository: https://github.com/mfprojects355/se_project_todo-app
