function runTypingEffect() {
    const text = 'I am Rui Marques';
    const typingElement = document.getElementById('typingText');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => { typingElement.textContent += text.charAt(i) }, delay * i);
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);