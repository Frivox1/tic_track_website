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
    const downloadBtn = document.querySelector(".btn[download]");
    const modal = document.getElementById("download-modal");
    const closeModal = document.querySelector(".close");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.add("show");
            
            setTimeout(() => {
                window.location.href = downloadBtn.href;
            }, 1000);
        });
    }

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
