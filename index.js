function tom1() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}
function tom2() {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
}
function tom3() {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
}
function tom4() {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
}
function snare() {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
}
function crash() {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
}
function kick() {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
}

document.getElementById('tom1').addEventListener('click', tom1);
document.getElementById('tom2').addEventListener('click', tom2);
document.getElementById('tom3').addEventListener('click', tom3);
document.getElementById('tom4').addEventListener('click', tom4);
document.getElementById('snare').addEventListener('click', snare);
document.getElementById('crash').addEventListener('click', crash);
document.getElementById('kick').addEventListener('click', kick);

document.addEventListener('keypress', (e) => {
    if(e.key == 'w') {
        tom1();
    } else if(e.key == 'a') {
        tom2();
    } else if(e.key == 's') {
        tom3();
    } else if(e.key == 'd') {
        tom4();
    } else if(e.key == 'j') {
        snare();
    } else if(e.key == 'k') {
        crash();
    } else if(e.key == 'l') {
        kick();
    }
});