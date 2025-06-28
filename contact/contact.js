 document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');
            
            // Form validation
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Reset error states
                const inputGroups = document.querySelectorAll('.input-group');
                inputGroups.forEach(group => {
                    group.classList.remove('invalid');
                });
                
                // Validate name
                const nameInput = document.getElementById('name');
                if (!nameInput.value.trim()) {
                    nameInput.parentElement.classList.add('invalid');
                    isValid = false;
                }
                
                // Validate email
                const emailInput = document.getElementById('email');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    emailInput.parentElement.classList.add('invalid');
                    isValid = false;
                }
                
                // Validate subject
                const subjectSelect = document.getElementById('subject');
                if (!subjectSelect.value) {
                    subjectSelect.parentElement.classList.add('invalid');
                    isValid = false;
                }
                
                // Validate message
                const messageTextarea = document.getElementById('message');
                if (!messageTextarea.value.trim()) {
                    messageTextarea.parentElement.classList.add('invalid');
                    isValid = false;
                }
                
                if (isValid) {
                    // In a real implementation, you would submit to Web3Forms here
                    // For demo purposes, we'll just show the success message
                    
                    // Show success message
                    successMessage.style.display = 'block';
                    
                    // Reset form after 3 seconds
                    setTimeout(() => {
                        form.reset();
                        successMessage.style.display = 'none';
                    }, 5000);
                    
                    // Actual form submission to Web3Forms
                    // Uncomment this in production with your access key
                    /*
                    const formData = new FormData(form);
                    fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            successMessage.style.display = 'block';
                            form.reset();
                        }
                    })
                    .catch(error => console.error('Error:', error));
                    */
                }
            });
            
            // Real-time validation
            const inputs = document.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('input', function() {
                    if (this.checkValidity()) {
                        this.parentElement.classList.remove('invalid');
                    }
                });
            });
        });