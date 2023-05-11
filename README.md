
# ilionx DevDays Cypress Workshop #
This is code that is going to be used for the DevDays 2023 Cypress Workshop

  

### What does this repository contain? ###

* A Vue chat application

* A NodeJS server

### prerequisite ###
- Node installed - Version 15+
	- If you have node dependency's towards other application then install `nvm`
- An account at: https://chatengine.io/
- GIT installed
  

## vue-app folder
**Installation**

* Navigate towards the ***vue-app*** folder and do a `npm install`

* Make sure you add a `.env` file in the root of your application with the following content:
	* `VITE_ENV_API=development`

* Run the application by executing the following command in the terminal: `npm run dev`

## server folder
**Installation**

* Navigate towards the ***server*** folder and do a `npm install`
* Make sure you add a `.env` file in the root of your application with the following content:
	* `PRIVATE_KEY=HERE_COMES_YOUR_KEY`
* Start the application with the following command:
	* `npm start`