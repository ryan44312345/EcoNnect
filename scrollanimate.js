gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// Initialize ScrollSmoother
ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
    normalizeScroll: true
})

let secoes = document.querySelectorAll('.secao')
let container = document.querySelector('.container')

gsap.to(secoes, {
    xPercent: -100 * (secoes.length - 1),
    ease: "none",
    duration: 1,
    scrollTrigger: {
        trigger: container,
        pin: true,
        end: "+=3500",
        scrub: true,
    }
})