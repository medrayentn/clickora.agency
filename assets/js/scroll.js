/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});


// Services Section
sr.reveal('#services .title', {});
sr.reveal('#services .content', { interval: 200 });

// Projects Section
sr.reveal('#projects .title', {});
sr.reveal('#projects .filter-buttons', { delay: 100 });
sr.reveal('#projects .content', { interval: 100 });

// Packages Section
sr.reveal('#packages .packages-title', {});
sr.reveal('#packages .packages-subtitle', { delay: 100 });
sr.reveal('#packages .package-category', { interval: 200 });

// Our Team Section
sr.reveal('#ourTeam .title', {});
sr.reveal('#ourTeam .profile', { interval: 200 });

// Newsletter
sr.reveal('.newsletter-title', {});
sr.reveal('.newsletter-form', { delay: 200 });

// Contact Section
sr.reveal('#contact .contact-title', {});
sr.reveal('#contact .content', { delay: 200 });