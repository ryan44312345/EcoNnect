const idioma = document.querySelector('#btn-idioma')
const inicio = document.querySelector('#inicio')
const sobre = document.querySelector('#sobre')
const txtIdioma = document.querySelector('#txt-idioma')
const educacao = document.querySelector('#subtitle-educacao')
const inspirando = document.querySelector('#inspirando')
const ler = document.querySelector('#btn-ler')

// Intro sections
const introTitle1 = document.querySelector('#intro-title-1')
const introSubtitle1 = document.querySelector('#intro-subtitle-1')
const introText1 = document.querySelector('#intro-text-1')
const introTitle2 = document.querySelector('#intro-title-2')
const introSubtitle2 = document.querySelector('#intro-subtitle-2')
const introText2 = document.querySelector('#intro-text-2')
const introTitle3 = document.querySelector('#intro-title-3')
const introSubtitle3 = document.querySelector('#intro-subtitle-3')
const introText3 = document.querySelector('#intro-text-3')

// Onde ocorre
const ondeOcorreTitle = document.querySelector('#onde-ocorre-title')
const ondeOcorreSubtitle = document.querySelector('#onde-ocorre-subtitle')
const card1Title = document.querySelector('#card1-title')
const card1Text = document.querySelector('#card1-text')
const card2Title = document.querySelector('#card2-title')
const card2Text = document.querySelector('#card2-text')
const card3Title = document.querySelector('#card3-title')
const card3Text = document.querySelector('#card3-text')
const card4Title = document.querySelector('#card4-title')
const card4Text = document.querySelector('#card4-text')

// Como resolver
const comoResolverTitle = document.querySelector('#como-resolver-title')
const comoResolverSubtitle = document.querySelector('#como-resolver-subtitle')
const card5Title = document.querySelector('#card5-title')
const card5Text = document.querySelector('#card5-text')
const card6Title = document.querySelector('#card6-title')
const card6Text = document.querySelector('#card6-text')
const card7Title = document.querySelector('#card7-title')
const card7Text = document.querySelector('#card7-text')
const card8Title = document.querySelector('#card8-title')
const card8Text = document.querySelector('#card8-text')

// Donation & Footer
const doacaoTitle = document.querySelector('#doacao-title')
const doacaoSubtitle = document.querySelector('#doacao-subtitle')
const footerTitle = document.querySelector('#footer-title')

const imgIdioma = document.querySelector('#img-idioma')

let troca = 0

