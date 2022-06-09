function catLaugh() {
    if (document.getElementById("catto").src == "https://i.imgur.com/Nqhs6Ue.png"){
            document.getElementById("catto").src = "https://i.imgur.com/PsJW3PJ.png";
            openMouthSound.play();
    } else {
            document.getElementById("catto").src = "https://i.imgur.com/Nqhs6Ue.png";
            closeMouthSound.play();
    }
}

function instruc() {
        alert("Click the button continuously to make the cat laugh!");
}

const openMouthSound = new Audio("./sounds/sound_sound-open.mp3");
const closeMouthSound = new Audio("./sounds/sound_sound-close.mp3");
