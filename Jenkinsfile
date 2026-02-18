pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "react-jenkins-docker-react-app"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the repository
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image with explicit Dockerfile path
                    sh 'docker build -t $DOCKER_IMAGE -f Dockerfile .'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests inside the Docker container with --watchAll=false
                    sh 'docker run --rm $DOCKER_IMAGE npm test -- --watchAll=false'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy only the react-app service
                    sh 'docker-compose up -d react-app'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}