document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mainNav = document.getElementById('main-nav');
    const menuIcon = document.querySelector('.menu-icon');

    menuBtn.addEventListener('change', function() {
        if (this.checked) {
            mainNav.classList.add('open');
            menuIcon.classList.add('open');
            document.body.style.overflow = 'hidden';
        } else {
            mainNav.classList.remove('open');
            menuIcon.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    const navLinks = mainNav.querySelectorAll('li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.checked = false;
            menuBtn.dispatchEvent(new Event('change'));
        });
    });

    document.addEventListener('click', (event) => {
        if (menuBtn.checked && !mainNav.contains(event.target) && !menuIcon.contains(event.target) && event.target !== menuBtn) {
            menuBtn.checked = false;
            menuBtn.dispatchEvent(new Event('change'));
        }
    });
});
