const dino = document.querySelector('.dino');

function hendleKeyUp (event) {
    if(event.keyCode === 32) {
        console.log("pressinou Barra");
    }
}

document.addEventListener('keyup', hendleKeyUp);