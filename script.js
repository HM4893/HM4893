// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert with fade effect
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.textContent = 'Merci pour votre message ! Je vous répondrai rapidement.';
    form.parentNode.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => alertBox.remove(), 500);
    }, 3000);

    form.reset();
});

// Alert styling
document.body.insertAdjacentHTML(
    'beforeend',
    `<style>
        .alert {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--accent-color);
            color: black;
            padding: 15px 20px;
            border-radius: 5px;
            font-size: 1rem;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    </style>`
);