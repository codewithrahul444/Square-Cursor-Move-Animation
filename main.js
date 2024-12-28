document.addEventListener("mousemove", (e) => {
    createSquares(e);
});

function createSquares(event) {
    const squareCount = 5;
    const squareSize = 10;
    const squareDelay = 100;

    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        const size = squareSize + i * 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        square.style.left = `${event.clientX - size / 2}px`;
        square.style.top = `${event.clientY - size / 2}px`;

        document.body.appendChild(square);

        setTimeout(() => {
            square.remove();
        }, 2000);
    }
}