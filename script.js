//your JS code here. If required.
let audioElements = [];

function playSound(soundFile) {
    stopAllSounds();

    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
    audioElements.push(audio);
}

function stopAllSounds() {
    audioElements.forEach(audio => audio.pause());
    audioElements = [];
}
