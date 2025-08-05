Simple Jenkins CI/CD Pipeline
This repository contains the solution for the DevOps Internship Task 2 from Elevate Labs. The objective of this task is to set up a basic Jenkins pipeline to automate the process of building and deploying a simple application.


Table of Contents
Project Overview

Tools Used

Project Structure

Pipeline Stages

How to Run

Screenshots

Project Overview
This project demonstrates a fundamental Continuous Integration/Continuous Deployment (CI/CD) pipeline using Jenkins. The pipeline is configured to automatically trigger on a code commit , and it involves stages for building, testing, and deploying a containerized application. The entire pipeline is defined as code in a 


Jenkinsfile.

Tools Used

Jenkins: An open-source automation server used to build, test, and deploy software.


Docker: A platform used to develop, ship, and run applications in containers.

Project Structure
The repository is organized as follows:

.
├── app.js             # Simple Node.js/Express application
├── package.json       # Node.js dependencies and scripts
├── Dockerfile         # Docker instructions to build the application image
├── Jenkinsfile        # The CI/CD pipeline definition
└── README.md          # This readme file
Pipeline Stages
The Jenkins pipeline consists of the following common stages:

Build: In this stage, the pipeline builds a Docker image from the provided Dockerfile. This encapsulates the application and its dependencies into a single, portable image.

Test: This stage is a placeholder for running automated tests. In a real-world scenario, you would execute unit tests, integration tests, or other quality checks here.

Deploy: During this stage, the pipeline stops and removes any old running version of the application container and then runs a new container from the image built in the 'Build' stage.

How to Run
To replicate this setup, follow these steps:

Prerequisites:

Install Jenkins.

Install Docker and ensure the Jenkins user has permission to use it.

Setup Jenkins Pipeline:

In the Jenkins dashboard, create a new "Pipeline" project.

Under the "Pipeline" configuration tab, select "Pipeline script from SCM".

Choose "Git" as the Source Control Management (SCM).

Enter the URL of this GitHub repository.

Ensure the "Script Path" is set to Jenkinsfile.

Trigger the Pipeline:

Save the pipeline configuration.

You can trigger the pipeline manually by clicking "Build Now".

For fully automated CI, configure a webhook in the GitHub repository settings to point to your Jenkins server. This will trigger the pipeline on every push to the repository.

Verify Deployment:

After a successful pipeline run, you can check the Jenkins dashboard for the console output of each stage.

The application will be running in a Docker container. You can verify this by running docker ps in your terminal.

Access the deployed application in your web browser (e.g., http://localhost:8080).