gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Aguardar o carregamento completo da página
window.addEventListener('load', () => {
    // Configuração do ScrollSmoother para rolagem suave
    window.smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.5
    });

    // Criar divisões de texto para animação (SplitText)
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

    // Animação inicial dos textos divididos
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
    let container = document.querySelector('#intro-container');

    // --- LÓGICA DESKTOP (>= 1024px) ---
    if (secoes.length > 0 && container) {
        // Timeline para animações sequenciais de scroll horizontal
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

        // Configuração inicial dos clip-paths para transição
        tl.set(secoes[2], {
            clipPath: "polygon(90% 0%, 100% 0%, 100% 100%, 90% 100%)"
        });
        tl.set(secoes[1], {
            clipPath: "polygon(90% 0%, 100% 0%, 100% 100%, 90% 100%)",
        });

        // Animação de transição entre as seções (efeito de cortina)
        tl.to(secoes[1], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
        }, 0)
            .to(secoes[2], {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "none",
            }, 0.5);

        // Animação do conteúdo da Intro (Fade In/Up)
        // Apenas Slide 1 - Animação com ScrollTrigger igual à Pegada Ecológica
        const tlIntro = gsap.timeline({
            scrollTrigger: {
                trigger: secoes[0],
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tlIntro.fromTo(secoes[0].querySelector(".animate-intro-title"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(secoes[0].querySelectorAll(".animate-intro-text"),
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(secoes[0].querySelector(".animate-intro-img"),
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
                "-=0.4"
            );
    }

    // Configuração dos Cards (Desktop)
    var cards = document.querySelectorAll(".cards");

    // Habilitar interação dos cards (hover funciona sempre)
    cards.forEach(card => {
        card.style.pointerEvents = 'auto';
    });

    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseenter", function () {
            var subtitulo = this.querySelector(".subtitulos");
            var texto = this.querySelector(".texto");

            // Cancela animações anteriores antes de iniciar novas
            gsap.killTweensOf([this, subtitulo, texto]);

            // Define a largura final (500px - 48px padding) para cálculo correto da altura
            gsap.set(texto, { width: 452 });

            // Animação de expansão do card
            gsap.to(this, { width: 500, duration: 1, ease: "power3.out" });
            gsap.to(subtitulo, { y: -10, duration: 1, ease: "power3.out" });
            gsap.to(texto, { height: "auto", opacity: 1, duration: 1, ease: "power3.out" });
        });

        cards[i].addEventListener("mouseleave", function () {
            var subtitulo = this.querySelector(".subtitulos");
            var texto = this.querySelector(".texto");

            // Cancela animações anteriores antes de iniciar novas
            gsap.killTweensOf([this, subtitulo, texto]);

            // Retorna o card ao estado original
            gsap.to(this, { width: 400, duration: 1, ease: "power3.out" });
            gsap.to(subtitulo, { y: 0, duration: 1, ease: "power3.out" });
            gsap.to(texto, {
                height: 0,
                opacity: 0,
                duration: 0.75,
                ease: "power3.out",
                onComplete: function () {
                    gsap.set(texto, { width: "auto" });
                }
            });
        });
    }

    // Animações do Footer
    var footer = document.querySelectorAll(".footer-text");

    let footerSplits = SplitText.create(footer, {
        type: "chars, words, lines",
        wordClass: "word++",
    });

    // Animar as letras quando a seção entrar na viewport
    gsap.from(footerSplits.chars, {
        scrollTrigger: {
            trigger: '.section-footer',
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
    // --- FIM LÓGICA DESKTOP ---

    // --- CÓDIGO COMPARTILHADO ---

    // Animação para a Seção Pegada Ecológica
    const tlFootprint = gsap.timeline({
        scrollTrigger: {
            trigger: "#pegada-ecologica",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    tlFootprint.fromTo(".animate-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
        .fromTo(".animate-text",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
            "-=0.4"
        )
        .fromTo(".animate-graph",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.4"
        )
        .to("#earth-bar", { width: "85%", duration: 2, ease: "power2.out" }, "-=0.4");

    // Contador numérico animado
    let earthObj = { value: 0 };
    gsap.to(earthObj, {
        value: 1.7,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#pegada-ecologica",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        onUpdate: function () {
            document.getElementById("earth-counter").innerText = earthObj.value.toFixed(1).replace('.', ',');
        }
    });

    // Animação para a Seção Motor do Excesso
    const tlMotor = gsap.timeline({
        scrollTrigger: {
            trigger: "#motor-excesso",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    tlMotor.fromTo(".animate-motor-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
        .fromTo(".animate-motor-text",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.4"
        );

    // Animação de Marquee Infinito (Esteira)
    const marqueeTween = gsap.to(".marquee-content", {
        xPercent: -50, // Move metade da largura (já que duplicamos os itens)
        ease: "none",
        duration: 30, // Mais lento para melhor legibilidade
        repeat: -1
    });

    // Pausar Marquee ao passar o mouse
    const marqueeWrapper = document.querySelector(".marquee-wrapper");
    if (marqueeWrapper) {
        marqueeWrapper.addEventListener("mouseenter", () => marqueeTween.pause());
        marqueeWrapper.addEventListener("mouseleave", () => marqueeTween.play());
    }

    // Animação para a Seção Quiz CTA
    gsap.from("#quiz-cta .max-w-4xl", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#quiz-cta",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Animação dos Blobs (Fundo Dinâmico)
    gsap.to("#blob1", {
        x: "30%",
        y: "20%",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to("#blob2", {
        x: "-20%",
        y: "-30%",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Animação para a Seção Nosso Impacto
    const tlImpact = gsap.timeline({
        scrollTrigger: {
            trigger: "#nosso-impacto",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    tlImpact.fromTo(".animate-impact-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
        .fromTo(".animate-impact-text",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.4"
        )
        .fromTo(".impact-card",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
            "-=0.4"
        );

    // Animação dos Contadores
    gsap.utils.toArray(".counter").forEach(counter => {
        const target = +counter.getAttribute("data-target");
        gsap.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: "#nosso-impacto",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Refresh do ScrollTrigger após inicialização
    ScrollTrigger.refresh();
});

// Refresh ao redimensionar a janela e recarregar se mudar de breakpoint (mobile/desktop)
let resizeTimer;
let wasDesktop = window.innerWidth >= 1024;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const isNowDesktop = window.innerWidth >= 1024;
        if (wasDesktop !== isNowDesktop) {
            window.location.reload();
        } else {
            ScrollTrigger.refresh();
        }
    }, 250);
});
