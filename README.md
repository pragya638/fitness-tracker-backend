# Fitness Tracker Backend API

Production-ready Fitness Tracker Backend built using Spring Boot, Spring Security, JWT Authentication, PostgreSQL, Swagger, Docker, and Render Deployment.

---

# Live Demo

## Swagger Documentation

https://fitness-track-backend-vcwk.onrender.com/swagger-ui/index.html

---

# Features

## Authentication & Security

- JWT Authentication
- Spring Security
- BCrypt Password Encryption
- Role-Based Authorization
- Stateless Authentication

## Activity Management

- Create Activities
- Update Activities
- Delete Activities
- Fetch User Activities

## Recommendation System

- Generate Recommendations
- Fetch User Recommendations

## API Documentation

- Swagger UI
- OpenAPI Integration

## Deployment

- Docker Support
- Render Cloud Deployment
- PostgreSQL Database

---

# Tech Stack

| Technology | Usage |
|---|---|
| Java 17 | Programming Language |
| Spring Boot | Backend Framework |
| Spring Security | Authentication |
| JWT | Authorization |
| PostgreSQL | Database |
| Hibernate/JPA | ORM |
| Maven | Build Tool |
| Swagger/OpenAPI | API Documentation |
| Docker | Containerization |
| Render | Cloud Deployment |

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
├── config
├── exception
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

### Get All Activities

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

### Get Recommendations By User

```http
GET /api/recommendation/user/{userId}
```

---

# Run Locally

## Clone Repository

```bash
git clone https://github.com/pragya638/fitness-tracker-backend.git
```

## Move Into Project

```bash
cd fitness-tracker-backend
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

# Database Configuration

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/fitness_db
spring.datasource.username=postgres
spring.datasource.password=yourpassword
```

---

# Future Improvements

- React Frontend Dashboard
- AI-Based Recommendation Engine
- Analytics Dashboard
- Email Verification
- Refresh Tokens
- CI/CD Pipeline
- Unit Testing
- Mobile App Integration

---

# Author

## Pragya Dwivedi

Aspiring Java Backend Developer focused on:

- Spring Boot
- REST APIs
- Backend Development
- Security
- Cloud Deployment

---

# GitHub Repository

https://github.com/pragya638/fitness-tracker-backend
