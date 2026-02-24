// Criar pétalas animadas
for (let i = 0; i < 25; i++) {
    let petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";
    petal.style.opacity = Math.random();
    document.body.appendChild(petal);
}
