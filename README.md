# Enterprise Backend Reference Server

> A production-ready backend reference server built with **NestJS**, showcasing modern backend engineering practices, clean architecture, scalability, security, performance optimization, and cloud deployment.

---

## 🎯 Project Goal

This project serves as a backend engineering reference covering topics such as:

- Scalable Architecture
- Clean Code
- Authentication & Authorization
- Caching
- Background Processing
- Real-time Communication
- Event-driven communication
- Code, Commit Quality & Git Hooks
- Cloud Deployment
- Monitoring
- CI/CD
- Testing
- Documentation

---

## ✨ Features

### Core Backend

- REST API
- Modular Architecture
- API Versioning
- Environment Configuration
- Validation
- Global Exception Handling
- Request Lifecycle
- Response Interceptors
- Graceful Shutdown

---

### Authentication & Security

- JWT Authentication
- Refresh Token Rotation
- Role Based Access Control (RBAC)
- Permission Based Authorization
- Password Hashing
- Email Verification
- Forgot Password
- Rate Limiting
- Helmet
- CORS

---

### Database

- PostgreSQL
- Prisma ORM
- Database Migrations
- Database Seeding
- Optimized Queries

---

### Caching

- Redis
- Cache Aside Pattern
- Response Caching
- Cache Invalidation

---

### Queue & Background Jobs

- BullMQ
- Redis Queue
- RabbitMQ Messaging
- Email Queue
- Notification Queue
- Scheduled Jobs (Cron)

---

### File Storage

- Multer
- AWS S3 Upload
- File Validation

---

### Real-time Communication

- Socket.IO
- Room Management
- Authentication
- Real-time Notifications

---

### Logging & Monitoring

- Structured Logging
- Request Logging
- Error Logging
- Health Checks
- Metrics
- AWS CloudWatch

---

### API Documentation

- Swagger (OpenAPI)

---

### Testing

- Unit Testing
- Integration Testing
- End-to-End Testing

---

### DevOps

- Docker
- Docker Compose
- Nginx
- GitHub Actions
- AWS Deployment

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Language | TypeScript |
| Framework | NestJS |
| Database | PostgreSQL |
| ORM | Prisma |
| Cache | Redis |
| Background Jobs | BullMQ |
| Messaging | RabbitMQ |
| Real-time | Socket.IO |
| Storage | AWS S3 |
| Validation | class-validator |
| Authentication | JWT + Passport |
| API Documentation | Swagger |
| Logging | Pino |
| Testing | Jest |
| Git Hooks | Husky, lint-staged |
| Code & Commit Quality | ESLint, Prettier, Commitlint |
| Containerization | Docker |
| Reverse Proxy | Nginx |
| CI/CD | GitHub Actions |
| Deployment | AWS EC2 |

---

## Developer Guide

### Clone

```bash
git clone https://github.com/fahadhossain24/Enterprise-Backend-Server.git
```

### Install

```bash
npm install
```

### Environment

```bash
cp .env.example .env
```

### Run with Docker

```bash
docker compose up --build
```

### Commit Message Rules
We strictly enforce **Conventional Commits**. Your commit messages must be prefixed with a valid semantic type.
* **Format**: `type(optional-scope): lowercase description`
* **Allowed Types**: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `ci`, `build`
* **Example**: `chore: husky and lint-staged configuration`

### Automated Validation Lifecycle
* **Pre-Commit**: Runs `eslint --fix` and `prettier --write` automatically *only* on your modified `.ts` files. If there are syntax or lint errors that cannot be auto-fixed, your commit will be rejected.
* **Pre-Push**: Runs the entire Jest unit test suite (`npm run test`). If any tests fail, your push to the remote repository will be blocked.

---

## 📚 API Documentation

Swagger UI

```
http://localhost:3000/api/docs
```

---

## 📄 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feat/amazing-feature)
3. Commit your changes (git commit -m 'feat: Add some amazing feature')
4. Push to the branch (git push origin feat/amazing-feature)
5. Open a Pull Request

## 📢 Communicate with Author

Email: fahadhossain0503@gmail.com