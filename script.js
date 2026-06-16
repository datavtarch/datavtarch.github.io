// Simple profile script
console.log('Welcome to VTARCH Profile!');

// Add some interactivity
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-btn');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});