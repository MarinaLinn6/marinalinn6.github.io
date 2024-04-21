const smoothScrollLinks = document.querySelectorAll('a');
 
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });
});

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("moon");
    image.style.transform = "rotate(" + window.pageYOffset / 8 + "deg)";
}