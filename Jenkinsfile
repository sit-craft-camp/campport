//MASTER - PRODUCTION BRANCH
pipeline{
  agent any
  stages {
	stage('build'){
	  steps{
	  	sh 'echo "========================================================"'
		sh 'echo "============= [ Step : Build [1/4] ] ==================="'
		//intall
		sh 'echo "============= [ Build [1/4] - Installing ] ============="'
		sh 'yarn install'
		//build
		sh 'echo "============= [ Build [1/4] - Building ] ==============="'
		sh 'yarn build'
		sh 'echo "========================================================"'
	  }
    }
   	stage('test'){
	  steps{
		sh 'echo "============= [ Test passed [2/4] ] ============="'	  
		sh 'echo "================================================="'
	  }
    }
   	stage('development'){
	  steps{
		sh 'echo "=================== [ Step : Development. [3/4] ] ====================="'
		//Start Dev
		sh 'echo "============== [ Development [3/4] - Starting Service ] ==============="'
		sh 'pm2 start yarn --name CAMPPORT -- start'
		input "Does the staging environment look ok?"
		sh 'echo "============= [ Development [3/4] - Deleting Service ] ================"'
		sh 'pm2 delete CAMPPORT'
		sh 'echo "======================================================================="'
	  }
    }
   	stage('production'){
	  steps{
		sh 'echo "============= [ Step : Production. [4/4] ] ===================================="'
		//Delete Service
		sh 'echo "============= [ Production [4/4] - Put web under maintenance ] ================"'
		sh 'ssh bob-site@webserver-prod "mv /var/www/maintenance_off.html /var/www/maintenance_on.html"'
		sh 'echo "============= [ Production [4/4] - Deleteing old project ] ===================="'
		sh 'ssh bob-site@webserver-prod "pm2 delete CAMPPORT || :"'
		sh 'echo "============= [ Production [4/4] - Stoping Old Production ] ==================="'
		sh 'ssh bob-site@webserver-prod "rm -rf /home/bob-site/campport/*"'
		sh 'echo "============= [ Production [4/4] - copy to Production Server ] ================"'
		sh 'scp -r . root@webserver-prod:/home/bob-site/campport '
		sh 'echo "============= [ Production [4/4] - Starting Server ] =========================="'
		sh 'ssh bob-site@webserver-prod "cd /home/bob-site/campport && pm2 start npm --name CAMPPORT -- start "'
		sh 'echo "============= [ Production [4/4] - Put web to normal op] ======================"'
		sh 'ssh bob-site@webserver-prod "mv /var/www/maintenance_on.html /var/www/maintenance_off.html"'
		sh 'echo "==============================================================================="'
	  }
    }
  }
}
