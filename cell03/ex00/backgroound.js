const button = document.getElementById("buttonColor");

const colors = [
    "pink",
    "lightblue",
    "mediumpurple"
];

let index = 0;

button.addEventListener("click", function(){;
    document.body.style.backgroundColor = colors[index];

    index++;

    if (index >= colors.length){
        index = 0;
    }
    });