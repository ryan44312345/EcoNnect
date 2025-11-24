gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Aguardar o carregamento completo da página
window.addEventListener('load', () => {
    // Inicializar ScrollSmoother

    function isMobile() {
        return window.innerWidth < 768;
    }

    // Função para verificar se é tablet
    function isTablet() {
        return window.innerWidth >= 768 && window.innerWidth < 1024;
    }

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

    gsap.from(split.lines, {
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
    });

    gsap.from(split2.chars, {
        y: 150,
        autoAlpha: 0,
        stagger: 0.08,
    });

    gsap.from(split3.lines, {
        y: 150,
        autoAlpha: 0,
        stagger: 0.05,
    });

    // Selecionar elementos para scroll horizontal
    let secoes = document.querySelectorAll('.secao');
    let container = document.querySelector('.container');



    // Verificar se os elementos existem
    if (!isMobile()) {


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
        }

        var cards = document.querySelectorAll(".cards");

        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseenter", function () {
                var subtitulo = this.querySelector(".subtitulos");
                var texto = this.querySelector(".texto");

                // Cancela animações anteriores antes de iniciar novas
                gsap.killTweensOf([this, subtitulo, texto]);

                gsap.to(this, 1, { width: 540, ease: "expo.inOut" });
                gsap.to(subtitulo, { y: -150, duration: 1, ease: "expo.inOut" });
                gsap.to(texto, { opacity: 1, duration: 1.75, ease: "expo.inOut" });
            })

            cards[i].addEventListener("mouseleave", function () {
                var subtitulo = this.querySelector(".subtitulos");
                var texto = this.querySelector(".texto");

                // Cancela animações anteriores antes de iniciar novas
                gsap.killTweensOf([this, subtitulo, texto]);

                gsap.to(this, 1, { width: 400, ease: "expo.inOut" });
                gsap.to(subtitulo, { y: 0, duration: 1, ease: "expo.inOut" });
                gsap.to(texto, { opacity: 0, duration: 0.75 });
            })
        }

        // colocar uma class para selecionar os textos do footer
        // para mover os icones coloque uma class diferente do texto e anime

        // Criar splits para todos os textos do footer
        var footer = document.querySelectorAll(".footer-text");

        let footerSplits = SplitText.create(footer, {
            type: "chars, words, lines",
            wordClass: "word++",
        });

        // Animar as letras quando a seção entrar na viewport
        gsap.from(footerSplits.chars, {
            scrollTrigger: {
                trigger: '.section-footer', // ou use um ID específico para a seção
                start: 'top 80%', // Inicia quando o topo da seção está a 80% da viewport
                toggleActions: 'play none none reverse', // play ao entrar, reverse ao sair
                markers: true,
            },
            y: 50,
            autoAlpha: 0,
            rotation: -15,
            stagger: {
                amount: 0.8, // Distribui a animação ao longo de 0.8s
                from: "start"
            },
            duration: 0.8,
            ease: "back.out(1.7)"
        });

        // Animar os SVGs dos ícones sociais
        gsap.from('.bg-black svg', {
            scrollTrigger: {
                trigger: '.bg-black',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            rotation: 360,
            autoAlpha: 0,
            stagger: 0.15,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            delay: 0.5 // Começa depois das letras
        });
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