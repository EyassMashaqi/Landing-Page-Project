document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('#navbar_list');
    const sections = document.querySelectorAll('section');
    const scrollbtn = document.querySelector('#scrollTopBtn');

    // Build the navigation bar dynamically
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
        navBar.appendChild(navItem);
    });

    // Highlight active section and navigation link
    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const navItem = document.querySelector(`a[href="#${section.id}"]`);
            if (rect.top >= 0 && rect.top <= 300) {
                section.classList.add('active');
                navItem.classList.add('active');
            } else {
                section.classList.remove('active');
                navItem.classList.remove('active');
            }
        });

        // Toggle scroll-to-top button visibility
        scrollbtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    // Smooth scrolling for navigation links
    navBar.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

    // Scroll to top functionality
    scrollbtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
