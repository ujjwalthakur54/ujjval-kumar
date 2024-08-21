document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart');
    const messageDiv = document.getElementById('message');
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Handle thumbnail click to change main image
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (event) => {
            const newSrc = event.target.src.replace('thumbnail', 'main');
            mainImage.src = newSrc;
        });
    });

    // Handle add to cart button click
    addToCartButton.addEventListener('click', () => {
        messageDiv.textContent = 'Product added to cart!';
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 3000);
    });
});
