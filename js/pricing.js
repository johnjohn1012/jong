// Pricing Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const pricingToggle = document.getElementById('pricingToggle');
    const bulkPricing = document.querySelector('.bulk-pricing');

    // Initially hide bulk pricing
    bulkPricing.style.display = 'none';

    // Toggle bulk pricing visibility
    pricingToggle.addEventListener('change', function() {
        if (this.checked) {
            bulkPricing.style.display = 'block';
            bulkPricing.style.animation = 'fadeIn 0.5s ease-out forwards';
        } else {
            bulkPricing.style.display = 'none';
        }
    });

    // Initialize pricing cards with fade-in animation
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    // Trigger initial animation
    setTimeout(() => {
        pricingCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 100);
}); 