// --------------------------------------
// Information of coding
// Time: 2021-04-05 15:15
// Resolution: 1125, 2436
// Front most app: GrandChase
// Orientation of front most app: LandscapeRight
// --------------------------------------

const { touchDown, touchUp, usleep} = at
var coord = {}

// function touch down/up
function clicked(x, y) {
	touchDown(1, x, y);
	usleep(98947.00);
	touchUp(1, x, y);
	usleep(1843479.50);
}

// function to find image on screen
function findImageOnScreen(name) {

	// Prepare parameters
	const targetImagePath = '../images/' + name;
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

// function to return image coordinate
function sendCoord(){
    console.log(coord);
    return coord;
}

// export `run()` method from this module
module.exports = {
	clicked,
	findImageOnScreen,
	sendCoord
}
