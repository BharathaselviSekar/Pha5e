document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    const logo = document.querySelector(".spinner"); 
    const heroText = document.querySelectorAll(".hero-text h1 span");
    const images = document.querySelectorAll(".bg-img");

    // GSAP Timeline for Loader
    const tl = gsap.timeline();

    tl.to(logo, {
        scale: 1.2,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
    })
    .to(logo, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
    })
    .to(loader, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => loader.style.display = "none"
    })
    .from(heroText, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
    })
    .from(images, {
        opacity: 0,
        scale: 1.2,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out"
    }, "-=1");

    // Mouse parallax effect
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (clientX - window.innerWidth / 2) * 0.05;
        const y = (clientY - window.innerHeight / 2) * 0.05;

        gsap.to(".hero-text", {
            x: x * 0.5,
            y: y * 0.5,
            duration: 1,
            ease: "power2.out"
        });

        images.forEach((img, index) => {
            const intensity = 1 + (index * 0.2);
            gsap.to(img, {
                x: x * intensity,
                y: y * intensity,
                duration: 1,
                ease: "power2.out"
            });
        });
    });
});
