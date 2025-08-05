pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Use 'bat' for Windows batch commands
                bat 'docker build -t my-simple-app .'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing the application...'
                // Placeholder for tests
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Stop and remove any old container first to avoid conflicts
                bat 'docker stop my-simple-app-container || exit 0'
                bat 'docker rm my-simple-app-container || exit 0'
                
                echo 'Running new container on port 8081...'
                // Change the host port from 8080 to 8081
                bat 'docker run -d --name my-simple-app-container -p 8081:3000 my-simple-app'
            }
        }
    }
}