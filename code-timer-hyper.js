<script>
document.addEventListener('DOMContentLoaded', function () {
    // Date et heure d'expiration - format 'AAAA-MM-JJ HH:MM'
    const expirationDate = '2024-11-10';
    const expirationTime = '23:59';
    
    // Convertir la date et l'heure d'expiration en timestamp
    const expirationDateTime = new Date(`${expirationDate}T${expirationTime}:00`).getTime();

    // Sélectionner les sections
    const beforeExpirationSection = document.querySelector('.before-expiration');
    const afterExpirationSection = document.querySelector('.after-expiration');

    // Fonction de mise à jour de l'affichage
    function updateDisplay() {
        const currentDateTime = new Date().getTime();

        if (currentDateTime < expirationDateTime) {
            // Afficher la section avant expiration et cacher l'autre
            if (beforeExpirationSection) beforeExpirationSection.style.display = 'block';
            if (afterExpirationSection) afterExpirationSection.style.display = 'none';
        } else {
            // Afficher la section après expiration et cacher l'autre
            if (beforeExpirationSection) beforeExpirationSection.style.display = 'none';
            if (afterExpirationSection) afterExpirationSection.style.display = 'block';
        }
    }

    // Exécuter immédiatement la fonction de mise à jour
    updateDisplay();

    // Vérifier l'heure toutes les secondes
    setInterval(updateDisplay, 1000); // Vérification toutes les 1000 ms = 1 seconde
});
</script>
