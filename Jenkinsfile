//DEVELOP BRANCH
pipeline{
  agent any
  stages {
	stage('build'){
	  steps{
	  	sh 'echo "=================================================="'
		sh 'echo "============= [ Step : Build ] ==================="'
		//intall
		sh 'echo "============= [ Build - Installing ] ============="'
		sh 'yarn install'
		//build
		sh 'echo "============= [ Build - Building ] ==============="'
		sh 'yarn build'
		sh 'echo "=================================================="'
	  }
    }
   	stage('test'){
	  steps{
		sh 'echo "============= [ Test passed ] ============="'	  
		sh 'echo "==========================================="'
	  }
    }
   	stage('development'){
	  steps{
		sh 'echo "=================== [ Step : Development. ] ===================="'
		//Start Dev
		sh 'echo "============== [ Development - Starting Service ] =============="'
		sh 'pm2 start yarn --name CAMPPORT -- start'
		sh 'echo "============= [ Development - Deleting Service ] ==============="'
		sh 'pm2 delete CAMPPORT'
		sh 'echo "================================================================"'
	  }
    }
   	stage('production'){
	  steps{
		sh 'echo "============= [ Step : Production. ] ===================================="'
		//Delete Service
		sh 'echo "============= [ Production [4/4] - Put web under maintenance ] ================"'
		sh 'ssh root@webserver "mv /var/www/maintenance_off.html /var/www/maintenance_on.html"'
		sh 'echo "============= [ Production - Deleteing old project ] ===================="'
		sh 'ssh root@webserver "pm2 delete CAMPPORT || :"'
		sh 'echo "============= [ Production - Stoping Old Production ] ==================="'
		sh 'ssh root@webserver "rm -rf /root/campport/*"'
		sh 'echo "============= [ Production - copy to Production Server ] ================"'
		sh 'scp -r . root@webserver:/root/campport/ '
		sh 'echo "============= [ Production - Starting Server ] =========================="'
		sh 'ssh root@webserver "cd /root/campport && pm2 start npm --name CAMPPORT -- start "'
		sh 'echo "============= [ Production [4/4] - Put web to normal op] ======================"'
		sh 'ssh root@webserver "mv /var/www/maintenance_on.html /var/www/maintenance_off.html"'
		sh 'echo "========================================================================="'
	  }
    }
  }
}
