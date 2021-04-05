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
  	startTower();
}


function startTower(){
    // find ready button
    if (findImageOnScreen("ready.PNG")){
		// touch ready button
		clicked(2039, 1042);
		usleep(1200000);
				
        // touch on start fight
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
	startTower
}
