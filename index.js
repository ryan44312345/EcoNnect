const idioma = document.querySelector('#btn-idioma')
const inicio = document.querySelector('#inicio')
const sobre = document.querySelector('#sobre')
const txtIdioma = document.querySelector('#txt-idioma')
const educacao = document.querySelector('#subtitle-educacao')
const inspirando = document.querySelector('#inspirando')
const ler = document.querySelector('#btn-ler')

// Seções de Introdução
const introTitle1 = document.querySelector('#intro-title-1')
const introSubtitle1 = document.querySelector('#intro-subtitle-1')
const introText1 = document.querySelector('#intro-text-1')
const introTitle2 = document.querySelector('#intro-title-2')
const introSubtitle2 = document.querySelector('#intro-subtitle-2')
const introText2 = document.querySelector('#intro-text-2')
const introTitle3 = document.querySelector('#intro-title-3')
const introSubtitle3 = document.querySelector('#intro-subtitle-3')
const introText3 = document.querySelector('#intro-text-3')

// Seção: Onde ocorre
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

// Seção: Como resolver
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

// Seção: Pegada Ecológica
const pegadaTitle = document.querySelector('#pegada-title')
const pegadaText1 = document.querySelector('#pegada-text-1')
const pegadaText2 = document.querySelector('#pegada-text-2')
const pegadaCounterLabel = document.querySelector('#pegada-counter-label')
const pegadaCounterSubtitle = document.querySelector('#pegada-counter-subtitle')

// Seção: Motor do Excesso
const motorTitle = document.querySelector('#motor-title')
const motorText = document.querySelector('#motor-text')
const motorCardTitles = document.querySelectorAll('.motor-card-title')
const motorCardTexts = document.querySelectorAll('.motor-card-text')

// Seção: Quiz CTA
const quizTitle = document.querySelector('#quiz-title')
const quizText = document.querySelector('#quiz-text')
const quizBtn = document.querySelector('#quiz-btn')

// Seção: Nosso Impacto
const impactoTitle = document.querySelector('#impacto-title')
const impactoSubtitle = document.querySelector('#impacto-subtitle')
const labelVoluntarios = document.querySelector('#label-voluntarios')
const labelArvores = document.querySelector('#label-arvores')
const labelLixo = document.querySelector('#label-lixo')
const labelParceiros = document.querySelector('#label-parceiros')

// Rodapé
const footerTitle = document.querySelector('#footer-title')

// Seção: Sobre Nós
const sobreTitle = document.querySelector('#sobre-title')
const sobreSubtitle = document.querySelector('#sobre-subtitle')
const missaoTitle = document.querySelector('#missao-title')
const missaoText = document.querySelector('#missao-text')
const visaoTitle = document.querySelector('#visao-title')
const visaoText = document.querySelector('#visao-text')
const valoresTitle = document.querySelector('#valores-title')
const valoresText = document.querySelector('#valores-text')
const historiaTitle = document.querySelector('#historia-title')
const historiaText1 = document.querySelector('#historia-text-1')
const historiaText2 = document.querySelector('#historia-text-2')
const historiaText3 = document.querySelector('#historia-text-3')
const equipeTitle = document.querySelector('#equipe-title')

const imgIdioma = document.querySelector('#img-idioma')

let troca = 0

