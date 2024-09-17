

ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration:2500,
    delay:200 

});
ScrollReveal().reveal('.home-content,#p1,.t1', {origin:'top'});
ScrollReveal().reveal('.pic', {origin:'bottom'});
ScrollReveal().reveal('#p2 span,#p4', {origin:'right'});
ScrollReveal().reveal( '.project-container,#v1,#V2',{origin:'left'});

let nav_bar = document.querySelector('nav');  // Access the first <nav> element
let menu = document.querySelector('#t-img');  // Select the toggle image

// Add click event listener to menu
menu.addEventListener('click', () => {
    if (nav_bar.style.visibility === "visible" || nav_bar.style.visibility === "") {
        nav_bar.style.visibility = "hidden";  // Hide nav_bar but keep space
        nav_bar.style.opacity = "0";  // Make it invisible
    } else {
        nav_bar.style.visibility = "visible";  // Show nav_bar
        nav_bar.style.opacity = "1";  // Fully visible
    }
});

