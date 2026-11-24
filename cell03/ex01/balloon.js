const balloon = document.querySelector(".balloon");

const colors = [
    "green",
    "blue",
    "red"
];

let tamanho = 200;
let indexColor =  2;

function atualizarBalloon() {
    balloon.style.width = `${tamanho}px`;
    balloon.style.height = `${tamanho}px`;
    balloon.style.backgroundColor = colors[indexColor];
}

balloon.addEventListener("click", () => {
    tamanho += 10;

    if (tamanho > 420) {
        tamanho = 200;
        indexColor = 2;
       
        atualizarBalloon();
        return;
    }

    indexColor = (indexColor + 1) % colors.length;

    balloon.style.transition = "width 0.2s, height 0.2s, background-color 0.3s";

    atualizarBalloon();
});

balloon.addEventListener("mouseleave", () => {
    tamanho = Math.max(200, tamanho - 5);

    indexColor = (indexColor - 1 + colors.length) % colors.length;

    atualizarBalloon();
});