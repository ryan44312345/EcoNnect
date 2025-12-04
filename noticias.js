const noticias = [
    {
        title: "Soluções Inovadoras na COP30",
        description: "MGI apresenta soluções inovadoras em debates sobre sustentabilidade no campo e nas cidades no quarto dia da COP30.",
        image: "https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/novembro/mgi-apresenta-solucoes-inovadoras-em-debates-sobre-sustentabilidade-no-campo-e-nas-cidades-no-quarto-dia-da-cop30/6a8a8150.jpg/@@images/a8bf5956-80bf-49e1-9427-a56ba38c33fa.jpeg",
        link: "https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/novembro/mgi-apresenta-solucoes-inovadoras-em-debates-sobre-sustentabilidade-no-campo-e-nas-cidades-no-quarto-dia-da-cop30",
        date: "Novembro 2025",
        category: "Inovação"
    },
    {
        title: "Junho Verde: Educação Ambiental",
        description: "A educação ambiental é a chave para a sensibilização de políticas de preservação e sustentabilidade, destaca Ibama.",
        image: "https://www.gov.br/ibama/pt-br/assuntos/noticias/2025/junho-verde-educacao-ambiental-e-a-chave-para-sensibilizacao-de-politicas-de-preservacao-e-sustentabilidade/ibama-promove-oficinas-de-educacao-ambiental-em-escolas-publicas.jpg/@@images/aaa59abd-f0e8-4771-82be-28e021e24d40.jpeg",
        link: "https://www.gov.br/ibama/pt-br/assuntos/noticias/2025/junho-verde-educacao-ambiental-e-a-chave-para-sensibilizacao-de-politicas-de-preservacao-e-sustentabilidade",
        date: "Junho 2025",
        category: "Educação"
    },
    {
        title: "Amazonas: Protagonismo em Inovação",
        description: "Estado do Amazonas mostra força e sustentabilidade na etapa Norte do Prêmio Finep de Inovação 2025.",
        image: "https://www.agenciaamazonas.am.gov.br/wp-content/uploads/2025/09/SEDECTI-PremioFinep_Secretario-executivo-JEIBIMEDEIROS-BrunoLeao5-1024x683.jpg",
        link: "https://www.agenciaamazonas.am.gov.br/noticias/amazonas-mostra-protagonismo-em-inovacao-e-sustentabilidade-na-etapa-norte-do-premio-finep-de-inovacao-2025/",
        date: "2025",
        category: "Tecnologia"
    },
    {
        title: "Impactos Climáticos na Educação",
        description: "Como as mudanças climáticas estão afetando o acesso e a qualidade da educação em diferentes regiões.",
        image: "https://www.noticiasustentavel.com.br/wp-content/uploads/2025/11/estufa_unicef-768x512.jpg",
        link: "https://www.noticiasustentavel.com.br/impactos-mudancas-climaticas-educacao/",
        date: "2025",
        category: "Sociedade"
    },
    {
        title: "Microplásticos nas Praias",
        description: "A crescente poluição por microplásticos nas praias e seus impactos devastadores na vida marinha.",
        image: "https://www.noticiasustentavel.com.br/wp-content/uploads/2025/10/microplastico-768x512.jpg",
        link: "https://www.noticiasustentavel.com.br/microplasticos-praias-poluicao/",
        date: "2025",
        category: "Meio Ambiente"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('news-container');

    noticias.forEach((item) => {
        const article = document.createElement('article');
        article.className = 'bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-laranja-pastel/50 transition-colors duration-300 group';

        article.innerHTML = `
            <a href="${item.link}" target="_blank" class="flex flex-col md:flex-row h-full">
                <!-- Image Side -->
                <div class="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
                </div>
                
                <!-- Content Side -->
                <div class="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="text-laranja-pastel font-teachers text-xs font-bold tracking-widest uppercase">${item.category}</span>
                        <span class="w-1 h-1 bg-white/30 rounded-full"></span>
                        <span class="text-white/50 font-teachers text-xs uppercase tracking-widest">${item.date}</span>
                    </div>
                    
                    <h2 class="text-2xl md:text-3xl font-teachers font-bold text-laranja-claro mb-3 group-hover:text-laranja-pastel transition-colors">
                        ${item.title}
                    </h2>
                    
                    <p class="text-laranja-claro/70 font-teachers text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                        ${item.description}
                    </p>
                    
                    <div class="flex items-center gap-2 text-laranja-pastel font-teachers text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                        Ler Matéria <span class="text-lg">&rarr;</span>
                    </div>
                </div>
            </a>
        `;

        container.appendChild(article);
    });
});
