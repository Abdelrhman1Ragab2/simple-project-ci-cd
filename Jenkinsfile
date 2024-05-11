
//Pipeline start here
pipeline {
    agent any

  //Pipeline stages:
    stages {
      // First Stage
        stage('First-Stage') {
        
            steps {
                sshagent(credentialsId: 'ssh-remote-machine') {
                    // Use the `ansiblePlaybook` step from the Ansible plugin
                    ansiblePlaybook(
                        inventory: 'inv.ini',  // Path to your inventory file
                        playbook: 'playbook.yml',    // Path to your Ansible playbook
                        become: true                   // Optional: Escalate privileges (use with caution)
                    )
                }
                // withCredentials([sshUserPrivateKey(credentialsId: 'ssh-remote-machine', keyFileVariable: 'SSH_KEY')]) {
                //    sh 'ansible-playbook --private-key $SSH_KEY -i inv.ini playbook.yml'
                // }
            }
        
        }
    }
//--private-key key1.pem
}
