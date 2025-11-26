gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Aguardar o carregamento completo da página
window.addEventListener('load', () => {
    // Inicializar ScrollSmoother

    // Função para verificar se é dispositivo móvel
    function isMobile() {
        return window.innerWidth < 768;
    }

    // Função para verificar se é tablet
    function isTablet() {
        return window.innerWidth >= 768 && window.innerWidth < 1024;
    }

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



    // Verificar se os elementos existem e se NÃO é mobile/tablet
    if (!isMobile() && !isTablet()) {


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
        }

        // Configuração dos Cards (Desktop)
        var cards = document.querySelectorAll(".cards");

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
    } else {
        // Código específico para dispositivos móveis (mobile)
        gsap.set(container, { position: 'relative' });

        secoes.forEach((secao, index) => {
            gsap.set(secao, {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: index // Alterado para empilhar na ordem correta
            });
        });

        let tlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: `+=${secoes.length * 100}%`,
                scrub: 1,
                pin: true,
                markers: false, // Removido markers para limpeza visual
            }
        });

        // Anima cada seção individualmente
        secoes.forEach((secao, index) => {
            if (index > 0) {
                // Move a seção de baixo para cima, cobrindo a anterior
                tlMobile.fromTo(secao,
                    {
                        yPercent: 100
                    },
                    {
                        yPercent: 0,
                        ease: "none"
                    },
                    index - 1 // Sequencia as animações
                );
            }
        });

        // Lógica do Carrossel 3D Manual
        function initCarousel(sliderId, prevBtnId, nextBtnId) {
            const slider = document.querySelector(sliderId);
            const prevBtn = document.querySelector(prevBtnId);
            const nextBtn = document.querySelector(nextBtnId);

            if (slider && prevBtn && nextBtn) {
                const cards = slider.querySelectorAll('.cards');
                if (cards.length > 0) {
                    let currentIndex = 0;
                    const totalCards = cards.length;

                    // Clonar cards para efeito de loop infinito
                    const cloneCount = 2; // Número de clones em cada lado

                    // Clonar últimos cards para o início
                    for (let i = 0; i < cloneCount; i++) {
                        const clone = cards[totalCards - 1 - i].cloneNode(true);
                        clone.classList.add('clone');
                        slider.insertBefore(clone, slider.firstChild);
                    }

                    // Clonar primeiros cards para o final
                    for (let i = 0; i < cloneCount; i++) {
                        const clone = cards[i].cloneNode(true);
                        clone.classList.add('clone');
                        slider.appendChild(clone);
                    }

                    const allCards = slider.querySelectorAll('.cards');

                    // Função de atualização do layout
                    const updateCarousel = (animate = true) => {
                        const cardWidth = allCards[0].offsetWidth;
                        const gap = 20; // gap-5 é 20px
                        const itemWidth = cardWidth + gap;

                        // Calcular offset para centralizar o card atual
                        const activeIndex = currentIndex + cloneCount;

                        // Cálculo da posição central
                        const containerWidth = slider.parentElement.offsetWidth;
                        const centerOffset = (containerWidth - cardWidth) / 2;

                        // Calcular transformação
                        const x = -(activeIndex * itemWidth) + centerOffset;

                        if (animate) {
                            gsap.to(slider, {
                                x: x,
                                duration: 0.5,
                                ease: "power2.out",
                                onUpdate: () => update3DEffect(allCards, slider)
                            });
                        } else {
                            gsap.set(slider, { x: x });
                            update3DEffect(allCards, slider);
                        }

                        // Atualizar visibilidade do texto
                        allCards.forEach((card, index) => {
                            const text = card.querySelector('.texto');
                            if (text) {
                                if (index === activeIndex) {
                                    gsap.to(text, { height: "auto", opacity: 1, duration: 0.5, delay: 0.2 });
                                } else {
                                    gsap.to(text, { height: 0, opacity: 0, duration: 0.3 });
                                }
                            }
                        });
                    };

                    // Efeito 3D (Escala e Opacidade)
                    const update3DEffect = (cards, sliderContainer) => {
                        const center = sliderContainer.parentElement.offsetWidth / 2;
                        const sliderRect = sliderContainer.getBoundingClientRect();
                        const sliderLeft = sliderRect.left;

                        cards.forEach(card => {
                            const rect = card.getBoundingClientRect();
                            const cardCenter = rect.left + rect.width / 2;
                            // Calcular distância relativa ao centro da viewport
                            const dist = Math.abs(window.innerWidth / 2 - cardCenter);

                            // Calcular escala e opacidade baseada na distância do centro
                            let scale = 1 - (dist / window.innerWidth) * 0.4;
                            scale = Math.max(0.85, Math.min(1.05, scale)); // Limitar escala

                            let opacity = 1 - (dist / window.innerWidth) * 0.6;
                            opacity = Math.max(0.4, Math.min(1, opacity)); // Limitar opacidade

                            gsap.set(card, {
                                scale: scale,
                                opacity: opacity,
                                zIndex: Math.round(1000 - dist)
                            });
                        });
                    };

                    let isAnimating = false;

                    // Handlers de Navegação
                    const handleNext = () => {
                        if (isAnimating) return;
                        isAnimating = true;

                        currentIndex++;
                        updateCarousel();
                        // Verificar loop
                        if (currentIndex >= totalCards) {
                            // Esperar animação terminar e resetar
                            setTimeout(() => {
                                currentIndex = 0;
                                updateCarousel(false); // Sem animação para reset
                                isAnimating = false;
                            }, 500);
                        } else {
                            setTimeout(() => {
                                isAnimating = false;
                            }, 500);
                        }
                    };

                    const handlePrev = () => {
                        if (isAnimating) return;
                        isAnimating = true;

                        currentIndex--;
                        updateCarousel();

                        // Verificar loop
                        if (currentIndex < 0) {
                            // Esperar animação terminar e resetar
                            setTimeout(() => {
                                currentIndex = totalCards - 1;
                                updateCarousel(false); // Sem animação para reset
                                isAnimating = false;
                            }, 500);
                        } else {
                            setTimeout(() => {
                                isAnimating = false;
                            }, 500);
                        }
                    };

                    nextBtn.addEventListener('click', handleNext);
                    prevBtn.addEventListener('click', handlePrev);

                    // Configuração inicial
                    // Esperar um momento para o layout estabilizar
                    setTimeout(() => {
                        updateCarousel(false);
                    }, 100);

                    // Lidar com redimensionamento
                    window.addEventListener('resize', () => updateCarousel(false));
                }
            }
        }

        // Inicializar ambos os carrosséis
        initCarousel('#card-slider', '#prev-btn', '#next-btn');
        initCarousel('#card-slider-2', '#prev-btn-2', '#next-btn-2');
        document.querySelector('#btn-ler').addEventListener('click', () => {
            window.scrollTo({ top: 1100, behavior: 'smooth' });
        });
    }

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
let wasMobile = window.innerWidth < 768;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const isNowMobile = window.innerWidth < 768;
        if (wasMobile !== isNowMobile) {
            window.location.reload();
        } else {
            ScrollTrigger.refresh();
        }
    }, 250);
});