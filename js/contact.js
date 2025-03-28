// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    // Form validation
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form elements
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Reset previous validation states
        [name, email, subject, message].forEach(field => {
            field.classList.remove('is-invalid');
            field.classList.remove('is-valid');
        });

        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.add('is-valid');
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.add('is-valid');
        }

        // Validate subject
        if (!subject.value.trim()) {
            subject.classList.add('is-invalid');
            isValid = false;
        } else {
            subject.classList.add('is-valid');
        }

        // Validate message
        if (!message.value.trim()) {
            message.classList.add('is-invalid');
            isValid = false;
        } else {
            message.classList.add('is-valid');
        }

        // If form is valid, show success message
        if (isValid) {
            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            
            // Remove any existing success message
            const existingMessage = contactForm.querySelector('.alert');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            contactForm.appendChild(successMessage);
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    });

    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                this.classList.remove('is-invalid');
            }
        });
    });

    // Initialize info cards with fade-in animation
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    // Trigger initial animation
    setTimeout(() => {
        infoCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 100);
}); 