gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

document.addEventListener('DOMContentLoaded', () => {
    // Animação do Hero
    const tlHero = gsap.timeline();

    let splitTitle = new SplitText(".econnect", { type: "chars" });
    let splitSubtitle = new SplitText(".subtitle-educacao", { type: "words, chars" });
    let splitDesc = new SplitText(".inspirando", { type: "lines" });

    tlHero.from(splitSubtitle.chars, {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.02,
        ease: "power3.out"
    })
        .from(splitTitle.chars, {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.05,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .from(splitDesc.lines, {
            duration: 0.8,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.6");

    // Animação das Seções de Features (Zig-Zag)
    const features = document.querySelectorAll('.feature-section');

    features.forEach((section, index) => {
        const textWrapper = section.querySelector('.feature-text-wrapper');
        const imageWrapper = section.querySelector('.feature-image-wrapper');

        // Configuração do ScrollTrigger para cada seção
        ScrollTrigger.create({
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
            onEnter: () => {
                // Animação do Texto
                gsap.to(textWrapper, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                });

                // Animação da Imagem (com leve delay)
                gsap.to(imageWrapper, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out"
                });
            }
        });
    });

    // Animação do Footer (Reutilizada do index se necessário, mas já está no scrollanimate)
    // Se precisar de lógica específica para o footer aqui, adicione.
});
