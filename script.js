 const dino = document.getElementById("dino"), 
    cactus = document.getElementById("cactus");

document.addEventListener("keydown",(event) => jump());

function jump() {
    dino.classList.add("jump");
    setTimeout(() => dino.classList.remove("jump"), 700);
}