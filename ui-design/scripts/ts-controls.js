const tsclockSection = document.getElementById('timeshift-clock');
const btnFullscrn = document.getElementById('btn-fullscreen');

// Fullscreen
const elem = document.documentElement;  //document element
btnFullscrn.addEventListener('click', function () {
    if (elem.requestFullscreen) {
        tsclockSection.requestFullscreen();
        tsclockSection.classList.toggle('fullscreen-mode');
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
        //clock.classList.toggle('fullscreen-mode');
    }
})