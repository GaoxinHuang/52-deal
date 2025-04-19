// Flash Sale Countdown Timer
function startCountdown() {
    const timerElements = document.querySelectorAll('.timer span');
    let hours = parseInt(timerElements[0].textContent);
    let minutes = parseInt(timerElements[1].textContent);
    let seconds = parseInt(timerElements[2].textContent);

    const countdownInterval = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
                
                if (hours < 0) {
                    clearInterval(countdownInterval);
                    document.querySelector('.flash-sale .section-header h2').innerHTML += ' <span style="color: red">(Ended)</span>';
                    return;
                }
            }
        }
        
        timerElements[0].textContent = hours.toString().padStart(2, '0');
        timerElements[1].textContent = minutes.toString().padStart(2, '0');
        timerElements[2].textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Product Filtering
function setupProductFilters() {
    const filterTabs = document.querySelectorAll('.filter-tabs .tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Here you would normally filter products based on the selected category
            // For the prototype, we'll just show a message
            console.log(`Filtering by: ${tab.textContent}`);
        });
    });
}

// Shopping Cart Functionality
function setupCartButtons() {
    const addToCartButtons = document.querySelectorAll('.action-btn:nth-child(2)');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            count++;
            cartCount.textContent = count;
            
            // Animation effect
            button.classList.add('added');
            setTimeout(() => {
                button.classList.remove('added');
            }, 1000);
            
            // Show notification
            showNotification('Product added to cart!');
        });
    });
}

// Wishlist Functionality
function setupWishlistButtons() {
    const wishlistButtons = document.querySelectorAll('.action-btn:nth-child(1)');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Toggle heart icon
            const icon = button.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#F44336';
                showNotification('Product added to wishlist!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
                showNotification('Product removed from wishlist!');
            }
        });
    });
}

// Quick View Functionality
function setupQuickViewButtons() {
    const quickViewButtons = document.querySelectorAll('.action-btn:nth-child(3)');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In a real implementation, this would open a modal with product details
            // For the prototype, we'll just log a message
            console.log('Quick view clicked');
            showNotification('Quick view feature will be implemented in the final version.');
        });
    });
}

// Newsletter Subscription
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() !== '') {
                showNotification('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
}

// Notification System
function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
        
        // Add styles
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'var(--primary-color)';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        notification.style.zIndex = '1000';
        notification.style.transition = 'all 0.3s ease';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
    }
    
    // Set message and show notification
    notification.textContent = message;
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
    }, 3000);
}

// Mobile Menu Toggle
function setupMobileMenu() {
    // For a real implementation, this would toggle a mobile menu
    // Since we don't have a mobile menu button in the HTML, this is just a placeholder
    console.log('Mobile menu setup would go here');
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    setupProductFilters();
    setupCartButtons();
    setupWishlistButtons();
    setupQuickViewButtons();
    setupNewsletterForm();
    setupMobileMenu();
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});