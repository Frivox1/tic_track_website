// Sélectionne tous les boutons de la FAQ
const faqToggles = document.querySelectorAll('.faq-toggle');

// Ajoute un événement de clic à chaque bouton
faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const content = this.nextElementSibling; // Le contenu qui suit le bouton
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Change l'attribut aria-expanded pour indiquer si la section est ouverte ou fermée
        this.setAttribute('aria-expanded', !isExpanded);

        // Anime l'ouverture et la fermeture du contenu
        if (isExpanded) {
            content.style.maxHeight = 0; // Ferme le contenu
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'; // Ouvre le contenu
        }
    });
});