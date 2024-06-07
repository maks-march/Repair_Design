const type_btns = document.getElementsByClassName("type_btn");
const image = document.getElementById("image");
const city = document.getElementById("city");
const time = document.getElementById("time");
const size = document.getElementById("size");
const cost = document.getElementById("cost");
let current_type = 0;
var cities = ["Rostov-on-Don<br>LCD admiral", "Sochi", "Rostov-on-Don<br>LCD patriotic"];
var sizes = ["81 M2", "150 M2", "180 M2"];
var times = ["3.5 months", "5 months", "10 months"];
var costs = ["Upon request", "10000$", "25288$"];
var paths = ["img/don_admiral.jpg", "img/sochi.jpg", "img/don_patriotic.jpg"];

const left_btn = document.getElementById("left");
const right_btn = document.getElementById("right");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const active_dot = "img/active_dot.svg";
const unactive_dot = "img/unactive_dot.svg";
var dots = [dot1, dot2, dot3];

right_btn.addEventListener("click", () => {
    if (current_type != 2) {
        dots[current_type].src = unactive_dot;
        type_btns[current_type].classList.remove("type_active");
        current_type++;
        type_btns[current_type].classList.add("type_active");
        dots[current_type].src = active_dot;
        image.src = paths[current_type];
        city.innerHTML = cities[current_type];
        size.innerHTML = sizes[current_type];
        time.innerHTML = times[current_type];
        cost.innerHTML = costs[current_type];
    }
    
});

left_btn.addEventListener("click", () => {
    if (current_type != 0) {
        dots[current_type].src = unactive_dot;
        type_btns[current_type].classList.remove("type_active");
        current_type--;
        type_btns[current_type].classList.add("type_active");
        dots[current_type].src = active_dot;
        image.src = paths[current_type];
        city.innerHTML = cities[current_type];
        size.innerHTML = sizes[current_type];
        time.innerHTML = times[current_type];
        cost.innerHTML = costs[current_type];
    }
});

const video_img = document.getElementById("video");
const video = document.getElementById("frame");
video_img.addEventListener("click", () => {
    console.log("shit)");
    video.classList.remove("video_unactive");
    video_img.classList.add("video_unactive");
    video.classList.add("video_active");
});
