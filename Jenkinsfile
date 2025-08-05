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
                // Use 'bat' and ignore errors if the container doesn't exist
                // The '|| exit 0' part helps ignore errors if the container is not found.
                bat 'docker stop my-simple-app-container || exit 0'
                bat 'docker rm my-simple-app-container || exit 0'
                
                echo 'Running new container...'
                bat 'docker run -d --name my-simple-app-container -p 8080:3000 my-simple-app'
            }
        }
    }
}