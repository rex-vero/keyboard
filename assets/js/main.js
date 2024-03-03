window.addEventListener('keydown', (e) => {
    const keys = document.getElementById(`${e.code}`);
    const boxes = document.querySelectorAll('.box');
    const shifts = document.querySelectorAll('.shifted');
    const normal = document.querySelectorAll('.normal');
    for (let i = 0; i < shifts.length; i++) {
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            shifts[i].style.display = 'block';
            normal[i].style.display = 'none';
        } else if (e.getModifierState('CapsLock')) {
            boxes[1].classList.add('box2');
            shifts[i].style.display = 'block';
            normal[i].style.display = 'none';
        } else {
            boxes[1].classList.remove('box2');
            shifts[i].style.display = 'none';
            normal[i].style.display = 'block';
        }
    }
    e.preventDefault();
    if (e.getModifierState('ScrollLock')) {
        boxes[2].classList.add('box2');
    } else {
        boxes[2].classList.remove('box2');
    }
    if (e.getModifierState('NumLock')) {
        boxes[0].classList.add('box2');
    } else {
        boxes[0].classList.remove('box2');
    }
    keys.style.backgroundColor = '#757575';
});
window.addEventListener('keyup', (e) => {
    const keys = document.getElementById(`${e.code}`);
    const shifts = document.querySelectorAll('.shifted');
    const normal = document.querySelectorAll('.normal');
    for (let i = 0; i < shifts.length; i++) {
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            shifts[i].style.display = 'none';
            normal[i].style.display = 'block';
        }
    }
    keys.style.backgroundColor = '#000';
});