gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// ============================
// CONSTANTES E CONFIGURAÇÕES
// ============================
const ANIMATION_CONFIG = {
    scrollStart: "top 75%",
    scrollStartQuiz: "top 80%",
    toggleActions: "play none none reverse",
    titleDuration: 0.8,
    textDuration: 0.8,
    staggerDelay: 0.2,
    ease: "power3.out",
    overlap: "-=0.4"
};

const CAROUSEL_CONFIG = {
    cloneCount: 1, // OTIMIZADO: reduzido de 2 para 1 (menos elementos DOM)
    gap: 20,
    animationDuration: 0.7, // Aumentado para animação mais fluída
    textShowDelay: 0.15,
    textHideDuration: 0.25,
    initDelay: 100,
    resetDelay: 600, // Ajustado para acomodar a nova duração
    scale: { min: 0.85, max: 1.05, factor: 0.4 },
    opacity: { min: 0.4, max: 1, factor: 0.6 },
    ease: "power2.inOut" // Easing mais suave
};

const MOBILE_BREAKPOINT = 1024;
const RESIZE_DEBOUNCE = 250;

// ============================
// FUNÇÕES AUXILIARES
// ============================

/**
 * Cria uma timeline de animação de seção padrão
 */
const createSectionTimeline = (trigger, titleSelector, textSelector, additionalAnimations = null) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger,
            start: ANIMATION_CONFIG.scrollStart,
            toggleActions: ANIMATION_CONFIG.toggleActions
        }
    });

    timeline.fromTo(titleSelector,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: ANIMATION_CONFIG.titleDuration, ease: ANIMATION_CONFIG.ease }
    ).fromTo(textSelector,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: ANIMATION_CONFIG.textDuration, ease: ANIMATION_CONFIG.ease },
        ANIMATION_CONFIG.overlap
    );

    if (additionalAnimations) {
        additionalAnimations(timeline);
    }

    return timeline;
};

/**
 * Cria divisões de texto para animação
 */
const createTextSplits = () => {
    const configs = [
        { selector: '.subtitle-educacao', type: 'lines', y: 100, stagger: 0.05 },
        { selector: '.econnect', type: 'words', y: 150, stagger: 0.05 }, // OTIMIZADO: words ao invés de chars
        { selector: '.inspirando', type: 'lines', y: 150, stagger: 0.05 }
    ];

    return configs.map(({ selector, type, y, stagger }) => {
        const element = document.querySelector(selector);
        if (!element) return null;

        const split = SplitText.create(selector, {
            type: "words, lines", // OTIMIZADO: removido 'chars' para reduzir DOM
            wordClass: "word++"
        });

        gsap.from(split[type], {
            y,
            autoAlpha: 0,
            stagger,
            ease: "power2.out" // Ease mais leve
        });

        return split;
    }).filter(Boolean); // Remove nulls
};

/**
 * Configura a animação mobile das seções
 */
