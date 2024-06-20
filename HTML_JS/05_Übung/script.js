document.addEventListener('DOMContentLoaded', () => {
    const imagesLeft = ['schere.jpg', 'stein.jpg', 'papier.jpg'];
    const imagesRight = ['schere (1).jpg', 'stein (1).jpg', 'papier (1).jpg'];

    function shuffleImages(images, element) {
        let i = 0;
        const interval = setInterval(() => {
            element.style.backgroundImage = `url('${images[i % images.length]}')`;
            i++;
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            const randomIndex = Math.floor(Math.random() * images.length);
            element.style.backgroundImage = `url('${images[randomIndex]}')`;
        }, 600);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'f') {
            const leftResult = document.querySelector('.leftResult');
            shuffleImages(imagesLeft, leftResult);
        } else if (event.key.toLowerCase() === 'j') {
            const rightResult = document.querySelector('.rightResult');
            shuffleImages(imagesRight, rightResult);
        }
    });
});
