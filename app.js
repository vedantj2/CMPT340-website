const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// END SECTION

const second = document.querySelector(".second");
const end = second.querySelector("h1");

// SCROLL MAGIC

const controller = new ScrollMagic.Controller();

const videoBlurAnim = TweenMax.fromTo(video, 3,
    { webkitFilter: "blur(0px)", filter: "blur(0px)" },
    { webkitFilter: "blur(10px)", filter: "blur(15px)" } // Adjust the final blur value as needed
);

let scene = new ScrollMagic.Scene({
    duration: 8000,  // Corrected from 'durations' to 'duration'
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .setTween(videoBlurAnim)
    .addTo(controller);

const textAnim = TweenMax.fromTo(text, 5,
    { opacity: -3, visibility: 'hidden' },
    { opacity: 1, visibility: 'visible' }
);

let scene2 = new ScrollMagic.Scene({
    duration: 8000,
    triggerElement: intro,
    triggerHook: 0.2
})
    .setTween(textAnim)
    .addTo(controller);

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

function updateVideo() {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
    requestAnimationFrame(updateVideo); // This will create a loop that runs at the screen's refresh rate
}

requestAnimationFrame(updateVideo);


