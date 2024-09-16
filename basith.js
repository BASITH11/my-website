

ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration:2500,
    delay:200 

});
ScrollReveal().reveal('.home-content,#p1,.t1', {origin:'top'});
ScrollReveal().reveal('.pic', {origin:'bottom'});
ScrollReveal().reveal('#p2 span,#p4', {origin:'right'});
ScrollReveal().reveal( {origin:'left'});

let navigation = document.querySelector('.nav');  // Select the first .nav element
let nav_bar = document.getElementsByTagName('nav')[0];  // Access the first <nav> element
let menu = document.querySelector('#t-img');     // Select the first .toggle element

// Add click event listener to menu
menu.addEventListener('click', () => {
    if (nav_bar.style.display === "flex") {
        nav_bar.style.display = "none";  // Hide nav_bar if it's currently visible
    } else {
        nav_bar.style.display = "flex";  // Show nav_bar if it's hidden
    }
});


