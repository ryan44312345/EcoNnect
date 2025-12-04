const instituicoes = [
    {
        title: "WWF Brasil",
        description: "O WWF-Brasil é uma organização não governamental brasileira dedicada à conservação da natureza, com o objetivo de harmonizar a atividade humana com a conservação da biodiversidade.",
        image: "https://vagas.sc/wp-content/uploads/2023/12/home-office-wwf-brasil-abriu-vaga-para-trabalhar-em-casa-838x471.jpg",
        link: "https://www.wwf.org.br/",
        location: "Brasília, DF",
        contact: "(61) 3364-7400"
    },
    {
        title: "SOS Mata Atlântica",
        description: "A Fundação SOS Mata Atlântica é uma ONG ambiental brasileira. Atua na defesa da remanescente de Mata Atlântica no Brasil.",
        image: "https://organicsnewsbrasil.com.br/wp-content/uploads/2016/08/SOS.jpg",
        link: "https://www.sosma.org.br/",
        location: "São Paulo, SP",
        contact: "(11) 3262-4088"
    },
    {
        title: "Greenpeace Brasil",
        description: "O Greenpeace é uma organização global independente que atua para defender o meio ambiente e promover a paz, inspirando as pessoas a mudarem atitudes e comportamentos.",
        image: "https://www.greenpeace.org/static/planet4-brasil-stateless/2018/07/GP0STRUY6_PressMedia-2048x1366.jpg",
        link: "https://www.greenpeace.org/brasil/",
        location: "São Paulo, SP",
        contact: "contato@greenpeace.org"
    },
    {
        title: "Instituto Socioambiental (ISA)",
        description: "O ISA propõe soluções integradas a questões sociais e ambientais com foco central na defesa de bens e direitos sociais, coletivos e difusos.",
        image: "https://media.licdn.com/dms/image/v2/C4D12AQGFdi8KT95c2w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520250659440?e=2147483647&v=beta&t=XL5qFQg82zN8U5PWz2xTw-hP96Rh3rdkbwQpyik1zps",
        link: "https://www.socioambiental.org/",
        location: "São Paulo, SP",
        contact: "(11) 3515-8900"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Rendering Logic
    const container = document.getElementById('cards-container');
    const template = document.getElementById('card-template');

    if (container && template) {
        instituicoes.forEach(item => {
            const clone = template.content.cloneNode(true);

            const bgDiv = clone.querySelector('.card-bg');
            bgDiv.style.backgroundImage = `url('${item.image}')`;

            clone.querySelector('.card-title').textContent = item.title;
            clone.querySelector('.card-desc').textContent = item.description;
            clone.querySelector('.card-link').href = item.link;

            clone.querySelector('.card-location span').textContent = item.location;
            clone.querySelector('.card-contact span').textContent = item.contact;

            container.appendChild(clone);
        });
    }

    // --- Translation Logic ---
    const idioma = document.querySelector('#btn-idioma');
    const inicio = document.querySelector('#inicio');
    const sobre = document.querySelector('#sobre');
    const txtIdioma = document.querySelector('#txt-idioma');
    const imgIdioma = document.querySelector('#img-idioma');

    // Page Specific
    const pageTitle = document.querySelector('h1.text-4xl'); // Targeting the h1 directly if ID is missing or generic
    const pageSubtitle = document.querySelector('p.text-center.text-lg'); // Targeting the p directly

    // Footer
    const footerTitle = document.querySelector('#footer-title');
    const footerPhone = document.querySelector('#footer-phone');
    const footerEmail = document.querySelector('#footer-email');
    const footerSocial = document.querySelector('#footer-social');

    // Mobile Menu Elements
    const mobileInicio = document.querySelector('#mobile-inicio');
    const mobileSobre = document.querySelector('#mobile-sobre');
    const mobileBtnIdioma = document.querySelector('#mobile-btn-idioma');
    const mobileTxtIdioma = document.querySelector('#mobile-txt-idioma');
    const mobileImgIdioma = document.querySelector('#mobile-img-idioma');

    let troca = 0;

    if (idioma) {
        idioma.addEventListener('click', () => {
            try {
                if (troca < 1) {
                    // English
                    if (imgIdioma) imgIdioma.src = 'img/brazil-flat-rounded-flag-with-transparent-background-free-png.webp';
                    if (inicio) inicio.innerHTML = 'Home';
                    if (sobre) sobre.innerHTML = 'About us';
                    if (txtIdioma) txtIdioma.innerHTML = 'Change language';

                    // Page Specific
                    if (pageTitle) pageTitle.innerHTML = 'Environmental <span class="text-laranja-pastel">Institutions</span>';
                    if (pageSubtitle) pageSubtitle.innerHTML = 'Meet and support organizations that work tirelessly for the preservation of our planet.';

                    // Footer
                    if (footerTitle) footerTitle.innerHTML = 'Contact us';
                    if (footerPhone) footerPhone.innerHTML = 'Phone';
                    if (footerEmail) footerEmail.innerHTML = 'Email';
                    if (footerSocial) footerSocial.innerHTML = 'Social';

                    // Mobile Menu
                    if (mobileInicio) mobileInicio.querySelector('h1').innerHTML = 'Home';
                    if (mobileSobre) mobileSobre.querySelector('h1').innerHTML = 'About us';
                    if (mobileTxtIdioma) mobileTxtIdioma.innerHTML = 'Change language';
                    if (mobileImgIdioma) mobileImgIdioma.src = 'img/brazil-flat-rounded-flag-with-transparent-background-free-png.webp';

                    troca++;
                } else {
                    // Portuguese
                    if (imgIdioma) imgIdioma.src = 'img/11654500.png';
                    if (inicio) inicio.innerHTML = 'Inicio';
                    if (sobre) sobre.innerHTML = 'Sobre';
                    if (txtIdioma) txtIdioma.innerHTML = 'Troca de idioma';

                    // Page Specific
                    if (pageTitle) pageTitle.innerHTML = 'Instituições <span class="text-laranja-pastel">Ambientais</span>';
                    if (pageSubtitle) pageSubtitle.innerHTML = 'Conheça e apoie organizações que trabalham incansavelmente pela preservação do nosso planeta.';

                    // Footer
                    if (footerTitle) footerTitle.innerHTML = 'Contate-nos';
                    if (footerPhone) footerPhone.innerHTML = 'Phone';
                    if (footerEmail) footerEmail.innerHTML = 'Email';
                    if (footerSocial) footerSocial.innerHTML = 'Social';

                    // Mobile Menu
                    if (mobileInicio) mobileInicio.querySelector('h1').innerHTML = 'Inicio';
                    if (mobileSobre) mobileSobre.querySelector('h1').innerHTML = 'Sobre';
                    if (mobileTxtIdioma) mobileTxtIdioma.innerHTML = 'Troca de idioma';
                    if (mobileImgIdioma) mobileImgIdioma.src = 'img/11654500.png';

                    troca = 0;
                }
            } catch (error) {
                console.error("Erro na tradução:", error);
            }
        });
    }

    // --- Mobile Menu Logic ---
    const menuBtn = document.querySelector('#menu-btn');
    const aside = document.querySelector('#aside');
    const hambuguer1 = document.querySelector('#hambuguer1');
    const hambuguer2 = document.querySelector('#hambuguer2');
    const hambuguer3 = document.querySelector('#hambuguer3');

    if (menuBtn && aside) {
        menuBtn.addEventListener('click', () => {
            aside.classList.toggle('translate-x-full');
            const isOpen = !aside.classList.contains('translate-x-full');

            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }

            // Animação do Hambúrguer
            if (hambuguer1) {
                hambuguer1.classList.toggle('rotate-45');
                hambuguer1.classList.toggle('translate-y-2');
                hambuguer1.classList.toggle('bg-black');
                hambuguer1.classList.toggle('bg-laranja-pastel');
            }
            if (hambuguer2) {
                hambuguer2.classList.toggle('opacity-0');
                hambuguer2.classList.toggle('bg-black');
                hambuguer2.classList.toggle('bg-laranja-pastel');
            }
            if (hambuguer3) {
                hambuguer3.classList.toggle('-rotate-45');
                hambuguer3.classList.toggle('-translate-y-2');
                hambuguer3.classList.toggle('bg-black');
                hambuguer3.classList.toggle('bg-laranja-pastel');
            }
        });
    }

    function closeMenu() {
        if (aside) aside.classList.add('translate-x-full');
        document.body.style.overflow = '';

        // Reset Animação
        if (hambuguer1) {
            hambuguer1.classList.remove('rotate-45', 'translate-y-2', 'bg-laranja-pastel');
            hambuguer1.classList.add('bg-black');
        }
        if (hambuguer2) {
            hambuguer2.classList.remove('opacity-0', 'bg-laranja-pastel');
            hambuguer2.classList.add('bg-black');
        }
        if (hambuguer3) {
            hambuguer3.classList.remove('-rotate-45', '-translate-y-2', 'bg-laranja-pastel');
            hambuguer3.classList.add('bg-black');
        }
    }

    if (mobileInicio) mobileInicio.addEventListener('click', closeMenu);
    if (mobileSobre) mobileSobre.addEventListener('click', closeMenu);

    if (mobileBtnIdioma) {
        mobileBtnIdioma.addEventListener('click', () => {
            if (idioma) idioma.click();
        });
    }
});
