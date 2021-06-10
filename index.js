var maxZoomOut = 0.3;
var zoomOutLevel = maxZoomOut;
var xMax = 100;
var xMove = 0;
var hackTimer;

function handleZoomKeys(event) {
    if (event.keyCode == 90) { // z
        zoomOutLevel = maxZoomOut;
    }
    else if(event.keyCode == 88) { // x
        zoomOutLevel = 1;
    }
}

function handleStopStart(event) {
    if ((event.keyCode == 32) && hackTimer) {
        console.log('Stopping hack');
        clearInterval(hackTimer);
        hackTimer = null;
    } else {
        console.log('Starting hack');
        startHack();
    }
}

document.addEventListener('keydown', function(event) {
    handleZoomKeys(event);
    handleStopStart(event);
});

function zoomOut() {
    gsc = zoomOutLevel;
}

function startHack() {
    hackTimer = setInterval(function () {
        zoomOut();
    }, 100);
}



