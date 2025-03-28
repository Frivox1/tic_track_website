// Sélectionne tous les boutons de la FAQ
const faqToggles = document.querySelectorAll('.faq-toggle');

// Ajoute un événement de clic à chaque bouton
faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        this.setAttribute('aria-expanded', !isExpanded);

        if (isExpanded) {
            content.style.maxHeight = 0;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const downloadBtns = document.querySelectorAll(".install-buttons .btn");
    const modal = document.getElementById("download-modal");
    const closeModal = document.querySelector(".close");

    downloadBtns.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.add("show");

            const downloadLink = this.href;

            setTimeout(() => {
                window.location.href = downloadLink;
            }, 1000);
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.classList.remove("show");
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hero");

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.animationPlayState = "running";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const screenshots = document.querySelectorAll(".feature-item");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // On arrête d'observer après l'animation
            }
        });
    }, {
        threshold: 0.6
    });

    screenshots.forEach(screenshot => {
        observer.observe(screenshot);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const screenshots = document.querySelectorAll(".screenshot-item");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.6
    });

    screenshots.forEach(screenshot => {
        observer.observe(screenshot);
    });
});
