# 🚀 Fullstack App with Docker Compose

![GitHub License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-0C344B?style=for-the-badge\&logo=prisma\&logoColor=white)

A **Fullstack application** with **Postgres**, **Backend (Bun + Prisma)**, and **Frontend (React + Vite)** using **Docker Compose**.

Run services **individually** or **all together** with Docker Compose.

---

## 📂 Project Structure

```text
.
├── backend/      # Bun + Prisma backend service
├── frontend/     # React + Vite frontend service
└── docker-compose.yml
```

---

## ⚙️ Prerequisites

| Tool           | Version / Link                                    |
| -------------- | ------------------------------------------------- |
| Docker         | [Get Started](https://www.docker.com/get-started) |
| Docker Compose | [Docs](https://docs.docker.com/compose/)          |

---

## 🐳 Run Services Individually

### 1️⃣ Start Postgres

```bash
docker run --name postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin123 -e POSTGRES_DB=mydb -p 5432:5432 -d postgres:latest
```

---

### 2️⃣ Start Backend

```bash
cd backend
docker build -t backend .
docker run --name backend -e DATABASE_URL=postgresql://admin:admin123@localhost:5432/mydb -p 3000:3000 backend
```

**Run Prisma migrations:**

```bash
docker exec -it backend bun prisma migrate deploy
```

---

### 3️⃣ Start Frontend

```bash
cd frontend
docker build -t frontend .
docker run --name frontend -p 5173:5173 frontend
```

---

## 📦 Run All Services with Docker Compose

```bash
docker-compose up --build
```

**Services & URLs:**

| Service  | URL              |
| -------- | ---------------- |
| Postgres | `localhost:5432` |
| Backend  | `localhost:3000` |
| Frontend | `localhost:5173` |

Stop everything:

```bash
docker-compose down
```

---

## 🗂️ Volumes & Data Persistence

* Postgres data stored in **named volume** `pgdata`.
* Data persists across container restarts.

Reset everything:

```bash
docker-compose down -v
```

---

## 🌐 Networking

* All services share the `demo` bridge network (auto-created).
* Backend connects to Postgres at `postgres:5432`.
* Frontend connects to backend at `http://localhost:3000`.

---

## 🎨 Color Reference

| Color      | Example                                                               |
| ---------- | --------------------------------------------------------------------- |
| Dark Blue  | ![#0a192f](https://via.placeholder.com/50x20/0a192f?text=+) `#0a192f` |
| Light Gray | ![#f8f8f8](https://via.placeholder.com/50x20/f8f8f8?text=+) `#f8f8f8` |
| Green      | ![#00b48a](https://via.placeholder.com/50x20/00b48a?text=+) `#00b48a` |
| Teal       | ![#00d1a0](https://via.placeholder.com/50x20/00d1a0?text=+) `#00d1a0` |

---

## ✅ Notes

* Run **services individually first** to verify everything works.
* Use **docker-compose** for an easier workflow.
* Run Prisma migrations (`bun prisma migrate deploy`) after starting backend.

---

## 📜 License

This project is **Free to Use** under the **MIT License**.

![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