// Evento de clique para alternar o idioma
// Evento de clique para alternar o idioma
idioma.addEventListener('click', () => {
    try {
        if (troca < 1) {
            // Mudar para Inglês
            console.log("English");
            if (imgIdioma) imgIdioma.src = 'img/brazil-flat-rounded-flag-with-transparent-background-free-png.webp'
            if (inicio) inicio.innerHTML = 'Home'
            if (sobre) sobre.innerHTML = 'About us'
            if (txtIdioma) txtIdioma.innerHTML = 'Change language'
            if (educacao) educacao.innerHTML = 'Environmental Education'
            if (inspirando) inspirando.innerHTML = 'Inspiring conscious consumption in the new generation'
            if (ler) ler.innerHTML = 'Read more'

            // Mobile Menu
            if (mobileInicio) mobileInicio.querySelector('h1').innerHTML = 'Home'
            if (mobileSobre) mobileSobre.querySelector('h1').innerHTML = 'About us'
            if (mobileTxtIdioma) mobileTxtIdioma.innerHTML = 'Change language'
            if (mobileImgIdioma) mobileImgIdioma.src = 'img/brazil-flat-rounded-flag-with-transparent-background-free-png.webp'

            // Introdução
            if (introTitle1) introTitle1.innerHTML = 'Introduction'
            if (introSubtitle1) introSubtitle1.innerHTML = 'The <span class="text-laranja-pastel font-bold">Urgency</span> of Conscious Use of Natural Resources'
            if (introText1) introText1.innerHTML = '<span class="font-bold text-laranja-pastel text-base lg:text-2xl">Our Comfort transforming Nature into Essential Resources.</span> <br> <span class="font-semibold text-laranja-pastel">We have reached an era of dominion</span> where material progress and comfort measure our success. Every advance and product testifies to our ability to convert the planet\'s elements into the foundations of our development. At this pace, we mold the world according to our needs, often without realizing the cost of this transformation.'

            if (introTitle2) introTitle2.innerHTML = 'Introduction'
            if (introSubtitle2) introSubtitle2.innerHTML = 'The <span class="text-laranja-pastel font-bold">Urgency</span> of Conscious Use of Natural Resources'
            if (introText2) introText2.innerHTML = '<span class="font-bold text-laranja-pastel text-base lg:text-2xl">The Invisible Cost of Our Comfort: A World Beyond Limits</span> <br> <span class="font-semibold text-laranja-pastel">But at what cost?</span> Behind material progress, our unbridled exploration has already exceeded Earth\'s regenerative capacity. What we don\'t see is the scenario of unsustainability this generates, threatening ecosystem balance and our own quality of life. It is a silent collapse that has already begun.'

            if (introTitle3) introTitle3.innerHTML = 'Introduction'
            if (introSubtitle3) introSubtitle3.innerHTML = 'The <span class="text-laranja-pastel font-bold">Urgency</span> of Conscious Use of Natural Resources'
            if (introText3) introText3.innerHTML = '<span class="font-bold text-laranja-pastel text-base lg:text-2xl">The Challenge Defining Our Time</span> <br> <span class="font-semibold text-laranja-pastel">This is the global scenario.</span> The impacts of environmental degradation and resource scarcity are not isolated, but a complex web compromising the entire planet. Understanding the true dimension and interconnections of this unrestricted use is the first and most crucial step to building a possible future.'

            // Pegada Ecológica
            if (pegadaTitle) pegadaTitle.innerHTML = 'The Account <span class="text-laranja-pastel">Does Not Close</span>'
            if (pegadaText1) pegadaText1.innerHTML = 'Did you know that Earth Overshoot Day arrives earlier every year? Currently, humanity consumes natural resources <span class="font-bold text-laranja-pastel">1.7 times</span> faster than the planet can regenerate.'
            if (pegadaText2) pegadaText2.innerHTML = 'We live as if we had almost two planets at our disposal. We are operating on nature\'s "overdraft".'
            if (pegadaCounterLabel) pegadaCounterLabel.innerHTML = 'Earths'
            if (pegadaCounterSubtitle) pegadaCounterSubtitle.innerHTML = 'Current humanity consumption'

            // Motor do Excesso
            if (motorTitle) motorTitle.innerHTML = 'The Engine of <span class="text-laranja-pastel">Excess</span>'
            if (motorText) motorText.innerHTML = 'It is not just consumption, it is systemic waste. The disposable culture, driven by planned obsolescence and fast fashion, has turned durable products into instant trash.'

            if (motorCardTitles) {
                motorCardTitles.forEach(el => {
                    if (el.innerText === 'Descarte') el.innerText = 'Disposal'
                    if (el.innerText === 'Fast Fashion') el.innerText = 'Fast Fashion'
                    if (el.innerText === 'Obsolescência') el.innerText = 'Obsolescence'
                    if (el.innerText === 'Energia') el.innerText = 'Energy'
                })
            }
            if (motorCardTexts) {
                motorCardTexts.forEach(el => {
                    if (el.innerText.includes('Lixo gerado')) el.innerText = 'Waste generated by single-use products.'
                    if (el.innerText.includes('Roupas baratas')) el.innerText = 'Cheap clothes, short life cycle.'
                    if (el.innerText.includes('Feito para quebrar')) el.innerText = 'Made to break or slow down.'
                    if (el.innerText.includes('Demanda energética')) el.innerText = 'Unsustainable energy demand.'
                })
            }

            // Onde ocorre
            if (ondeOcorreTitle) ondeOcorreTitle.innerHTML = 'Where does it occur?'
            if (ondeOcorreSubtitle) ondeOcorreSubtitle.innerHTML = 'The <span class="text-laranja-pastel">phenomenon is global</span>, but assumes different intensities depending on the region:'

            if (card1Title) card1Title.innerHTML = 'Unrestricted use in the Amazon'
            if (card1Text) card1Text.innerHTML = 'In the Amazon and other tropical biomes: accelerated deforestation, agricultural expansion, illegal logging, and mining exemplify how predatory use causes biodiversity loss and alters climate balance.'

            if (card2Title) card2Title.innerHTML = 'Unrestricted use in the Ocean'
            if (card2Text) card2Text.innerHTML = 'The severe ocean crisis, caused by overfishing, plastic pollution, and oil/gas exploration, is aggravated by climate change, threatening marine life and coastal livelihoods. Conservation is urgent.'

            if (card3Title) card3Title.innerHTML = 'Unrestricted use in urban and industrial areas'
            if (card3Text) card3Text.innerHTML = 'In urban and industrial areas: massive fossil fuel use, disorderly mining, and unbridled energy consumption demonstrate how economic development often ignores environmental preservation.'

            if (card4Title) card4Title.innerHTML = 'Unrestricted use in arid or semi-arid regions'
            if (card4Text) card4Text.innerHTML = 'Unsustainable water exploitation (irrigation/industry) in dry areas accelerates desertification, depleting aquifers and degrading soil. Poor water management causes scarcity and tensions. Water security requires conservation, efficiency, and cooperation.'

            // Como resolver
            if (comoResolverTitle) comoResolverTitle.innerHTML = 'How to solve this problem?'
            if (comoResolverSubtitle) comoResolverSubtitle.innerHTML = 'There are <span class="text-laranja-pastel">several ways</span> to help solve this problem, here are some of them:'

            if (card5Title) card5Title.innerHTML = 'Institutions'
            if (card5Text) card5Text.innerHTML = 'Environmental institutions act in inspection, protection, and recovery of natural resources. They develop projects, public policies, and direct actions against environmental damage. You can know and support these organizations to amplify positive impact.'

            if (card6Title) card6Title.innerHTML = 'Reports'
            if (card6Text) card6Text.innerHTML = 'Reports allow reporting environmental crimes directly on the site or official channels. This helps fight deforestation, illegal burning, and other irregularities harming nature.'

            if (card7Title) card7Title.innerHTML = 'News'
            if (card7Text) card7Text.innerHTML = 'News brings updated information on events, policies, and environmental discoveries. Thus, the user stays aware of what happens and better understands challenges faced by nature.'

            if (card8Title) card8Title.innerHTML = 'Environmental Volunteering'
            if (card8Text) card8Text.innerHTML = 'Environmental volunteering involves participation in practical actions, like planting and community cleanups. It allows the user to contribute directly to preservation and strengthen care for the environment.'

            // Quiz CTA
            if (quizTitle) quizTitle.innerHTML = 'Do you know your <span class="text-laranja-pastel">Ecological Footprint?</span>'
            if (quizText) quizText.innerHTML = 'Discover the impact of your lifestyle on the planet and receive personalized tips on how to improve it in our interactive Quiz.'
            if (quizBtn) quizBtn.innerHTML = 'Take the Quiz Now'

            // Nosso Impacto
            if (impactoTitle) impactoTitle.innerHTML = 'Our <span class="text-laranja-pastel">Impact</span>'
            if (impactoSubtitle) impactoSubtitle.innerHTML = 'Together, we are building a greener and more conscious future. Check out the numbers we have achieved with the help of our community.'
            if (labelVoluntarios) labelVoluntarios.innerHTML = 'Volunteers'
            if (labelArvores) labelArvores.innerHTML = 'Trees Planted'
            if (labelLixo) labelLixo.innerHTML = 'Waste Collected'
            if (labelParceiros) labelParceiros.innerHTML = 'Global Partners'

            // Sobre Nós
            if (sobreTitle) sobreTitle.innerHTML = 'About <span class="text-laranja-pastel italic">Us</span>'
            if (sobreSubtitle) sobreSubtitle.innerHTML = 'Connecting people, preserving the future. Our mission is to transform environmental awareness into practical action.'
            if (missaoTitle) missaoTitle.innerHTML = 'Mission'
            if (missaoText) missaoText.innerHTML = 'Inspire and empower individuals to adopt sustainable practices, promoting harmony between human development and nature preservation.'
            if (visaoTitle) visaoTitle.innerHTML = 'Vision'
            if (visaoText) visaoText.innerHTML = 'To be the leading global platform for environmental education and action, creating a connected network of planet defenders.'
            if (valoresTitle) valoresTitle.innerHTML = 'Values'
            if (valoresText) valoresText.innerHTML = 'Integrity, Innovation, Collaboration, Responsibility, and Passion for the Planet.'
            if (historiaTitle) historiaTitle.innerHTML = 'Our <span class="text-laranja-pastel italic">Story</span>'
            if (historiaText1) historiaText1.innerHTML = 'It all started with a simple question: "How can we make environmental education accessible and engaging for everyone?"'
            if (historiaText2) historiaText2.innerHTML = 'Founded in 2024, EcoNnect was born from the union of students passionate about technology and sustainability. We realized that, although information was available, it was often complex or disconnected from people\'s reality.'
            if (historiaText3) historiaText3.innerHTML = 'We decided to create a platform that not only informed but inspired action. Today, we are a growing community dedicated to making a difference, one step at a time.'
            if (equipeTitle) equipeTitle.innerHTML = 'Who Makes It <span class="text-laranja-pastel italic">Happen</span>'

            // Rodapé
            if (footerTitle) footerTitle.innerHTML = 'Contact us'

            troca++
        } else {
            // Mudar para Português
            console.log("Portuguese");
            if (imgIdioma) imgIdioma.src = 'img/11654500.png'
            if (inicio) inicio.innerHTML = 'Inicio'
            if (sobre) sobre.innerHTML = 'Sobre'
            if (txtIdioma) txtIdioma.innerHTML = 'Troca de idioma'
            if (educacao) educacao.innerHTML = 'Educação Ambiental'
            if (inspirando) inspirando.innerHTML = 'Inspirando o consumo consciente a nova geração'
            if (ler) ler.innerHTML = 'Ler mais'

            // Mobile Menu
            if (mobileInicio) mobileInicio.querySelector('h1').innerHTML = 'Inicio'
            if (mobileSobre) mobileSobre.querySelector('h1').innerHTML = 'Sobre'
            if (mobileTxtIdioma) mobileTxtIdioma.innerHTML = 'Troca de idioma'
            if (mobileImgIdioma) mobileImgIdioma.src = 'img/11654500.png'

            // Introdução
            if (introTitle1) introTitle1.innerHTML = 'Introdução'
            if (introSubtitle1) introSubtitle1.innerHTML = 'A <span class="text-laranja-pastel font-bold">Urgência</span> do Uso Consciente dos Recursos Naturais'
            if (introText1) introText1.innerHTML = '<span class="font-bold text-laranja-pastel text-base lg:text-2xl">O Nosso Conforto transformando a Natureza em Recursos Essenciais.</span> <br> <span class="font-semibold text-laranja-pastel">Alcançamos uma era de domínio </span> onde o progresso material e o conforto medem nosso sucesso. Cada avanço e produto testemunha nossa habilidade de converter elementos do planeta em alicerces do nosso desenvolvimento. Nesse ritmo, moldamos o mundo conforme nossas necessidades, muitas vezes sem perceber o custo dessa transformação.'

            if (introTitle2) introTitle2.innerHTML = 'Introdução'
            if (introSubtitle2) introSubtitle2.innerHTML = 'A <span class="text-laranja-pastel font-bold">Urgência</span> do Uso Consciente dos Recursos Naturais'
            if (introText2) introText2.innerHTML = '<span class="font-bold text-laranja-pastel text-base lg:text-2xl">O Custo Invisível de Nosso Conforto: Um Mundo Além dos Limites</span> <br> <span class="font-semibold text-laranja-pastel">Mas a que custo?</span> Por trás do progresso material, nossa exploração desenfreada já ultrapassou a capacidade de regeneração da Terra. O que não vemos é o cenário de insustentabilidade que isso gera, ameaçando o equilíbrio dos ecossistemas e a nossa própria qualidade de vida. É um colapso silencioso que já começou.'

            if (introTitle3) introTitle3.innerHTML = 'Introdução'
            if (introSubtitle3) introSubtitle3.innerHTML = 'A <span class="text-laranja-pastel font-bold">Urgência</span> do Uso Consciente dos Recursos Naturais'
            if (introText3) introText3.innerHTML = '<span class="font-bold text-laranja-pastel text-base lg:text-2xl">O Desafio que Define Nosso Tempo</span> <br> <span class="font-semibold text-laranja-pastel">Este é o cenário global.</span> Os impactos da degradação ambiental e da escassez de recursos não são isolados, mas sim uma rede complexa que compromete todo o planeta. Entender a verdadeira dimensão e as interconexões desse uso irrestrito é o primeiro e mais crucial passo para construirmos um futuro possível.'

            // Pegada Ecológica
            if (pegadaTitle) pegadaTitle.innerHTML = 'A Conta <span class="text-laranja-pastel">Não Fecha</span>'
            if (pegadaText1) pegadaText1.innerHTML = 'Você sabia que o dia da sobrecarga da Terra chega mais cedo a cada ano? Atualmente, a humanidade consome recursos naturais <span class="font-bold text-laranja-pastel">1,7 vezes</span> mais rápido do que o planeta consegue regenerar.'
            if (pegadaText2) pegadaText2.innerHTML = 'Vivemos como se tivéssemos quase dois planetas à disposição. Estamos operando no "cheque especial" da natureza.'
            if (pegadaCounterLabel) pegadaCounterLabel.innerHTML = 'Terras'
            if (pegadaCounterSubtitle) pegadaCounterSubtitle.innerHTML = 'Consumo atual da humanidade'

            // Motor do Excesso
            if (motorTitle) motorTitle.innerHTML = 'O Motor do <span class="text-laranja-pastel">Excesso</span>'
            if (motorText) motorText.innerHTML = 'Não é apenas consumo, é desperdício sistêmico. A cultura do descartável, impulsionada pela obsolescência programada e pelo fast fashion, transformou produtos duráveis em lixo instantâneo.'

            if (motorCardTitles) {
                motorCardTitles.forEach(el => {
                    if (el.innerText === 'Disposal') el.innerText = 'Descarte'
                    if (el.innerText === 'Fast Fashion') el.innerText = 'Fast Fashion'
                    if (el.innerText === 'Obsolescence') el.innerText = 'Obsolescência'
                    if (el.innerText === 'Energy') el.innerText = 'Energia'
                })
            }
            if (motorCardTexts) {
                motorCardTexts.forEach(el => {
                    if (el.innerText.includes('Waste generated')) el.innerText = 'Lixo gerado por produtos de uso único.'
                    if (el.innerText.includes('Cheap clothes')) el.innerText = 'Roupas baratas, ciclo de vida curto.'
                    if (el.innerText.includes('Made to break')) el.innerText = 'Feito para quebrar ou ficar lento.'
                    if (el.innerText.includes('Unsustainable energy')) el.innerText = 'Demanda energética insustentável.'
                })
            }

            // Onde ocorre
            if (ondeOcorreTitle) ondeOcorreTitle.innerHTML = 'Onde ocorre?'
            if (ondeOcorreSubtitle) ondeOcorreSubtitle.innerHTML = 'O <span class="text-laranja-pastel">fenômeno é global</span>, mas assume diferentes intensidades dependendo da região:'

            if (card1Title) card1Title.innerHTML = 'Uso irrestrito na Amazônia'
            if (card1Text) card1Text.innerHTML = 'Na Amazônia e em outros biomas tropicais: o desmatamento acelerado, a expansão agropecuária, a extração ilegal de madeira e o garimpo exemplificam como o uso predatório causa perda de biodiversidade e altera o equilíbrio climático.'

            if (card2Title) card2Title.innerHTML = 'Uso irrestrito no Oceano'
            if (card2Text) card2Text.innerHTML = 'A grave crise oceânica, causada por sobrepesca, poluição plástica e exploração de petróleo/gás, é agravada pelas mudanças climáticas, ameaçando a vida marinha e a subsistência costeira. A conservação é urgente.'

            if (card3Title) card3Title.innerHTML = 'Uso irrestrito em áreas urbanas e industriais'
            if (card3Text) card3Text.innerHTML = 'Em áreas urbanas e industriais: o uso massivo de combustíveis fósseis, a mineração desordenada e o consumo energético desenfreado demonstram como o desenvolvimento econômico costuma ignorar a preservação ambiental.'

            if (card4Title) card4Title.innerHTML = 'Uso irrestrito em regiões áridas ou semiáridas'
            if (card4Text) card4Text.innerHTML = 'Exploração hídrica insustentável (irrigação/indústria) em áreas secas acelera a desertificação, esgotando aquíferos e degradando o solo. Má gestão hídrica causa escassez e tensões. Segurança hídrica exige conservação, eficiência e cooperação.'

            // Como resolver
            if (comoResolverTitle) comoResolverTitle.innerHTML = 'Como resolver esse problema?'
            if (comoResolverSubtitle) comoResolverSubtitle.innerHTML = 'Existe <span class="text-laranja-pastel">várias maneiras</span> de ajudar a resolver esse problema aqui está algumas delas:'

            if (card5Title) card5Title.innerHTML = 'Instituições'
            if (card5Text) card5Text.innerHTML = 'As instituições ambientais atuam na fiscalização, proteção e recuperação dos recursos naturais. Elas desenvolvem projetos, políticas públicas e ações diretas contra danos ambientais. Você pode conhecer e apoiar essas organizações para ampliar o impacto positivo.'

            if (card6Title) card6Title.innerHTML = 'Denúncias'
            if (card6Text) card6Text.innerHTML = 'As denúncias permitem relatar crimes ambientais diretamente no site ou em canais oficiais. Isso ajuda a combater desmatamento, queimadas ilegais e outras irregularidades que prejudicam a natureza.'

            if (card7Title) card7Title.innerHTML = 'Notícias'
            if (card7Text) card7Text.innerHTML = 'As notícias trazem informações atualizadas sobre eventos, políticas e descobertas ambientais. Assim, o usuário se mantém consciente sobre o que acontece e entende melhor os desafios enfrentados pela natureza.'

            if (card8Title) card8Title.innerHTML = 'Voluntariado Ambiental'
            if (card8Text) card8Text.innerHTML = 'O voluntariado ambiental envolve participação em ações práticas, como plantio e limpezas comunitárias. Ele permite que o usuário contribua diretamente para a preservação e fortaleça o cuidado com o meio ambiente.'

            // Quiz CTA
            if (quizTitle) quizTitle.innerHTML = 'Você conhece sua <span class="text-laranja-pastel">Pegada Ecológica?</span>'
            if (quizText) quizText.innerHTML = 'Descubra o impacto do seu estilo de vida no planeta e receba dicas personalizadas de como melhorá-lo em nosso Quiz interativo.'
            if (quizBtn) quizBtn.innerHTML = 'Fazer o Quiz Agora'

            // Nosso Impacto
            if (impactoTitle) impactoTitle.innerHTML = 'Nosso <span class="text-laranja-pastel">Impacto</span>'
            if (impactoSubtitle) impactoSubtitle.innerHTML = 'Juntos, estamos construindo um futuro mais verde e consciente. Confira os números que alcançamos com a ajuda da nossa comunidade.'
            if (labelVoluntarios) labelVoluntarios.innerHTML = 'Voluntários'
            if (labelArvores) labelArvores.innerHTML = 'Árvores Plantadas'
            if (labelLixo) labelLixo.innerHTML = 'Lixo Recolhido'
            if (labelParceiros) labelParceiros.innerHTML = 'Parceiros Globais'

            // Sobre Nós
            if (sobreTitle) sobreTitle.innerHTML = 'Sobre <span class="text-laranja-pastel italic">Nós</span>'
            if (sobreSubtitle) sobreSubtitle.innerHTML = 'Conectando pessoas, preservando o futuro. Nossa missão é transformar a consciência ambiental em ação prática.'
            if (missaoTitle) missaoTitle.innerHTML = 'Missão'
            if (missaoText) missaoText.innerHTML = 'Inspirar e capacitar indivíduos a adotarem práticas sustentáveis, promovendo a harmonia entre o desenvolvimento humano e a preservação da natureza.'
            if (visaoTitle) visaoTitle.innerHTML = 'Visão'
            if (visaoText) visaoText.innerHTML = 'Ser a principal plataforma global de educação e ação ambiental, criando uma rede conectada de defensores do planeta.'
            if (valoresTitle) valoresTitle.innerHTML = 'Valores'
            if (valoresText) valoresText.innerHTML = 'Integridade, Inovação, Colaboração, Responsabilidade e Paixão pelo Planeta.'
            if (historiaTitle) historiaTitle.innerHTML = 'Nossa <span class="text-laranja-pastel italic">História</span>'
            if (historiaText1) historiaText1.innerHTML = 'Tudo começou com uma simples pergunta: "Como podemos tornar a educação ambiental acessível e engajadora para todos?"'
            if (historiaText2) historiaText2.innerHTML = 'Fundada em 2024, a EcoNnect nasceu da união de estudantes apaixonados por tecnologia e sustentabilidade. Percebemos que, embora a informação estivesse disponível, ela muitas vezes era complexa ou desconectada da realidade das pessoas.'
            if (historiaText3) historiaText3.innerHTML = 'Decidimos criar uma plataforma que não apenas informasse, mas que inspirasse ação. Hoje, somos uma comunidade crescente dedicada a fazer a diferença, um passo de cada vez.'
            if (equipeTitle) equipeTitle.innerHTML = 'Quem Faz <span class="text-laranja-pastel italic">Acontecer</span>'

            // Rodapé
            if (footerTitle) footerTitle.innerHTML = 'Contate-nos'

            troca = 0
        }
    } catch (error) {
        console.error("Erro na tradução:", error)
    }
})

