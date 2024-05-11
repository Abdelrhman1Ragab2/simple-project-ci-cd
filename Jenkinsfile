
//Pipeline start here
pipeline {
    agent any

  //Pipeline stages:
    stages {
      // First Stage
        stage('First-Stage') {
        
            steps {
                sshagent(credentialsId: 'ssh-remote-machine') {
                    sh 'ansible-playbook -i inv.ini playbook.yml'
                }
        }
        
        }
    }
//--private-key key1.pem
