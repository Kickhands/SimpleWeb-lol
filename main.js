// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });
    });
});

// Highlight active section in the navbar when scrolling
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - section.clientHeight / 3 &&
            scrollPosition < section.offsetTop + section.clientHeight) {
            let currentId = section.getAttribute('id');
            removeActiveClasses();
            addActiveClass(currentId);
        }
    });
});

function removeActiveClasses() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
}

function addActiveClass(id) {
    let selector = `nav ul li a[href="#${id}"]`;
    document.querySelector(selector).classList.add('active');
}