// Menu Mobile Logic
const menuBtn = document.querySelector('#menu-btn')
const aside = document.querySelector('#aside')
const mobileInicio = document.querySelector('#mobile-inicio')
const mobileSobre = document.querySelector('#mobile-sobre')
const mobileBtnIdioma = document.querySelector('#mobile-btn-idioma')
const mobileTxtIdioma = document.querySelector('#mobile-txt-idioma')
const mobileImgIdioma = document.querySelector('#mobile-img-idioma')

const hambuguer1 = document.querySelector('#hambuguer1')
const hambuguer2 = document.querySelector('#hambuguer2')
const hambuguer3 = document.querySelector('#hambuguer3')

menuBtn.addEventListener('click', () => {
    aside.classList.toggle('translate-x-full')
    const isOpen = !aside.classList.contains('translate-x-full')

    if (isOpen) {
        if (window.smoother) window.smoother.paused(true)
        document.body.style.overflow = 'hidden'
    } else {
        if (window.smoother) window.smoother.paused(false)
        document.body.style.overflow = ''
    }

    // Animação do Hambúrguer
    hambuguer1.classList.toggle('rotate-45')
    hambuguer1.classList.toggle('translate-y-2')
    hambuguer1.classList.toggle('bg-black')
    hambuguer1.classList.toggle('bg-laranja-pastel')

    hambuguer2.classList.toggle('opacity-0')
    hambuguer2.classList.toggle('bg-black')
    hambuguer2.classList.toggle('bg-laranja-pastel')

    hambuguer3.classList.toggle('-rotate-45')
    hambuguer3.classList.toggle('-translate-y-2')
    hambuguer3.classList.toggle('bg-black')
    hambuguer3.classList.toggle('bg-laranja-pastel')
})

function closeMenu() {
    aside.classList.add('translate-x-full')
    if (window.smoother) window.smoother.paused(false)
    document.body.style.overflow = ''

    // Reset Animação
    hambuguer1.classList.remove('rotate-45', 'translate-y-2', 'bg-laranja-pastel')
    hambuguer1.classList.add('bg-black')

    hambuguer2.classList.remove('opacity-0', 'bg-laranja-pastel')
    hambuguer2.classList.add('bg-black')

    hambuguer3.classList.remove('-rotate-45', '-translate-y-2', 'bg-laranja-pastel')
    hambuguer3.classList.add('bg-black')
}

mobileInicio.addEventListener('click', closeMenu)
mobileSobre.addEventListener('click', closeMenu)

mobileBtnIdioma.addEventListener('click', () => {
    // Reutiliza a lógica do botão principal
    idioma.click()
})

// Ler mais button logic
if (ler) {
    ler.addEventListener('click', () => {
        const target = document.querySelector('#intro-container');
        if (target) {
            if (window.smoother) {
                window.smoother.scrollTo(target, true, "top top");
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}