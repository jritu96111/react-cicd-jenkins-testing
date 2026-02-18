# System-Level Installation Steps

This document outlines the steps to install system-level dependencies required for running a Jenkins pipeline with Docker and Docker Compose.

## Prerequisites
- Ensure you have administrative access to the system.
- Docker must be installed on the host machine.

---

## Steps to Install Docker

1. **Update Package Lists**:
   ```bash
   sudo apt-get update
   ```

2. **Install Required Packages**:
   ```bash
   sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
   ```

3. **Add Docker’s Official GPG Key**:
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

4. **Set Up the Stable Repository**:
   ```bash
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

5. **Install Docker**:
   ```bash
   sudo apt-get update
   sudo apt-get install -y docker-ce
   ```

6. **Verify Docker Installation**:
   ```bash
   docker --version
   ```

---

## Steps to Install Docker Compose

1. **Update Package Lists**:
   ```bash
   sudo apt-get update
   ```

2. **Install Docker Compose**:
   ```bash
   sudo apt-get install -y docker-compose
   ```

3. **Verify Docker Compose Installation**:
   ```bash
   docker-compose --version
   ```

---

## Steps to Install Docker and Docker Compose in a Jenkins Container

1. **Access the Jenkins Container**:
   ```bash
   docker exec -it jenkins bash
   ```

2. **Update Package Lists**:
   ```bash
   apt-get update
   ```

3. **Install Docker**:
   ```bash
   apt-get install -y docker.io
   ```

4. **Install Docker Compose**:
   ```bash
   apt-get install -y docker-compose
   ```

5. **Verify Installations**:
   - Docker:
     ```bash
     docker --version
     ```
   - Docker Compose:
     ```bash
     docker-compose --version
     ```

6. **Restart the Jenkins Container (if necessary)**:
   ```bash
   docker restart jenkins
   ```

---

## Notes
- Ensure the Jenkins user has access to the Docker daemon by adding it to the `docker` group:
  ```bash
  usermod -aG docker jenkins
  ```
- Restart the Jenkins container after making changes to apply them.

---

## Troubleshooting
- If you encounter issues, check the logs for more details:
  ```bash
  docker logs jenkins
  ```
- Ensure the system has internet access to download the required packages.