idioma.addEventListener('click', () => {
    if (troca < 1) {
        console.log("English");
        imgIdioma.src = 'img/brazil-flat-rounded-flag-with-transparent-background-free-png.webp'
        inicio.innerHTML = 'Home'
        sobre.innerHTML = 'About us'
        txtIdioma.innerHTML = 'Change language'
        educacao.innerHTML = 'Environmental Education'
        inspirando.innerHTML = 'Inspiring conscious consumption in the new generation'
        ler.innerHTML = 'Read more'

        // Intro
        introTitle1.innerHTML = 'Introduction'
        introSubtitle1.innerHTML = 'The <span class="text-laranja-pastel font-bold">Urgency</span> of Conscious Use of Natural Resources'
        introText1.innerHTML = '<span class="font-bold text-laranja-pastel text-2xl">Our Comfort transforming Nature into Essential Resources.</span> <br> <span class="font-semibold text-laranja-pastel">We have reached an era of dominion</span> where material progress and comfort measure our success. Every advance and product testifies to our ability to convert the planet\'s elements into the foundations of our development. At this pace, we mold the world according to our needs, often without realizing the cost of this transformation.'

        introTitle2.innerHTML = 'Introduction'
        introSubtitle2.innerHTML = 'The <span class="text-laranja-pastel font-bold">Urgency</span> of Conscious Use of Natural Resources'
        introText2.innerHTML = '<span class="font-bold text-laranja-pastel text-2xl">The Invisible Cost of Our Comfort: A World Beyond Limits</span> <br> <span class="font-semibold text-laranja-pastel">But at what cost?</span> Behind material progress, our unbridled exploration has already exceeded Earth\'s regenerative capacity. What we don\'t see is the scenario of unsustainability this generates, threatening ecosystem balance and our own quality of life. It is a silent collapse that has already begun.'

        introTitle3.innerHTML = 'Introduction'
        introSubtitle3.innerHTML = 'The <span class="text-laranja-pastel font-bold">Urgency</span> of Conscious Use of Natural Resources'
        introText3.innerHTML = '<span class="font-bold text-laranja-pastel text-2xl">The Challenge Defining Our Time</span> <br> <span class="font-semibold text-laranja-pastel">This is the global scenario.</span> The impacts of environmental degradation and resource scarcity are not isolated, but a complex web compromising the entire planet. Understanding the true dimension and interconnections of this unrestricted use is the first and most crucial step to building a possible future.'

        // Onde ocorre
        ondeOcorreTitle.innerHTML = 'Where does it occur?'
        ondeOcorreSubtitle.innerHTML = 'The <span class="text-laranja-pastel">phenomenon is global</span>, but assumes different intensities depending on the region:'

        card1Title.innerHTML = 'Unrestricted use in the Amazon'
        card1Text.innerHTML = 'In the Amazon and other tropical biomes: accelerated deforestation, agricultural expansion, illegal logging, and mining exemplify how predatory use causes biodiversity loss and alters climate balance.'

        card2Title.innerHTML = 'Unrestricted use in the Ocean'
        card2Text.innerHTML = 'The severe ocean crisis, caused by overfishing, plastic pollution, and oil/gas exploration, is aggravated by climate change, threatening marine life and coastal livelihoods. Conservation is urgent.'

        card3Title.innerHTML = 'Unrestricted use in urban and industrial areas'
        card3Text.innerHTML = 'In urban and industrial areas: massive fossil fuel use, disorderly mining, and unbridled energy consumption demonstrate how economic development often ignores environmental preservation.'

        card4Title.innerHTML = 'Unrestricted use in arid or semi-arid regions'
        card4Text.innerHTML = 'Unsustainable water exploitation (irrigation/industry) in dry areas accelerates desertification, depleting aquifers and degrading soil. Poor water management causes scarcity and tensions. Water security requires conservation, efficiency, and cooperation.'

        // Como resolver
        comoResolverTitle.innerHTML = 'How to solve this problem?'
        comoResolverSubtitle.innerHTML = 'There are <span class="text-laranja-pastel">several ways</span> to help solve this problem, here are some of them:'

        card5Title.innerHTML = 'Institutions'
        card5Text.innerHTML = 'Environmental institutions act in inspection, protection, and recovery of natural resources. They develop projects, public policies, and direct actions against environmental damage. You can know and support these organizations to amplify positive impact.'

        card6Title.innerHTML = 'Reports'
        card6Text.innerHTML = 'Reports allow reporting environmental crimes directly on the site or official channels. This helps fight deforestation, illegal burning, and other irregularities harming nature.'

        card7Title.innerHTML = 'News'
        card7Text.innerHTML = 'News brings updated information on events, policies, and environmental discoveries. Thus, the user stays aware of what happens and better understands challenges faced by nature.'

        card8Title.innerHTML = 'Environmental Volunteering'
        card8Text.innerHTML = 'Environmental volunteering involves participation in practical actions, like planting and community cleanups. It allows the user to contribute directly to preservation and strengthen care for the environment.'

        // Donation & Footer
        doacaoTitle.innerHTML = 'Donation to the NGO'
        doacaoSubtitle.innerHTML = 'Contribute to a sustainable future'
        footerTitle.innerHTML = 'Contact us'

        troca++
    } else {
        console.log("Portuguese");
        imgIdioma.src = 'img/11654500.png'
        inicio.innerHTML = 'Inicio'
        sobre.innerHTML = 'Sobre'
        txtIdioma.innerHTML = 'Troca de idioma'
        educacao.innerHTML = 'Educação Ambiental'
        inspirando.innerHTML = 'Inspirando o consumo consciente a nova geração'
        ler.innerHTML = 'Ler mais'

        // Intro
        introTitle1.innerHTML = 'Introdução'
        introSubtitle1.innerHTML = 'A <span class="text-laranja-pastel font-bold">Urgência</span> do Uso Consciente dos Recursos Naturais'
        introText1.innerHTML = '<span class="font-bold text-laranja-pastel text-2xl">O Nosso Conforto transformando a Natureza em Recursos Essenciais.</span> <br> <span class="font-semibold text-laranja-pastel">Alcançamos uma era de domínio </span> onde o progresso material e o conforto medem nosso sucesso. Cada avanço e produto testemunha nossa habilidade de converter elementos do planeta em alicerces do nosso desenvolvimento. Nesse ritmo, moldamos o mundo conforme nossas necessidades, muitas vezes sem perceber o custo dessa transformação.'

        introTitle2.innerHTML = 'Introdução'
        introSubtitle2.innerHTML = 'A <span class="text-laranja-pastel font-bold">Urgência</span> do Uso Consciente dos Recursos Naturais'
        introText2.innerHTML = '<span class="font-bold text-laranja-pastel text-2xl">O Custo Invisível de Nosso Conforto: Um Mundo Além dos Limites</span> <br> <span class="font-semibold text-laranja-pastel">Mas a que custo?</span> Por trás do progresso material, nossa exploração desenfreada já ultrapassou a capacidade de regeneração da Terra. O que não vemos é o cenário de insustentabilidade que isso gera, ameaçando o equilíbrio dos ecossistemas e a nossa própria qualidade de vida. É um colapso silencioso que já começou.'

        introTitle3.innerHTML = 'Introdução'
        introSubtitle3.innerHTML = 'A <span class="text-laranja-pastel font-bold">Urgência</span> do Uso Consciente dos Recursos Naturais'
        introText3.innerHTML = '<span class="font-bold text-laranja-pastel text-2xl">O Desafio que Define Nosso Tempo</span> <br> <span class="font-semibold text-laranja-pastel">Este é o cenário global.</span> Os impactos da degradação ambiental e da escassez de recursos não são isolados, mas sim uma rede complexa que compromete todo o planeta. Entender a verdadeira dimensão e as interconexões desse uso irrestrito é o primeiro e mais crucial passo para construirmos um futuro possível.'

        // Onde ocorre
        ondeOcorreTitle.innerHTML = 'Onde ocorre?'
        ondeOcorreSubtitle.innerHTML = 'O <span class="text-laranja-pastel">fenômeno é global</span>, mas assume diferentes intensidades dependendo da região:'

        card1Title.innerHTML = 'Uso irrestrito na Amazônia'
        card1Text.innerHTML = 'Na Amazônia e em outros biomas tropicais: o desmatamento acelerado, a expansão agropecuária, a extração ilegal de madeira e o garimpo exemplificam como o uso predatório causa perda de biodiversidade e altera o equilíbrio climático.'

        card2Title.innerHTML = 'Uso irrestrito no Oceano'
        card2Text.innerHTML = 'A grave crise oceânica, causada por sobrepesca, poluição plástica e exploração de petróleo/gás, é agravada pelas mudanças climáticas, ameaçando a vida marinha e a subsistência costeira. A conservação é urgente.'

        card3Title.innerHTML = 'Uso irrestrito em áreas urbanas e industriais'
        card3Text.innerHTML = 'Em áreas urbanas e industriais: o uso massivo de combustíveis fósseis, a mineração desordenada e o consumo energético desenfreado demonstram como o desenvolvimento econômico costuma ignorar a preservação ambiental.'

        card4Title.innerHTML = 'Uso irrestrito em regiões áridas ou semiáridas'
        card4Text.innerHTML = 'Exploração hídrica insustentável (irrigação/indústria) em áreas secas acelera a desertificação, esgotando aquíferos e degradando o solo. Má gestão hídrica causa escassez e tensões. Segurança hídrica exige conservação, eficiência e cooperação.'

        // Como resolver
        comoResolverTitle.innerHTML = 'Como resolver esse problema?'
        comoResolverSubtitle.innerHTML = 'Existe <span class="text-laranja-pastel">várias maneiras</span> de ajudar a resolver esse problema aqui está algumas delas:'

        card5Title.innerHTML = 'Instituições'
        card5Text.innerHTML = 'As instituições ambientais atuam na fiscalização, proteção e recuperação dos recursos naturais. Elas desenvolvem projetos, políticas públicas e ações diretas contra danos ambientais. Você pode conhecer e apoiar essas organizações para ampliar o impacto positivo.'

        card6Title.innerHTML = 'Denúncias'
        card6Text.innerHTML = 'As denúncias permitem relatar crimes ambientais diretamente no site ou em canais oficiais. Isso ajuda a combater desmatamento, queimadas ilegais e outras irregularidades que prejudicam a natureza.'

        card7Title.innerHTML = 'Notícias'
        card7Text.innerHTML = 'As notícias trazem informações atualizadas sobre eventos, políticas e descobertas ambientais. Assim, o usuário se mantém consciente sobre o que acontece e entende melhor os desafios enfrentados pela natureza.'

        card8Title.innerHTML = 'Voluntariado Ambiental'
        card8Text.innerHTML = 'O voluntariado ambiental envolve participação em ações práticas, como plantio e limpezas comunitárias. Ele permite que o usuário contribua diretamente para a preservação e fortaleça o cuidado com o meio ambiente.'

        // Donation & Footer
        doacaoTitle.innerHTML = 'Doação para a ONG'
        doacaoSubtitle.innerHTML = 'Contribua para um futuro sustentável'
        footerTitle.innerHTML = 'Contate-nos'

        troca = 0
    }
})