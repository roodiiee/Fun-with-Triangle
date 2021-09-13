const base = document.querySelector("#base")
const height = document.querySelector("#height")
const button = document.querySelector("#button")
const message = document.querySelector("#message")


let newBase, newHeight;

function areaOfTriangle(){
    newBase = Number(base.value);
    newHeight = Number(height.value);
    var area = 0.5*(newBase)*(newHeight)
    message.innerText = `Area of Triangle is : ${area}`
}

function clickHandler(){
    areaOfTriangle();
}

button.addEventListener("click", clickHandler)