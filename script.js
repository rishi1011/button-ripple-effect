const buttons = document.querySelectorAll('button.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        const offsetX = e.offsetX;
        const offsetY = e.offsetY;

        console.log(offsetX, offsetY);

        const circle = document.createElement('span');
        circle.classList.add('circle');

        circle.style.top = offsetY + 'px';
        circle.style.left = offsetX + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});