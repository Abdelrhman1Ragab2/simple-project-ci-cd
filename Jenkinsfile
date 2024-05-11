
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
                sshagent(credentialsId: 'ssh-remote-machine') {
                    catchError {
                        sh 'ansible-playbook  -i inv.ini playbook.yml'
                        echo 'Ansible playbook execution completed.'
                    }
                }
            }
        
        }
    }
//--private-key key1.pem
}
