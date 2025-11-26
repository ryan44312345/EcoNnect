const denuncias = [
    {
        title: "Linha Verde (IBAMA)",
        description: "Canal oficial do IBAMA para denúncias de crimes ambientais em todo o território nacional. Atendimento por telefone ou internet.",
        image: "img/close-up-homem-segurando-megafone.jpg",
        link: "https://www.gov.br/ibama/pt-br/canais_atendimento/linha-verde"
    },
    {
        title: "Disque Denúncia (181)",
        description: "Serviço unificado para denúncias anônimas de diversos crimes, incluindo agressões ao meio ambiente, queimadas e maus-tratos a animais.",
        image: "img/aridas.png",
        link: "https://disquedenuncia181.es.gov.br/"
    },
    {
        title: "Polícia Ambiental",
        description: "Acione a Polícia Militar Ambiental do seu estado para flagrantes de desmatamento, caça ilegal e poluição.",
        image: "img/urbano.png",
        link: "https://www.policiamilitar.sp.gov.br/unidades/ambiental/"
    },
    {
        title: "Ministério Público",
        description: "O MP recebe denúncias formais sobre danos ambientais coletivos e pode iniciar ações civis públicas.",
        image: "img/instituicao.jpg",
        link: "https://www.mpf.mp.br/servicos/sac"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');
    const template = document.getElementById('card-template');

    denuncias.forEach(item => {
        const clone = template.content.cloneNode(true);

        const bgDiv = clone.querySelector('.card-bg');
        bgDiv.style.backgroundImage = `url('${item.image}')`;

        clone.querySelector('.card-title').textContent = item.title;
        clone.querySelector('.card-desc').textContent = item.description;
        clone.querySelector('.card-link').href = item.link;

        container.appendChild(clone);
    });
});
