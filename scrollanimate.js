gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

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

    let split = SplitText.create('.subtitle-educacao', {
        type: "chars, words, lines",
        wordClass: "word++",
    });

    let split2 = SplitText.create('.econnect', {
        type: "chars, words, lines",
        wordClass: "word++",
    });

    let split3 = SplitText.create('.inspirando', {
        type: "chars, words, lines",
        wordClass: "word++",
    });

    gsap.from(split.lines , {
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
    });

    gsap.from(split2.chars , {
        y: 150,
        autoAlpha: 0,
        stagger: 0.08,
    });

    gsap.from(split3.lines , {
        y: 150,
        autoAlpha: 0,
        stagger: 0.05,
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

        tl.set(secoes[2], { 
            clipPath: "polygon(90% 0%, 100% 0%, 100% 100%, 90% 100%)"
        });
        tl.set(secoes[1], { 
            clipPath: "polygon(90% 0%, 100% 0%, 100% 100%, 90% 100%)",
        });
        // estado inicial das seções (se quiser animar a partir de um layout específico)
        // movimento geral horizontal (pode ajustar depois se quiser)
        tl.to(secoes[1], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
        }, 0)
        .to(secoes[2], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
        }, 0.5);

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


var cards = document.querySelectorAll(".cards");

for(var i = 0; i < cards.length; i++){
  cards[i].addEventListener("mouseenter", function(){
    gsap.to(this, 1, {width: 540, ease: "expo.inOut"});
  })
  cards[i].addEventListener("mouseleave", function(){
    gsap.to(this, 1, {width: 400, ease: "expo.inOut"});
  })
}