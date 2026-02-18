# Steps to Resolve Jenkins Pipeline Docker Issue

## Problem
The Jenkins pipeline failed with the error:
```
/var/jenkins_home/workspace/new-react-jenkins@2@tmp/durable-d44b8235/script.sh.copy: 1: docker: not found
```
This indicates that the `docker` command is not available in the Jenkins container.

## Steps Taken

### 1. Verify Docker Installation in Jenkins Container
- Command:
  ```bash
  docker exec jenkins which docker
  ```
- Result: Exit code `1`, indicating Docker is not installed.

### 2. Update Package Lists in Jenkins Container
- Command:
  ```bash
  docker exec jenkins apt-get update
  ```
- Result: Successfully updated package lists.

### 3. Install Docker in Jenkins Container
- Command:
  ```bash
  docker exec jenkins apt-get install -y docker.io
  ```
- Expected Outcome: Docker should be installed. If this step fails, check the error message for further troubleshooting.

### 4. Verify Docker Installation Again
- Command:
  ```bash
  docker exec jenkins which docker
  ```
- Expected Outcome: The path to the `docker` binary should be displayed.

### 5. Grant Jenkins User Access to Docker
- Command:
  ```bash
  docker exec jenkins usermod -aG docker jenkins
  ```
- Expected Outcome: The Jenkins user is added to the `docker` group.

### 6. Restart the Jenkins Container
- Command:
  ```bash
  docker restart jenkins
  ```
- Expected Outcome: The Jenkins container restarts, applying all changes.

### 7. Re-run the Jenkins Pipeline
- Trigger the pipeline again to verify that the issue is resolved.

## Notes
- Ensure that the Docker daemon is running on the host machine.
- If the Jenkins container does not have internet access, you may need to configure a proxy or use an offline installation method.

## Troubleshooting
- If Docker installation fails, check the network connectivity and package repository configuration.
- If the `docker` command is still not found, verify the installation path and ensure it is in the system's `PATH`.