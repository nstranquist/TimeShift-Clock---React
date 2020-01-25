$ = (query) => {
    return document.querySelector(query);
}

/* clock */
const tsclock = document.getElementById('ts-clock-time');
function runTimer() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    //let ampm = "am";

    if (h > 12) {
        h -= 12;
        //ampm = "pm";
    } else if (h === 0)
        h = 12;

    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = h + ":" + m + ":" + s; //ommitted ampm on purpose
    //$('#clock').innerText=time;
    tsclock.innerText = time;  //optimized
    //$('#ampm').innerText=ampm;    
}

runTimer(); //used to fix error of 1 second time delay
setInterval(runTimer, 1000);

/*function addAlarm(time) {

}*/

/* menu btn, menu-drawer toggler */
const navDrawer = $('.nav-drawer');
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('mouseup', function () {
    navDrawer.classList.toggle('clicked');
    menuBtn.classList.toggle('clicked');
});

/* navbar scroll */
let position = 0;
const shrinkOnScroll = $('.shrink-on-scroll');
const mywindow = window;
window.addEventListener('scroll', function () {
    if (position < mywindow.pageYOffset) {
        if (!navDrawer.classList.contains('clicked'))
            shrinkOnScroll.classList.add('hide');
    }
    else {
        shrinkOnScroll.classList.remove('hide');
    }
    position = mywindow.pageYOffset;
})

/* navbar toggle visibility */
$('.drawer-list').addEventListener('mousedown', function () {
    navDrawer.classList.toggle('clicked');
    menuBtn.classList.toggle('clicked');
});

// expand / contract alarms/logs section
const clock = document.getElementById('ts-clock-time');
const options = document.getElementById('ts-options');
const alarms = document.getElementById('ts-alarms');
const log = document.getElementById('ts-log');
$('.options-toggle').addEventListener('mousedown', function () {
    options.classList.toggle('clicked');
});
$('.alarms-toggle').addEventListener('mousedown', function () {
    alarms.classList.toggle('clicked');
});
$('.log-toggle').addEventListener('mousedown', function () {
    log.classList.toggle('clicked');
});

//large screen nav
$('.nav-list2').addEventListener('mousedown', function (e) {
    toggleNav(e);
});
//small screen nav
$('.nav-list').addEventListener('mousedown', function (e) {
    toggleNav(e);
});

function toggleNav(e) {
    if (e.target) {
        if (e.target.matches("a.a-clock")) {
            if (clock.classList.contains('clicked'))
                clock.classList.remove('clicked');
        }
        else if (e.target.matches("a.a-options")) {
            if (options.classList.contains('clicked'))
                options.classList.remove('clicked');
        }
        else if (e.target.matches("a.a-alarm")) {
            if (alarms.classList.contains('clicked'))
                alarms.classList.remove('clicked');
        }
        else if (e.target.matches("a.a-log")) {
            if (log.classList.contains('clicked'))
                log.classList.remove('clicked');
        }
    }
    else
        console.log('target not recognized');
    shrinkOnScroll.classList.add('hide');
}