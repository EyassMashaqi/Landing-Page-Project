document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('#navbar_list'); 
    const sections = document.querySelectorAll('section');
    const scrollbtn = document.querySelector('#scrollTopBtn');

    
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
        navBar.appendChild(navItem);
    });

    
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

        
        if (window.scrollY > 200) {
            scrollbtn.style.display = 'block';
        } else {
            scrollbtn.style.display = 'none';
        }
    });


    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

    
    scrollbtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
