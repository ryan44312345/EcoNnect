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
        smooth: 1,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.5
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
    let container = document.querySelector('#intro-container');



    // Verificar se os elementos existem
    if (!isMobile() && !isTablet()) {


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

                // Set width to final expanded width (500px - 48px padding) to ensure correct height calculation
                gsap.set(texto, { width: 452 });

                gsap.to(this, { width: 500, duration: 1, ease: "power3.out" });
                gsap.to(subtitulo, { y: -10, duration: 1, ease: "power3.out" });
                gsap.to(texto, { height: "auto", opacity: 1, duration: 1, ease: "power3.out" });
            });

            cards[i].addEventListener("mouseleave", function () {
                var subtitulo = this.querySelector(".subtitulos");
                var texto = this.querySelector(".texto");

                // Cancela animações anteriores antes de iniciar novas
                gsap.killTweensOf([this, subtitulo, texto]);

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
                zIndex: index // Alterado para empilhar na ordem correta (0 no fundo, 1 em cima, etc.)
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
                    index - 1 // Sequencia as animações: 0->1, 1->2, etc.
                );
            }
        });

        // Manual 3D Carousel Logic
        function initCarousel(sliderId, prevBtnId, nextBtnId) {
            const slider = document.querySelector(sliderId);
            const prevBtn = document.querySelector(prevBtnId);
            const nextBtn = document.querySelector(nextBtnId);

            if (slider && prevBtn && nextBtn) {
                const cards = slider.querySelectorAll('.cards');
                if (cards.length > 0) {
                    let currentIndex = 0;
                    const totalCards = cards.length;

                    // Clone cards for infinite loop effect
                    // We need enough clones to cover the view
                    const cloneCount = 2; // Number of clones on each side

                    // Clone last few cards to beginning
                    for (let i = 0; i < cloneCount; i++) {
                        const clone = cards[totalCards - 1 - i].cloneNode(true);
                        clone.classList.add('clone');
                        slider.insertBefore(clone, slider.firstChild);
                    }

                    // Clone first few cards to end
                    for (let i = 0; i < cloneCount; i++) {
                        const clone = cards[i].cloneNode(true);
                        clone.classList.add('clone');
                        slider.appendChild(clone);
                    }

                    const allCards = slider.querySelectorAll('.cards');

                    // Update layout function
                    const updateCarousel = (animate = true) => {
                        const cardWidth = allCards[0].offsetWidth;
                        const gap = 20; // gap-5 is 20px
                        const itemWidth = cardWidth + gap;

                        // Calculate offset to center the current card
                        // We start at index + cloneCount because of the prepended clones
                        const activeIndex = currentIndex + cloneCount;

                        // Center position calculation
                        const containerWidth = slider.parentElement.offsetWidth;
                        const centerOffset = (containerWidth - cardWidth) / 2;

                        // Calculate transform
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

                        // Update text visibility
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

                    const update3DEffect = (cards, sliderContainer) => {
                        const center = sliderContainer.parentElement.offsetWidth / 2;
                        const sliderRect = sliderContainer.getBoundingClientRect();
                        const sliderLeft = sliderRect.left;

                        cards.forEach(card => {
                            const rect = card.getBoundingClientRect();
                            const cardCenter = rect.left + rect.width / 2;
                            // Calculate distance relative to the viewport center
                            const dist = Math.abs(window.innerWidth / 2 - cardCenter);

                            // Calculate scale and opacity based on distance from center
                            let scale = 1 - (dist / window.innerWidth) * 0.4;
                            scale = Math.max(0.85, Math.min(1.05, scale)); // Clamp scale

                            let opacity = 1 - (dist / window.innerWidth) * 0.6;
                            opacity = Math.max(0.4, Math.min(1, opacity)); // Clamp opacity

                            gsap.set(card, {
                                scale: scale,
                                opacity: opacity,
                                zIndex: Math.round(1000 - dist)
                            });
                        });
                    };

                    let isAnimating = false;

                    // Navigation handlers
                    const handleNext = () => {
                        if (isAnimating) return;
                        isAnimating = true;

                        currentIndex++;
                        updateCarousel();
                        // Check for loop
                        if (currentIndex >= totalCards) {
                            // Wait for animation to finish then reset
                            setTimeout(() => {
                                currentIndex = 0;
                                updateCarousel(false); // No animation for reset
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

                        // Check for loop
                        if (currentIndex < 0) {
                            // Wait for animation to finish then reset
                            setTimeout(() => {
                                currentIndex = totalCards - 1;
                                updateCarousel(false); // No animation for reset
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

                    // Initial setup
                    // Wait a moment for layout to stabilize
                    setTimeout(() => {
                        updateCarousel(false);
                    }, 100);

                    // Handle resize
                    window.addEventListener('resize', () => updateCarousel(false));
                }
            }
        }

        // Initialize both carousels
        initCarousel('#card-slider', '#prev-btn', '#next-btn');
        initCarousel('#card-slider-2', '#prev-btn-2', '#next-btn-2');
        document.querySelector('#btn-ler').addEventListener('click', () => {
            window.scrollTo({ top: 1100, behavior: 'smooth' });
        });
    }

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