gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Aguardar o carregamento completo da página
window.addEventListener('load', () => {
    // Inicializar ScrollSmoother
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 1
    });

    // Selecionar elementos para scroll horizontal
    let secoes = document.querySelectorAll('.secao');
    let container = document.querySelector('.container');

    // Verificar se os elementos existem
    if (secoes.length > 0 && container) {
        // Timeline para animações sequenciais
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "+=4000",
                scrub: true,
                pin: true,
                markers: true,
            }
        });

        // estado inicial das seções (se quiser animar a partir de um layout específico)
        tl.set(secoes[0], {xPercent: -20})
        tl.set(secoes[1], {xPercent: -60, })
        // movimento geral horizontal (pode ajustar depois se quiser)
        tl.to(secoes, { xPercent: -100 * (secoes.length - 1), ease: "none"}, 0)

        // agora as transições entre as seções

        // Animação 1: Encolher a segunda seção

        // Animação 2: Expandir a primeira seção

        // Animação 3: Voltar a segunda seção ao normal
    }

    // Refresh do ScrollTrigger após inicialização
    ScrollTrigger.refresh();
});

// Refresh ao redimensionar a janela
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});