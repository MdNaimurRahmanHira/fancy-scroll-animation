$(document).ready(function () {
    $(".owl-carousel.banner").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 6500


    });
    $(".owl-carousel.testimonial-wrapper").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 4,
        stagePadding: 70,
        margin: 20
        // autoplay: true,
        // autoplayTimeout: 3000


    });


    gsap.registerPlugin(ScrollTrigger);
    const secureStorage = document.getElementById('secure-storage')
    const canvas = document.getElementById("scroll-animation");
    const context = canvas.getContext("2d");

    // canvas.width = 1920;
    // canvas.height = 770;
    context.canvas.width = window.innerWidth;
    context.canvas.height = 800;

    const frameCount = 104;
    const currentFrame = index => (
        `animation/scene/${index.toString().padStart(5, '0')}.png`
    );

    const images = []
    const airpods = {
        frame: 1
    };

    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.classList.add('responsive');
        //context.drawImage(img, 10, 10, 200, 180);
        img.src = currentFrame(i);

        images.push(img);
        console.log(img)
    }


    gsap.to(airpods, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",

        scrollTrigger: {
            trigger: canvas,
            scrub: 1,
            pin: false,
            markers: false,
            start: `top ${window.innerHeight}`,
        },
        onUpdate: render
    });

    // function isElementVisible(el) {
    //     var scroll = window.scrollY || window.pageYOffset
    //     var boundsTop = el.getBoundingClientRect().top + scroll
    //     var viewport = {
    //         top: scroll,
    //         bottom: scroll + window.innerHeight,
    //     }
    //     var bounds = {
    //         top: boundsTop,
    //         bottom: boundsTop + el.clientHeight,
    //     }
    //     return (
    //         (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    //         (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    //     )
    // };
    // if(isElementVisible(canvas)){
    //     console.log(isElementVisible(secureStorage));
    // }
    // window.onscroll = function () {
    //     // console.log(isElementVisible(canvas));
    //     // if(isElementVisible(canvas)){
            
    //     // }
    //     render(currentFrame)

    // }

    images[1].onload = render;

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[airpods.frame], 0, 0, canvas.width, canvas.height);


    }



});