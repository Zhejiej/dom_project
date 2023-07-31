;

let body = document.querySelector("body");
body.style["background-color"] =  "#00008b";


let h1 = document.querySelector("h1");
h1.style["text-decoration"] =  "underline";
h1.style["text-decoration-color"] = "#FFCB05";

let h2 = document.querySelector("h2");
h2.style["display"] =  "flex";
h2.style["justify-content"] = "center";
h2.textContent = "Here are Pokemon's Incredible Gen 1 starters!";

let h3 = document.querySelectorAll("h3");
for(let i = 0; i <h3.length; i++){
    h3[i].style["color"]= "#FDEFA6"
    h3[i].innerHTML += "!"
}

let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
    images[i].style.border = "2px dotted orange";
}

let footer = document.querySelector("footer");
footer.style["text-decoration"] = "overline underline";
footer.textContent = "All Star Code - DOM Project";
footer.style["fontSize"] = '24px';