pipeline{
  agent any
  stages {
	stage('build'){
	  steps{
		sh 'echo "Step : Build"'
		//intall
		sh 'echo "Build - Installing"'
		sh 'yarn install'
		//build
		sh 'echo "Build - Building"'
		sh 'yarn build'
	  }
    }
   	stage('test'){
	  steps{
		sh 'echo "Test passed"'	  
	  }
    }
   	stage('development'){
	  steps{
		sh 'echo "Step : Development."'
		//Start Dev
		sh 'echo "Development - Starting Service"'
		sh 'pm2 start yarn --name "campport-3000"'
	  }
    }
   	stage('production'){
	  steps{
		sh 'echo "Step : Production."'
		//Delete Service
		sh 'echo "Production - Deleting Service"'
		sh 'pm2 delete --name "campport-3000"'
	  }
    }
  }
}
