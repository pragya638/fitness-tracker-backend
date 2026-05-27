# Fitness Tracker Backend API

A production-ready Fitness Tracker Backend built using Spring Boot, Spring Security, JWT Authentication, PostgreSQL, Swagger/OpenAPI, Docker, and Render Cloud Deployment.

The application provides secure authentication, role-based authorization, activity tracking, recommendation APIs, and cloud-hosted REST services.

---

# Live Deployment

## Backend URL

https://fitness-track-backend-vcwk.onrender.com

## Swagger API Documentation

https://fitness-track-backend-vcwk.onrender.com/swagger-ui/index.html

---

# Features

## Authentication & Security

- JWT Authentication
- Spring Security Integration
- Password Encryption using BCrypt
- Role-Based Authorization (USER / ADMIN)
- Stateless Session Management
- Secure REST APIs

## Activity Management

- Create fitness activities
- Update activities
- Delete activities
- Fetch user activities
- Track workouts & progress

## Recommendation System

- Generate workout recommendations
- Fetch recommendations by user

## Admin Features

- View all registered users
- Protected admin APIs
- Role-based access control

## API Documentation

- Swagger UI Integration
- Interactive API Testing
- OpenAPI Documentation

## DevOps & Deployment

- Docker Support
- Docker Compose Support
- GitHub Version Control
- Cloud Deployment using Render
- PostgreSQL Cloud Database using Neon

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Java 17 | Backend Language |
| Spring Boot | Backend Framework |
| Spring Security | Authentication & Authorization |
| JWT | Token-Based Authentication |
| Hibernate/JPA | ORM |
| PostgreSQL | Cloud Database |
| Maven | Build Tool |
| Swagger/OpenAPI | API Documentation |
| Docker | Containerization |
| Render | Cloud Deployment |
| Neon | PostgreSQL Hosting |
| Git & GitHub | Version Control |
| React (Planned) | Frontend |

---

# Project Architecture

```text
React Frontend (Planned)
          ↓
Spring Boot REST API
          ↓
PostgreSQL Database (Neon Cloud)
```

---

# Project Structure

```bash
src/main/java/com/project/fitness
│
├── controller
├── service
├── repository
├── model
├── dto
├── security
├── exception
├── config
```

---

# API Endpoints

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Activity APIs

### Create Activity

```http
POST /api/activities
```

### Get User Activities

```http
GET /api/activities
```

### Update Activity

```http
PUT /api/activities/{id}
```

### Delete Activity

```http
DELETE /api/activities/{id}
```

---

## Recommendation APIs

### Generate Recommendation

```http
POST /api/recommendation/generate
```

### Get User Recommendations

```http
GET /api/recommendation/user/{userId}
```

---

## Admin APIs

### Get All Users

```http
GET /api/admin/users
```

---

# Swagger Documentation

## Local Swagger URL

```bash
http://localhost:8080/swagger-ui/index.html
```

## Production Swagger URL

```bash
https://fitness-track-backend-vcwk.onrender.com/swagger-ui/index.html
```

---

# Run Project Locally

## Clone Repository

```bash
git clone https://github.com/pragya638/fitness-tracker-backend.git
```

## Move Into Project

```bash
cd fitness-tracker-backend
```

## Configure Database

Update your `application.properties` file:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/fitness_db
spring.datasource.username=postgres
spring.datasource.password=yourpassword
```

## Run Application

```bash
./mvnw spring-boot:run
```

---

# Docker Setup

## Build Docker Image

```bash
docker build -t fitness-app .
```

## Run Docker Container

```bash
docker run -p 8080:8080 fitness-app
```

---

# Docker Compose

Run complete backend + PostgreSQL setup:

```bash
docker-compose up --build
```

---

# Environment Variables

Create a `.env` file:

```env
DB_URL=your_database_url
DB_USERNAME=your_username
DB_PASSWORD=your_password

JWT_SECRET=your_jwt_secret
```

## Important

- Never push `.env` file to GitHub
- Keep secrets private
- Use environment variables in production

---

# JWT Authentication Flow

1. Register/Login User
2. Receive JWT Token
3. Add Token in Authorization Header

```http
Authorization: Bearer your_jwt_token
```

4. Access Protected APIs

---

# Deployment

## Backend Hosting

- Render Cloud Platform

## Database Hosting

- Neon PostgreSQL

## API Documentation

- Swagger/OpenAPI

---

# Future Improvements

- React Frontend Dashboard
- AI Workout Recommendations
- Progress Analytics Dashboard
- Email Verification
- JWT Refresh Tokens
- CI/CD Pipeline
- Unit Testing
- Mobile App Integration
- Role-Based Dashboard UI
- Cloud Monitoring

---

# Screenshots

## Swagger UI

(Add Swagger screenshots here)

## API Testing

(Add Postman screenshots here)

## Frontend Dashboard

(Add React frontend screenshots here)

---

# Author

## Pragya Dwivedi

Full Stack Developer focused on scalable backend systems using:

- Spring Boot
- React
- PostgreSQL
- REST APIs
- JWT Authentication
- Cloud Deployment
- Docker
- Real-world Projects

---

# GitHub Repository

https://github.com/pragya638/fitness-tracker-backend

---

# License

This project is developed for learning, portfolio, and educational purposes.
