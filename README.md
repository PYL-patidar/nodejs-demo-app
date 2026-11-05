# Node.js Demo Application – CI/CD Automation

A sample Node.js application demonstrating an automated CI/CD pipeline using GitHub Actions, Docker, and Docker Hub.

The project automates code validation, Docker image creation, image publishing, and container deployment using a reusable GitHub Actions workflow.

## 🚀 Project Overview

The objective of this project is to understand and implement an automated CI/CD workflow for a Node.js application.

Whenever code is pushed to the `main` branch, the CI/CD pipeline performs the configured validation and deployment stages.

## 🛠️ Technologies Used

- **Node.js** – Application runtime
- **npm** – Dependency management and scripts
- **Git & GitHub** – Source code management
- **GitHub Actions** – CI/CD automation
- **Prettier** – Code formatting validation
- **Node.js Test Runner** – Basic application testing
- **Docker** – Application containerization
- **Docker Compose** – Container management
- **Docker Hub** – Docker image registry

## 📁 Project Structure

```text
nodejs-demo-app/
│
├── .github/
│   └── workflows/
│       ├── main.yml
│       └── deploy.yml
│
├── test/
│   └── app.test.js
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── .prettierignore
```

## ⚙️ Application Details

The application is developed using Node.js and its built-in HTTP module.

It runs on port `3000` and displays a simple welcome page in the browser.

**Application URL (local):**

```text
http://localhost:3000
```

## 🔄 CI/CD Pipeline Workflow

The pipeline automates the following stages:

### 1. Source Code Checkout

GitHub Actions checks out the application source code from the GitHub repository.

### 2. Dependency Installation

Installs project dependencies using:

```bash
npm ci
```

### 3. Code Formatting Check

Prettier validates the formatting of project files.

```bash
npm run format:check
```

### 4. Lint Check

Performs JavaScript syntax validation.

```bash
npm run lint
```

### 5. Automated Testing

Runs the configured Node.js test scripts.

```bash
npm test
```

### 6. Docker Image Build

Builds a Docker image using the project's Dockerfile.

### 7. Docker Hub Image Publishing

Publishes the Docker image to Docker Hub using GitHub Actions secrets for authentication and image tagging.

### 8. Container Deployment

Docker Compose pulls the configured image and starts the application container.

```bash
docker compose pull
docker compose up -d --force-recreate
```

## 🐳 Docker Configuration

The application is containerized using Docker.

**Build the image locally:**

```bash
docker build -t nodejs-app:latest .
```

**Run the container:**

```bash
docker run -d -p 3000:3000 --name nodejs-app nodejs-app:latest
```

**Check running containers:**

```bash
docker ps
```

**View container logs:**

```bash
docker logs nodejs-app
```

**Stop the container:**

```bash
docker stop nodejs-app
```

## 🔐 GitHub Secrets Configuration

The following repository secrets are used for Docker Hub authentication and image configuration:

| Secret | Purpose |
|---|---|
| `DOCKERHUB_USER` | Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token |

Secrets are configured under:

`GitHub Repository → Settings → Secrets and variables → Actions`

Never store Docker Hub credentials directly in workflow files.

## 📦 Docker Compose Configuration

Docker Compose manages the application container.

```yaml
services:
  nodejs-app:
    image: ${DOCKERHUB_USER}/nodejs-app:${IMAGE_TAG:-latest}
    container_name: nodejs-app
    ports:
      - "3000:3000"
```

The host port `3000` is mapped to the container port `3000`.

## ▶️ Run the Application Locally

Clone the repository:

```bash
git clone https://github.com/PYL-patidar/nodejs-demo-app.git
```

Navigate into the project:

```bash
cd nodejs-demo-app
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Open your browser:

```text
http://localhost:3000
```

## 🎯 Learning Outcomes

Through this project, I gained practical experience with:

- Creating a Node.js application.
- Managing dependencies and npm scripts.
- Automating code formatting, linting, and testing.
- Writing GitHub Actions workflow files.
- Building and publishing Docker images.
- Managing containers using Docker Compose.
- Using GitHub Secrets for secure credential management.
- Understanding reusable GitHub Actions workflows.

## 👩‍💻 Author

**Payal Patidar**

- GitHub: [PYL-patidar](https://github.com/PYL-patidar)
- LinkedIn: [Payal Patidar](https://www.linkedin.com/in/payal-patidar11/)

---

**Note:** The current deployment workflow runs Docker Compose on a GitHub-hosted runner. This is a temporary runner environment, not a persistent production deployment. Deployment to an AWS EC2 server can be implemented as a separate stage.
