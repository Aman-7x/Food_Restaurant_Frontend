pipeline {
    agent any

    tools {
        // Ensure you have configured a NodeJS installation tool in Jenkins Global Tool Configuration
        // Match the name (e.g., 'NodeJS') with what you set up in Jenkins
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use npm install or npm ci
                sh 'npm install'
            }
        }

        stage('Run Build') {
            steps {
                // Builds the React production bundle
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                // Runs tests in CI mode if configured
                sh 'npm test -- --watchAll=false'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}