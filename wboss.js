// import functions from at which is the main extension module of AutoTouch
// you can also use them on the way of at.touchDown, at.usleep ......
// --------------------------------------
// Information of recording
// Time: 2021-04-01 01:56
// Resolution: 1125, 2436
// Front most app: GrandChase
// Orientation of front most app: LandscapeRight
// --------------------------------------

const {usleep, toast, stop} = at
const { clicked, sendCoord } = require("./API")
var coord = {}



// function to find image on screen
function findImageScreen(name) {

	// Prepare parameters
	const targetImagePath = 'images/' + name;
	const options = {
		targetImagePath: targetImagePath,
		count: 3, // OPTIONAL, default is 0, 0 means no limitation
		threshold: 0.9, // OPTIONAL, default is 0.9
		region: null, // OPTIONAL, default is null, null means the whole screen
		debug: true, // OPTIONAL, default is false, true means turn on the debug mode which will produce an image showing the finding process
		method: 1, // OPTIONAL, default is 1, 2 means a more intelligent method
	}

	const [result, error] = at.findImage(options)

	if (typeof result[0] === 'undefined') {
		console.log('Failed to findImage result undefined');
		return false;
	}
	else if (error) {
		alert('Failed to findImage, error: %s', error)
		return false;
	}
	else {
		coord = result[0];
		console.log('Got result by findImage synchronously result is: ', coord);
		return true;
	}

}

function waitTheEnd() {         //  create a loop function
  while(findImageScreen("defeat.PNG") === false){
    console.log("en combat");
	usleep(185000000);
  }
	// touch quit button
	clicked(2039, 1042);
	usleep(1200000);
  	worldBoss();
}

function retryTeams(){
	var i = 0;
	if (findImageScreen("retry.PNG")){
		// get button coordinates
		coord = sendCoord();
		while (i < 3){
			// touch retry button
			clicked(coord["x"], coord["y"]);
			usleep(1200000);
			i++;
		}
		
	}
	worldBoss();
}


function worldBoss(){
    // find ready button
    if (findImageScreen("goBoss.PNG")){
        // get button coordinates
        coord = sendCoord();
		// touch ready button
		clicked(coord["x"], coord["y"]);
		usleep(1200000);

		// launch wait function
		waitTheEnd();
	}
    // find retry button
    if (findImageScreen("retry.PNG")){
		// launch retry function
		retryTeams();
	}
	
	else{
		usleep(1000000);
		toast("finish");
		stop();
	}
	
}

// worldBoss();

// export `run()` method from this module
module.exports = {
	worldBoss
}
