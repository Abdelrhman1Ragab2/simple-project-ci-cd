
//Pipeline start here
pipeline {
    agent any

  //Pipeline stages:
    stages {
      // First Stage
        stage('First-Stage') {
        
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-remote-machine', keyFileVariable: 'SSH_KEY')]) {
                   sh 'ansible-playbook --private-key $SSH_KEY -i inv.ini playbook.yml'
                }
            }
        
        }
    }
//--private-key key1.pem
}
