// import functions from at which is the main extension module of AutoTouch
// you can also use them on the way of at.touchDown, at.usleep ......
// --------------------------------------
// Information of recording
// Time: 2021-03-28 11:53:44
// Resolution: 1125, 2436
// Front most app: GrandChase
// Orientation of front most app: LandscapeRight
// --------------------------------------

const {usleep, toast, stop} = at
const {clicked,findImageOnScreen,sendCoord} = require("./API");
var coord = {}

//appActivate("com.kog.grandchaseglobal");

// find lvl up image (blue feather)
function levelup() {
	// touch on confirm button
	usleep(1000000);
	clicked(2043, 1042);
	usleep(1000000)
	// verify if "avis" window is on screen
	if (findImageOnScreen("avis.PNG")){
        // get coord

		// touch anywhere on the screen
		usleep(1000000);
		clicked(2043, 1042);
		// touch next button
		clicked(2039, 1042);
		usleep(1000000);
		readyToGoButton();
	}
	// verify if next button is on screen
	else if (findImageOnScreen("next.PNG")){
		// touch next button
		clicked(coord["x"], coord["y"]);
		usleep(1000000);
		readyToGoButton();
	}

}

// find next donjon image
function readyToGoButton() {

	if (findImageOnScreen("3heroes.PNG")){
		toast("3 heroes quest")
		// touch ready button
		clicked(2039, 1042);
		usleep(1200000);
		// touch on team 2 
		clicked(715, 173);
		usleep(1000000);
		// touch on start fight
		clicked(2039, 1042);
		usleep(1000000);
        waitTheEnd();
	}

	else if (findImageOnScreen("noPorteur.PNG")){
		toast("no porteur quest")
		// touch ready button
		clicked(2039, 1042);
		usleep(1200000);
		// touch on team 3 
		clicked(874, 171);
		usleep(1000000);
		// touch on start fight
		clicked(2039, 1042);
		usleep(1000000);
        waitTheEnd();


	}

	else if (findImageOnScreen("ready.PNG")){
        // get button coordinates
        coord = sendCoord();
		// touch ready button
		clicked(coord["x"], coord["y"]);
		usleep(1200000);
		// touch on team 1 
		clicked(434, 172);
		usleep(1000000);
		// touch on start fight
		clicked(coord["x"], coord["y"]);
		usleep(1000000);
        waitTheEnd();
	}
	// new donjon search hero on the map
	else if (findImageOnScreen("hero.PNG")){
		usleep(1500000);
        // get hero coordinates
        coord = sendCoord();
		newMap();
	}
	else toast('not found ready button');

}

function newMap(){
	// touch on hero button
	clicked(coord["x"], coord["y"]);
	usleep(1000000);
	// touch on first dj
	clicked(473, 341);
	usleep(1000000);
	// launch ready to go function
	readyToGoButton();
}

function waitTheEnd() {         //  create a loop function
  var finish = false;

  while(finish === false){
	//   if (findImageOnScreen("finish.PNG") || 
	//   	(findImageOnScreen("feather.PNG")) || (findImageOnScreen("avis.PNG"))){
	// 	  finish = true;
	//   }
	  if (findImageOnScreen("finish.PNG")){
		  finish = true;
	  }
	//   else if (findImageOnScreen("feather.PNG")){
	// 	  finish = true;
	//   }
	//   else if (findImageOnScreen("avis.PNG")){
	// 	  finish = true;
	//   }
	  else{
    	console.log("en combat");
	 	usleep(30000000);
		}
  }
  run();
}



function run() {
	// activate AutoTouch app
	//	appActivate("me.autotouch.AutoTouch.ios8");

	// Tests code ------------------------
	// console.log("search next button...");
	// findImageOnScreen("ready.PNG");
    // coord = sendCoord();
	// ------------------------------------

	// search next button
	if (findImageOnScreen("next.PNG")) {
        // get button coordinates
        coord = sendCoord();
		//	touch next button
		clicked(coord["x"], coord["y"]);
		usleep(1000000);
		readyToGoButton();
	}
	else if (findImageOnScreen("feather.PNG")) {
		levelup();
	}
	//verify if "avis" window is on screen
	else if (findImageOnScreen("avis.PNG")){
		//	touch anywhere on the screen
		usleep(1000000);
		clicked(2043, 1042);
		usleep(1500000);
		//	touch next button
		if (findImageOnScreen("next.PNG")) {
			// get button coordinates
			coord = sendCoord();
			//	touch next button
			clicked(coord["x"], coord["y"]);
			usleep(1000000);
			readyToGoButton();
		}}
	else {
		console.log('rien trouver...');
		usleep(1000000);
		toast("finish");
		// stop();
	}

}

// run()

// export `run()` method from this module
module.exports = {
	run
}