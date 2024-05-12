
//Pipeline start here
pipeline {
    agent any

  //Pipeline stages:
    stages {
      // First Stage
        stage('First-Stage') {
        
            steps {
                // withCredentials([sshUserPrivateKey(credentialsId: 'ssh-remote-machine', keyFileVariable: 'SSH_KEY')]) {
                //    sh 'ansible-playbook --private-key $SSH_KEY -i inv.ini playbook.yml'
                // }
                sshagent(['ssh-remote-machine']) {
                     // sh "ansible-playbook -i inv.ini playbook.yml"
                     sh "ssh -o StrictHostKeyChecking=no ubuntu@3.253.79.21 echo hello"

                }
            }
        
        }
    }
//--private-key key1.pem
}
