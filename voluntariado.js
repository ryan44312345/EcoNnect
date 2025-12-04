const voluntariado = [
    {
        title: "Limpeza de Praias",
        description: "Participe de mutirões de limpeza em praias do litoral brasileiro. Ajude a retirar plásticos e resíduos que ameaçam a vida marinha.",
        image: "https://uploads.promoview.com.br/2023/12/1limpabrasil.jpg",
        link: "https://www.limpabrasil.org/"
    },
    {
        title: "Instituto Terra",
        description: "Fundado por Sebastião Salgado, o Instituto foca na recuperação da Mata Atlântica e na proteção de nascentes no Vale do Rio Doce.",
        image: "https://assets.bileto.sympla.com.br/eventmanager/production/1l2v7e229u7bc02l3rl0fn5336uabh2teb4b4ar1deo3r1koibrh7qg9nk3qiirlom1k6qq3nb0gtk1j3oarra7e3ltipop0s1a3t8i.webp",
        link: "https://institutoterra.org/"
    },
    {
        title: "Projeto Tamar",
        description: "Apoie a conservação das tartarugas marinhas. O Projeto Tamar atua na pesquisa, proteção e manejo dessas espécies ameaçadas em todo o litoral brasileiro.",
        image: "https://blog.sympla.com.br/wp-content/uploads/2023/10/08-projeto-tamar.jpg",
        link: "https://www.tamar.org.br/"
    },
    {
        title: "Greenpeace Brasil",
        description: "Atue na defesa do meio ambiente através do ativismo pacífico. O Greenpeace realiza campanhas globais e locais para combater as mudanças climáticas.",
        image: "https://www.greenpeace.org/static/planet4-brasil-stateless/2018/07/GP0STRUY6_PressMedia-2048x1366.jpg",
        link: "https://www.greenpeace.org/brasil/participe/voluntariado/"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');
    const template = document.getElementById('card-template');

    voluntariado.forEach((item, index) => {
        const clone = template.content.cloneNode(true);
        const itemDiv = clone.querySelector('.voluntariado-item');

        // Zig-Zag Logic: Even index = Image Left (default), Odd index = Image Right (reverse)
        if (index % 2 !== 0) {
            itemDiv.classList.add('lg:flex-row-reverse');
        }

        const bgDiv = clone.querySelector('.card-bg');
        bgDiv.style.backgroundImage = `url('${item.image}')`;

        clone.querySelector('.card-title').textContent = item.title;
        clone.querySelector('.card-desc').textContent = item.description;
        clone.querySelector('.card-link').href = item.link;

        // Add fade-in animation class (optional, can be handled by scrollanimate)
        itemDiv.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');

        // Simple intersection observer for fade-in on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(itemDiv);

        container.appendChild(clone);
    });
});
