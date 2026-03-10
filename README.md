# 🔐 Password Manager

A lightweight and secure-by-design Password Manager that helps you manage your credentials locally. This project demonstrates how to handle **Data Persistence** using the Browser's LocalStorage API.

---

## 🚀 Features
* **Create & Store:** Add new account credentials with a simple form.
* **Local Persistence:** Your data is saved in `window.localStorage`, so it stays there even if you close the tab.
* **Secure Privacy:** Zero server-side interaction; your data never leaves your browser.
* **Responsive UI:** A clean, modern interface built with Tailwind CSS.

## 🛠️ Tech Stack
* **Frontend:** React.js / Vite
* **Styling:** Tailwind CSS
* **Storage:** Browser LocalStorage API

## 📦 Installation & Setup

1. **Clone the repository:**
   git clone [https://github.com/your-username/password-manager.git](https://github.com/your-username/password-manager.git)

2. **Navigate to the project directory:**
   cd password-manager

3. **Install dependencies:**
   npm install

4. **Run the application:**
   npm run dev

## 📂 Project Structure
* `src/components`: UI components like the Password Form and List.
* `src/App.jsx`: Main logic for CRUD (Create, Read, Update, Delete) operations.
* `tailwind.config.js`: Custom styling configurations.

## ⚠️ Security Disclaimer
This application is for **educational purposes**. While Local Storage is convenient, it is not encrypted by default. Please do not store highly sensitive real-world passwords here without implementing additional encryption.

---
Built with ❤️ by iSHU