const voluntariado = [
    {
        title: "Limpeza de Praias",
        description: "Participe de mutirões de limpeza em praias do litoral brasileiro. Ajude a retirar plásticos e resíduos que ameaçam a vida marinha.",
        image: "img/oceanos.png",
        link: "https://www.limpabrasil.org/"
    },
    {
        title: "Reflorestamento",
        description: "Ações de plantio de mudas nativas em áreas degradadas. Contribua para a recuperação da Mata Atlântica e do Cerrado.",
        image: "img/crianca-voluntaria-segurando-uma-pequena-arvore-de-mudas-em-suas-maos.jpg",
        link: "https://www.sosma.org.br/faca-sua-parte/plante-uma-arvore/"
    },
    {
        title: "Resgate de Fauna",
        description: "Apoie centros de triagem e reabilitação de animais silvestres (CETAS) como voluntário ou doador.",
        image: "img/imagem.png",
        link: "https://www.ibama.gov.br/fauna-silvestre/cetas"
    },
    {
        title: "Educação Ambiental",
        description: "Seja um multiplicador! Atue em escolas e comunidades levando informações sobre sustentabilidade e consumo consciente.",
        image: "img/instituicao.jpg",
        link: "https://www.mma.gov.br/educacao-ambiental/"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');
    const template = document.getElementById('card-template');

    voluntariado.forEach(item => {
        const clone = template.content.cloneNode(true);

        const bgDiv = clone.querySelector('.card-bg');
        bgDiv.style.backgroundImage = `url('${item.image}')`;

        clone.querySelector('.card-title').textContent = item.title;
        clone.querySelector('.card-desc').textContent = item.description;
        clone.querySelector('.card-link').href = item.link;

        container.appendChild(clone);
    });
});
