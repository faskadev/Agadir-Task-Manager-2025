# 📱 Agadir Task Manager 2025

Agadir Task Manager is a simple mobile application built to help users create, manage, and track their daily tasks. The project includes a **React Native (Expo)** frontend and a **Node.js + Express + Sequelize** backend connected to a **PostgreSQL** database.

---

## 🚀 Features

### **Frontend (React Native + Expo Router)**

* Login & Register screens
* Dashboard showing all tasks
* Add new task
* Edit and delete tasks
* Smooth navigation using Expo Router
* Clean UI and responsive design

### **Backend (Node.js + Express)**

* REST API for authentication and tasks
* JWT authentication
* Password hashing (bcrypt)
* Sequelize ORM for PostgreSQL
* Models: **User**, **Task**
* CRUD endpoints for tasks

---

## 🏗 Project Structure

```
Agadir-Task-Manager-2025/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── user.js
│   │   │   └── task.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   └── tasks.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── app/
    │   ├── index.jsx
    │   ├── login.jsx
    │   ├── dashboard.jsx
    │   └── addTask.jsx
    ├── package.json
    └── app.json
```

---

## ⚙️ Installation

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/faskadev/Agadir-Task-Manager-2025.git
cd Agadir-Task-Manager-2025
```

---

# 🛠 Backend Setup

### **2️⃣ Install dependencies**

```bash
cd backend
npm install
```

### **3️⃣ Configure environment variables**

Create a `.env` file:

```
PORT=3000
DB_NAME=taskmanager
DB_USER=postgres
DB_PASS=your_password
DB_HOST=localhost
JWT_SECRET=supersecretkey
```

### **4️⃣ Run the backend**

```bash
npm start
```

---

# 📱 Frontend Setup

### **1️⃣ Install dependencies**

```bash
cd frontend
npm install
```

### **2️⃣ Start Expo**

```bash
npx expo start
```

---

# 🔗 REST API Endpoints

## **Auth**

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Register new user |
| POST   | `/auth/login`    | Login and get JWT |

## **Tasks**

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/tasks`     | Get all tasks   |
| POST   | `/tasks`     | Create new task |
| PUT    | `/tasks/:id` | Update task     |
| DELETE | `/tasks/:id` | Delete task     |

---

# 🗄 UML & Technical Documentation

All documentation is stored in:

```
/docs
```

Includes:

* UML Diagrams
* Database Schema
* Technical Documentation
* API Reference

---

# 🤝 Contributing

Pull requests are welcome.

---

# 📄 License

This project is licensed under the MIT License.

---

# ✨ Author

**Faska Abdelmajide**
GitHub: [https://github.com/faskadev](https://github.com/faskadev)
