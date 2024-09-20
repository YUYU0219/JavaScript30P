
const pressed = [];
const secretCode = 'franky';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(0, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
    console.log(pressed);
    document.querySelector('.inputCode').innerHTML = pressed.join('-');
})




