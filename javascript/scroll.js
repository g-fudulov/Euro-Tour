const hiddenElements = document.querySelectorAll('.hidden');

const spectator = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach((el) => spectator.observe(el));