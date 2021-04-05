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
const { clicked, findImageOnScreen } = require("./API")



function waitTheEnd() {         //  create a loop function
  while(findImageOnScreen("finish.PNG") === false){
    console.log("en combat");
	usleep(10000000);
  }
	// touch quit button
	clicked(2039, 1042);
	usleep(1200000);
	// verify result
	clicked(1358, 305);
	usleep(1200000);

	// touch any where to get the reward
	clicked(1358, 305);
	usleep(1200000);

	// confirm
	clicked(2039, 1042);
	usleep(1000000);

	// verify if accessory reward is full
	if (findImageOnScreen("getReward.PNG")){
		// get reward 
		clicked(1123, 976);
		usleep(1000000);
		// touch anywhere
		clicked(2039, 1042);
		usleep(1000000);

	}

	// finish and restart
  	startBoss();
}


function startBoss(){
    // find ready button
    if (findImageOnScreen("boss.PNG")){
		// touch summon button
		clicked(2066, 354);
		usleep(1200000);
				
        // touch anywhere to get reward
		clicked(1358, 305);
		usleep(1200000);

		// touch on participate
		clicked(1358, 305);
		usleep(1200000);

		// touch on ready
		clicked(2039, 1042);
		usleep(1000000);

		// touch on start the fight
		clicked(2039, 1042);
		usleep(1000000);

		// launch wait function
		waitTheEnd();
	}
	else{
		usleep(1000000);
		toast("finish");
		stop();
	}
	
}

// export `run()` method from this module
module.exports = {
	startBoss
}

// startBoss()