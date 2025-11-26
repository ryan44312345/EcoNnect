const noticias = [
    {
        title: "COP30 no Brasil",
        description: "Belém do Pará será sede da COP30 em 2025. Entenda a importância deste evento para a Amazônia e para o mundo.",
        image: "img/jornal.png",
        link: "https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2023/05/belem-do-para-e-confirmada-como-sede-da-cop-30-em-2025"
    },
    {
        title: "Avanços na Energia Solar",
        description: "Brasil bate recorde de geração de energia solar, consolidando-se como um dos líderes mundiais em energia limpa.",
        image: "img/urbano.png",
        link: "https://www.absolar.org.br/noticia/"
    },
    {
        title: "Recuperação dos Oceanos",
        description: "Novo tratado internacional visa proteger 30% dos oceanos até 2030. Saiba o que muda na legislação global.",
        image: "img/oceanos.png",
        link: "https://news.un.org/pt/story/2023/03/1810842"
    },
    {
        title: "Desmatamento na Amazônia",
        description: "Dados recentes mostram queda nos índices de desmatamento, mas desafios persistem. Confira a análise completa.",
        image: "img/imagem.png",
        link: "http://terrabrasilis.dpi.inpe.br/"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');
    const template = document.getElementById('card-template');

    noticias.forEach(item => {
        const clone = template.content.cloneNode(true);

        const bgDiv = clone.querySelector('.card-bg');
        bgDiv.style.backgroundImage = `url('${item.image}')`;

        clone.querySelector('.card-title').textContent = item.title;
        clone.querySelector('.card-desc').textContent = item.description;
        clone.querySelector('.card-link').href = item.link;

        container.appendChild(clone);
    });
});
