const {usleep, stop} = at
const { run } = require("./adventure")
const { startTower } = require("./tower")
const { startBoss } = require("./dimBoss")
const { worldBoss } = require("./wboss")
const label = { type: CONTROLLER_TYPE.LABEL, text: "Que voulez-vous faire?" }
const retrySwitch = { type: CONTROLLER_TYPE.SWITCH, title: "En continue?", key: "En continue?", value: 1 }

// It's an option for users to determine weather the inputs should be remembered, if you use this control in the dialog.
const remember = { type: CONTROLLER_TYPE.REMEMBER, on: false }

/*
Define buttons:
type = CONTROLLER_TYPE.BUTTON
title = Button text
color = Button background color, it's optional, the default value is 0x428BCA
width = Button width upon percentage of the dialog width, it's optional, the default value is 0.5, max value is 1.0.
flag = Integer type of button flag for identifying which button is tapped.
collectInputs = Boolean type specifying wheather the dialog should collect the inputs while this button is tapped.
*/
const btn1 = { type: CONTROLLER_TYPE.BUTTON, title: "Aventure", color: 0x71C69E, width: 0.8, flag: 1, collectInputs: true }
const btn2 = { type: CONTROLLER_TYPE.BUTTON, title: "Tours", color: 0x4F33FF, width: 0.8, flag: 2, collectInputs: true }
const btn3 = { type: CONTROLLER_TYPE.BUTTON, title: "Boss", color: 0x33FF49, width: 0.8, flag: 3, collectInputs: true }
const btn4 = { type: CONTROLLER_TYPE.BUTTON, title: "Boss mondiale", color: 0xFF9933, width: 0.8, flag: 4, collectInputs: true }
const btn5 = { type: CONTROLLER_TYPE.BUTTON, title: "Annuler", color: 0xFF0000, width: 0.5, flag: 5, collectInputs: true }

const controls = [label, btn1, btn2, btn3, btn4, remember, retrySwitch, btn5]

// Pop up the dialog. After popping, the script will suspend waiting for user input until any button is tapped, then returns the flag of tapped button.

// What orientations the dialog could be, it's optional
const orientations = [INTERFACE_ORIENTATION_TYPE.LANDSCAPE_LEFT];


function startDialog(){
    const result = at.dialog({ controls, orientations });

    if (result === 1) {
        console.log("Go pour aventure");
        usleep(1000000);
        run();
    } 
    else if (result === 2){
        console.log("Go pour la tour");
        usleep(1000000);
		startTower();
    } 
    else if (result === 3){
        console.log("Go pour le boss dimensionnel");
        usleep(1000000);
		startBoss();
    }
    else if (result === 4){
        console.log("Go pour le boss mondiale");
        usleep(1000000);
		worldBoss();
    }
    else if (result === 5){
        console.log("Annuler et fermer");
        usleep(1000000);
    	stop();
    }

}


// export `run()` method from this module
module.exports = {
	startDialog
}