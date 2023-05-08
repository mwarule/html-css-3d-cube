
const animateCube = () => {
    let button = document.getElementById('animate-button');
    let cube = document.getElementById('cube');
    if (button) {
        let label = 'Animate'
        const innerHTML = button.innerHTML;
        if (innerHTML === 'Animate') {
            label = 'Stop'
            cube.classList.add('animate')
        } else {
            label = 'Animate'
            cube.classList.remove('animate')
        }
        button.innerHTML = label
    }
}