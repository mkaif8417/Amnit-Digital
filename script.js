
//1. Logic to change the color of navabar when scroll dow
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const logoImage = document.getElementById('logoImage'); 
    
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'white'; 
        navbar.style.color = 'black';           
        logoImage.style.filter = 'invert(1)';   
    } else {
        navbar.style.backgroundColor = 'transparent'; 
        navbar.style.color = 'white';                  
        logoImage.style.filter = 'invert(0)';          
    }
});
//End 1



