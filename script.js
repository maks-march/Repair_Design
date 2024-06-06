const type_btns = document.getElementsByClassName("type_btn");
const image = document.getElementById("image");
const city = document.getElementById("city");
const time = document.getElementById("time");
const size = document.getElementById("size");
const cost = document.getElementById("cost");
const path = "img/";
let current_type = 0;
let current_img = 0;
var cities = ["Rostov-on-Don<br>LCD admiral", "Sochi", "Rostov-on-Don<br>LCD patriotic"];
var sizes = ["81 M2", "150 M2", "180 M2"];
var times = ["3.5 months", "5 months", "10 months"];
var costs = ["Upon request", "10000$", "25288$"];
var types = ["don_admiral", "sochi", "don_patriotic"];
var img = ["1.jpg", "2.jpg", "3.jpg"];
for (let i = 0; i < type_btns.length; i++) {
    type_btns[i].addEventListener("click", () => {
        type_btns[current_type].classList.remove("type_active");
        type_btns[i].classList.add("type_active");
        current_type = i;
        image.src = path+types[current_type]+img[current_img];
        city.innerHTML = cities[current_type];
        size.innerHTML = sizes[current_type];
        time.innerHTML = times[current_type];
        cost.innerHTML = costs[current_type];
    });
}

const left_btn = document.getElementById("left");
const right_btn = document.getElementById("right");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const active_dot = "img/active_dot.svg";
const unactive_dot = "img/unactive_dot.svg";
var dots = [dot1, dot2, dot3];

right_btn.addEventListener("click", () => {
    if (current_img != 2) {
        dots[current_img].src = unactive_dot;
        current_img++;
        dots[current_img].src = active_dot;
        image.src = path+types[current_type]+img[current_img];
    }
});

left_btn.addEventListener("click", () => {
    if (current_img != 0) {
        dots[current_img].src = unactive_dot;
        current_img--;
        dots[current_img].src = active_dot;
        image.src = path+types[current_type]+img[current_img];
    }
});