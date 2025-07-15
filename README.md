# ✅ React Task Manager App

A lightweight and responsive task manager built using **React**, with tasks stored in **localStorage**. This app lets you add, toggle (complete/incomplete), and delete tasks — and your data persists even after a refresh.

## 🖼️ Preview

![App Icon](./assets/todo_icon.png)

---

## 📦 Features

- 📝 Add new tasks with a single click
- ✅ Mark tasks as complete or incomplete
- 🗑️ Delete tasks
- 💾 Tasks persist in `localStorage`
- 📱 Responsive UI using Tailwind CSS

---

## 🚀 Getting Started

Follow these steps to run the app locally.

## Install dependencies

npm create vite@latest
npm install

##  Start the development server

npm run dev

## 📄 Explanation

Todo.js manages the task list state using useState.

Tasks are stored and updated in localStorage via useEffect.

useRef is used to read the input field without controlled input state.

Each task has:

a unique id (timestamp),

text (string),

isComplete (boolean).

## 🛠️ Built With

React

Tailwind CSS

JavaScript (ES6+)

LocalStorage API

## 🙋‍♀️ Author
K.Chittra Priya