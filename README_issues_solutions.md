# Issues and Solutions for Jenkins CI/CD Pipeline with Docker and React

This document outlines the issues encountered during the setup of a Jenkins CI/CD pipeline for a React application with Docker and their respective solutions.

---

## **1. Error: `‘checkout scm’ is only available when using “Multibranch Pipeline” or “Pipeline script from SCM”`**

### **Cause**:
This error occurs when the `checkout scm` step is used in the `Jenkinsfile`, but the pipeline is not configured to use **Pipeline script from SCM**.

### **Solution**:
1. Go to your Jenkins job and click **Configure**.
2. In the **Pipeline** section:
   - Change the **Definition** to **Pipeline script from SCM**.
   - Select **Git** as the SCM.
   - Enter your GitHub repository URL in the **Repository URL** field.
   - Add your GitHub credentials if the repository is private.
   - Set the **Branch Specifier** to `*/main` (or the branch you want to build).
   - Ensure the **Script Path** is set to `Jenkinsfile` (if it’s in the root directory of your repository).
3. Save the configuration and re-run the pipeline.

---

## **2. Error: `docker: not found`**

### **Cause**:
The Jenkins container does not have Docker installed or accessible, which is required to build and run Docker images.

### **Solution**:
1. Access the Jenkins container as the root user:
   ```bash
   docker exec -it --user root jenkins bash
   ```
2. Update the package lists:
   ```bash
   apt-get update
   ```
3. Install Docker:
   ```bash
   apt-get install -y docker.io
   ```
4. Exit the container:
   ```bash
   exit
   ```
5. Restart the Jenkins container:
   ```bash
   docker restart jenkins
   ```
6. Re-run the pipeline in Jenkins.

---

## **3. Error: `No credentials specified`**

### **Cause**:
The Git repository is private, and Jenkins does not have the necessary credentials to access it.

### **Solution**:
1. Go to **Manage Jenkins > Manage Credentials**.
2. Add your GitHub credentials:
   - Click **Add Credentials**.
   - Select **Kind** as **Username with password** or **Personal Access Token**.
   - Enter your GitHub username and password/token.
   - Save the credentials.
3. Go to your Jenkins job and click **Configure**.
4. In the **Pipeline** section, select the credentials you just added from the **Credentials** dropdown.
5. Save the configuration and re-run the pipeline.

---

## **4. Error: `apt-get update` Permission Denied**

### **Cause**:
The Jenkins container runs as a non-root user by default, which does not have permission to update the package lists.

### **Solution**:
1. Access the Jenkins container as the root user:
   ```bash
   docker exec -it --user root jenkins bash
   ```
2. Update the package lists:
   ```bash
   apt-get update
   ```
3. Install Docker:
   ```bash
   apt-get install -y docker.io
   ```
4. Exit the container:
   ```bash
   exit
   ```
5. Restart the Jenkins container:
   ```bash
   docker restart jenkins
   ```
6. Re-run the pipeline in Jenkins.

---

## **5. Error: `Lightweight checkout support not available, falling back to full checkout`**

### **Cause**:
The **Lightweight checkout** option is enabled, but Jenkins is unable to perform a lightweight checkout due to missing configurations or plugin issues.

### **Solution**:
1. Ensure the **Git plugin** is installed and up-to-date.
2. If the issue persists, disable **Lightweight checkout** in the **Pipeline** section:
   - Go to your Jenkins job and click **Configure**.
   - In the **Pipeline** section, uncheck the **Lightweight checkout** option.
   - Save the configuration and re-run the pipeline.

---

## **6. Error: `script returned exit code 127`**

### **Cause**:
This error occurs when a command in the `Jenkinsfile` fails to execute. In this case, the `docker build` command failed because Docker was not installed or accessible in the Jenkins container.

### **Solution**:
Follow the steps in **Error 2** to install Docker inside the Jenkins container and ensure it is accessible.

---

This document will help you troubleshoot and resolve common issues encountered during the setup of a Jenkins CI/CD pipeline for a React application with Docker. If you encounter any additional issues, feel free to update this document with new solutions.