const setupMobileSections = (container, secoes) => {
    gsap.set(container, { position: 'relative' });

    secoes.forEach((secao, index) => {
        gsap.set(secao, {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: index
        });
    });

    const tlMobile = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${secoes.length * 100}%`,
            scrub: 1,
            pin: true,
            markers: false
        }
    });

    secoes.forEach((secao, index) => {
        if (index > 0) {
            tlMobile.fromTo(secao,
                { yPercent: 100 },
                { yPercent: 0, ease: "none" },
                index - 1
            );
        }

        if (index === 0) {
            animateFirstSection(secao);
        }
    });
};

/**
 * Anima a primeira seção
 */
const animateFirstSection = (secao) => {
    const tlIntro = gsap.timeline({
        scrollTrigger: {
            trigger: secao,
            start: ANIMATION_CONFIG.scrollStart,
            toggleActions: ANIMATION_CONFIG.toggleActions
        }
    });

    tlIntro.fromTo(secao.querySelector(".animate-intro-title"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: ANIMATION_CONFIG.titleDuration, ease: ANIMATION_CONFIG.ease }
    ).fromTo(secao.querySelectorAll(".animate-intro-text"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: ANIMATION_CONFIG.textDuration, stagger: ANIMATION_CONFIG.staggerDelay, ease: ANIMATION_CONFIG.ease },
        ANIMATION_CONFIG.overlap
    ).fromTo(secao.querySelector(".animate-intro-img"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: ANIMATION_CONFIG.textDuration, ease: ANIMATION_CONFIG.ease },
        ANIMATION_CONFIG.overlap
    );
};

/**
 * Calcula escala e opacidade baseado na distância
 */
const calculateEffectValues = (dist, windowWidth) => {
    const scale = Math.max(
        CAROUSEL_CONFIG.scale.min,
        Math.min(CAROUSEL_CONFIG.scale.max, 1 - (dist / windowWidth) * CAROUSEL_CONFIG.scale.factor)
    );

    const opacity = Math.max(
        CAROUSEL_CONFIG.opacity.min,
        Math.min(CAROUSEL_CONFIG.opacity.max, 1 - (dist / windowWidth) * CAROUSEL_CONFIG.opacity.factor)
    );

    return { scale, opacity };
};

// Cache para requestAnimationFrame
let rafId3D = null;

/**
 * Aplica efeito 3D nos cards (OTIMIZADO com RAF e GPU acceleration)
 * @param {NodeList} cards - Lista de cards
 * @param {Element} sliderContainer - Container do slider
 * @param {boolean} animate - Se deve animar ou setar instantaneamente
 * @param {number|null} targetX - Posição X final do slider (para calcular posições futuras)
 */
const apply3DEffect = (cards, sliderContainer, animate = true, targetX = null) => {
    // Cancelar frame anterior se ainda pendente
    if (rafId3D) {
        cancelAnimationFrame(rafId3D);
    }

    rafId3D = requestAnimationFrame(() => {
        const centerX = window.innerWidth / 2;
        const sliderRect = sliderContainer.getBoundingClientRect();

        // Se temos um targetX, calcular o offset de deslocamento
        const currentX = sliderRect.left;
        const deltaX = targetX !== null ? (targetX - gsap.getProperty(sliderContainer, "x")) : 0;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Calcular onde o card VAI estar (posição atual + deslocamento)
            const futureCardCenter = rect.left + rect.width / 2 + deltaX;
            const dist = Math.abs(centerX - futureCardCenter);

            const { scale, opacity } = calculateEffectValues(dist, window.innerWidth);

            if (animate) {
                // Animação suave para scale e opacity
                gsap.to(card, {
                    scale,
                    opacity,
                    duration: CAROUSEL_CONFIG.animationDuration * 0.8,
                    ease: CAROUSEL_CONFIG.ease,
                    zIndex: Math.round(1000 - dist),
                    force3D: true,
                    overwrite: 'auto'
                });
            } else {
                // Set instantâneo (para inicialização)
                gsap.set(card, {
                    scale,
                    opacity,
                    zIndex: Math.round(1000 - dist),
                    force3D: true
                });
            }
        });

        rafId3D = null;
    });
};

/**
 * Atualiza a visibilidade dos textos dos cards (OTIMIZADO)
 */
const updateCardTexts = (cards, activeIndex) => {
    cards.forEach((card, index) => {
        const text = card.querySelector('.texto');
        if (!text) return;

        if (index === activeIndex) {
            // OTIMIZADO: usar maxHeight calculado ao invés de "auto"
            const fullHeight = text.scrollHeight;
            gsap.to(text, {
                maxHeight: fullHeight + 'px', // Evita reflow em cada frame
                opacity: 1,
                duration: CAROUSEL_CONFIG.animationDuration,
                delay: CAROUSEL_CONFIG.textShowDelay,
                ease: "power2.out"
            });
        } else {
            gsap.to(text, {
                maxHeight: 0,
                opacity: 0,
                duration: CAROUSEL_CONFIG.textHideDuration,
                ease: "power2.out"
            });
        }
    });
};

/**
 * Inicializa um carrossel 3D
 */
const initCarousel = (sliderId, prevBtnId, nextBtnId) => {
    const slider = document.querySelector(sliderId);
    const prevBtn = document.querySelector(prevBtnId);
    const nextBtn = document.querySelector(nextBtnId);

    if (!slider || !prevBtn || !nextBtn) return;

    const cards = slider.querySelectorAll('.cards');
    if (cards.length === 0) return;

    let currentIndex = 0;
    let isAnimating = false;
    const totalCards = cards.length;

    // Clonar cards para loop infinito
    const cloneCards = () => {
        for (let i = 0; i < CAROUSEL_CONFIG.cloneCount; i++) {
            const cloneStart = cards[totalCards - 1 - i].cloneNode(true);
            cloneStart.classList.add('clone');
            slider.insertBefore(cloneStart, slider.firstChild);

            const cloneEnd = cards[i].cloneNode(true);
            cloneEnd.classList.add('clone');
            slider.appendChild(cloneEnd);
        }
    };

    cloneCards();

    const allCards = slider.querySelectorAll('.cards');

    // Atualiza o carrossel
    const updateCarousel = (animate = true) => {
        const cardWidth = allCards[0].offsetWidth;
        const itemWidth = cardWidth + CAROUSEL_CONFIG.gap;
        const activeIndex = currentIndex + CAROUSEL_CONFIG.cloneCount;
        const containerWidth = slider.parentElement.offsetWidth;
        const centerOffset = (containerWidth - cardWidth) / 2;
        const x = -(activeIndex * itemWidth) + centerOffset;

        if (animate) {
            // Aplicar efeito 3D animado baseado na posição FUTURA (x)
            apply3DEffect(allCards, slider, true, x);

            gsap.to(slider, {
                x,
                duration: CAROUSEL_CONFIG.animationDuration,
                ease: CAROUSEL_CONFIG.ease
            });
        } else {
            gsap.set(slider, { x });
            apply3DEffect(allCards, slider, false, null);
        }

        updateCardTexts(allCards, activeIndex);
    };

    // Navegação com loop
    const navigate = (direction) => {
        if (isAnimating) return;
        isAnimating = true;

        currentIndex += direction;
        updateCarousel();

        const shouldReset = (direction > 0 && currentIndex >= totalCards) ||
            (direction < 0 && currentIndex < 0);

        if (shouldReset) {
            setTimeout(() => {
                currentIndex = direction > 0 ? 0 : totalCards - 1;
                updateCarousel(false);
                isAnimating = false;
            }, CAROUSEL_CONFIG.resetDelay);
        } else {
            setTimeout(() => {
                isAnimating = false;
            }, CAROUSEL_CONFIG.resetDelay);
        }
    };

    // Event listeners
    nextBtn.addEventListener('click', () => navigate(1));
    prevBtn.addEventListener('click', () => navigate(-1));

    // Inicialização e resize (OTIMIZADO: passive listener)
    setTimeout(() => updateCarousel(false), CAROUSEL_CONFIG.initDelay);
    window.addEventListener('resize', () => updateCarousel(false), { passive: true });
};

// ============================
// INICIALIZAÇÃO PRINCIPAL
// ============================
window.addEventListener('load', () => {
    // OTIMIZADO: ScrollSmoother DESABILITADO em mobile para melhor performance
    // Scroll nativo é muito mais performático em dispositivos móveis
    window.smoother = null;

    // Nota: Se precisar do efeito de smooth scroll, use CSS scroll-behavior: smooth;
    // document.documentElement.style.scrollBehavior = 'smooth';

    // Animações de texto inicial
    createTextSplits();

    // Setup mobile sections
    const secoes = document.querySelectorAll('.secao');
    const container = document.querySelector('#intro-container');
    setupMobileSections(container, secoes);

    // Inicializar carrosséis
    initCarousel('#card-slider', '#prev-btn', '#next-btn');
    initCarousel('#card-slider-2', '#prev-btn-2', '#next-btn-2');



    // ============================
    // ANIMAÇÕES DE SEÇÕES
    // ============================

    // Pegada Ecológica
    createSectionTimeline(
        "#pegada-ecologica",
        ".animate-title",
        ".animate-text",
        (tl) => {
            tl.fromTo(".animate-graph",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: ANIMATION_CONFIG.textDuration, ease: ANIMATION_CONFIG.ease },
                ANIMATION_CONFIG.overlap
            ).to("#earth-bar",
                { width: "85%", duration: 2, ease: "power2.out" },
                ANIMATION_CONFIG.overlap
            );
        }
    );

    // Onde Ocorre - Apenas título animado
    gsap.fromTo(".animate-onde-title",
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#onde-ocorre",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Como Resolver - Apenas título animado
    gsap.fromTo(".animate-resolver-title",
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#como-resolver",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Motor do Excesso
    createSectionTimeline("#motor-excesso", ".animate-motor-title", ".animate-motor-text");

    // Nosso Impacto - Cards SEM animação stagger
    createSectionTimeline(
        "#nosso-impacto",
        ".animate-impact-title",
        ".animate-impact-text",
        (tl) => {
            tl.fromTo(".impact-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: ANIMATION_CONFIG.textDuration,
                    stagger: ANIMATION_CONFIG.staggerDelay,
                    ease: ANIMATION_CONFIG.ease
                },
                ANIMATION_CONFIG.overlap
            );
        }
    );

    // ============================
    // ANIMAÇÕES ESPECÍFICAS
    // ============================

    // Contador animado pegada ecológica
    const earthObj = { value: 0 };
    gsap.to(earthObj, {
        value: 1.7,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#pegada-ecologica",
            start: ANIMATION_CONFIG.scrollStart,
            toggleActions: ANIMATION_CONFIG.toggleActions
        },
        onUpdate: () => {
            const counter = document.getElementById("earth-counter");
            if (counter) {
                counter.innerText = earthObj.value.toFixed(1).replace('.', ',');
            }
        }
    });

    // Marquee infinito
    const marqueeTween = gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1
    });

    const marqueeWrapper = document.querySelector(".marquee-wrapper");
    if (marqueeWrapper) {
        marqueeWrapper.addEventListener("mouseenter", () => marqueeTween.pause());
        marqueeWrapper.addEventListener("mouseleave", () => marqueeTween.play());
    }

    // Quiz CTA
    gsap.from("#quiz-cta .max-w-4xl", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: ANIMATION_CONFIG.ease,
        scrollTrigger: {
            trigger: "#quiz-cta",
            start: ANIMATION_CONFIG.scrollStartQuiz,
            toggleActions: ANIMATION_CONFIG.toggleActions
        }
    });

    // Blobs animados
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

    // Contadores de impacto
    gsap.utils.toArray(".counter").forEach(counter => {
        const target = +counter.getAttribute("data-target");
        gsap.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: "#nosso-impacto",
                start: ANIMATION_CONFIG.scrollStart,
                toggleActions: ANIMATION_CONFIG.toggleActions
            }
        });
    });

    // Refresh final
    ScrollTrigger.refresh();
});

// ============================
// GERENCIAMENTO DE RESIZE
// ============================
let resizeTimer;
let wasMobile = window.innerWidth < MOBILE_BREAKPOINT;

// OTIMIZADO: passive listener para resize
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const isNowMobile = window.innerWidth < MOBILE_BREAKPOINT;
        if (wasMobile !== isNowMobile) {
            window.location.reload();
        } else {
            ScrollTrigger.refresh(true); // Force refresh
        }
    }, RESIZE_DEBOUNCE);
}, { passive: true });
