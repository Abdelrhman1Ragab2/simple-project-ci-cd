
//Pipeline start here
pipeline {
    agent any

  //Pipeline stages:
    stages {
      // First Stage
        stage('First-Stage') {
        
            steps {
              // do ansible playbook  
              sh 'ansible-playbook -i inv.ini  playbook.yml'
            }
        }
        
        }
    }
//--private-key key1.pem
