'use strict'

const h1 = document.querySelector("#h1");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");

function randomBackgroundColor() {
    const [r, g, b] = [randomRgbValue(), randomRgbValue(), randomRgbValue()];
    const style = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = style;
    h1.textContent = style;
    h1.style.color = style;
    h1.style.filter = "invert(1)";
}

function randomRgbValue() {
    return Math.floor(Math.random() * 256);
}

btn.addEventListener("click", randomBackgroundColor);