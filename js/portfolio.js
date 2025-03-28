// Portfolio Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Add animation
                    item.style.animation = 'fadeIn 0.5s ease-out forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Initialize portfolio items with fade-in animation
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
    });

    // Trigger initial animation
    setTimeout(() => {
        portfolioItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }, 100);
}); 