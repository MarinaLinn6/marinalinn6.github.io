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

const containers = gsap.utils.toArray("#verticaltime");
console.log(containers)
containers.forEach((container) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            pin: false,
            pinSpacing: false,
            scrub: true,
            markers: false
        }
    });

    tl.to(container, {
        autoAlpha: 1
    }).to(
        container,
        {
            autoAlpha: 0
        },
        0.5
    );
});

