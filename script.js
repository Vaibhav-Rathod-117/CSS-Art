function showMessage() {
    let messageContainer = document.querySelector('.message-container');
    let img = document.querySelector('.person-image');

    if (messageContainer.style.display === 'block') {
        messageContainer.style.display = 'none'; // Hide message if already visible
    } else {
        messageContainer.style.display = 'block'; // Show message
        img.classList.add('show'); // Ensure image is always visible
    }
}

function showResponse(answer) {
    let responseDiv = document.querySelector('.response');

    if (answer === 'yes') {
        responseDiv.innerHTML = "Yay! I love you too! 💖🥰";
    } else {
        responseDiv.innerHTML = "Oh no! 😢 But I still love you!";
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.querySelector('.heart-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);
