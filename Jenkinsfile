pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                // This is where you would run build commands, e.g., mvn clean install for a Java app
                // For our Node.js app, we'll build a Docker image
                script {
                    sh 'docker build -t my-simple-app .'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing the application...'
                // Add commands to run your tests here.
                // For this example, we'll just simulate a test.
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Stop and remove any existing container with the same name
                script {
                    sh 'docker stop my-simple-app-container || true'
                    sh 'docker rm my-simple-app-container || true'
                }
                // Run the new container
                script {
                    sh 'docker run -d --name my-simple-app-container -p 8080:3000 my-simple-app'
                }
            }
        }
    }
}