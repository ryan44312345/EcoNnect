const btnMenu = document.getElementById('menu-btn')
const aside = document.getElementById('aside')

const hambuguerTimeline = anime.timeline({
    easing: "easeOutExpo",
    duration: 600,
    autoplay: false,
    loop: 1,
})

const hambuguerTimeline2 = anime.timeline({
    easing: "easeOutExpo",
    duration: 600,
    autoplay: false,
    loop: 1,
})

hambuguerTimeline
    .add({
        targets: ['#hambuguer1', '#hambuguer2', '#hambuguer3'],
        rotate: '90deg',
    })
    .add({
        targets: '#hambuguer3',
        opacity: 0,
    }, 0)
    .add({
        targets: '#hambuguer2',
        rotate: '45deg',
        translateY: '4px',
        translateX: '-5px',
    }, 0)
    .add({
        targets: '#hambuguer1',
        rotate: '135deg',
        translateY: '0px',
        translateX: '11px',
    }, 0)

    
hambuguerTimeline2
    .add({
        targets: '#hambuguer1',
        rotate: '180deg',
        translateY: '0px',
        translateX: '0px',
    })
    .add({
        targets: '#hambuguer2',
        rotate: '180deg',
        translateY: '0px',
        translateX: '0px',
    }, 0)
    .add({
        targets: '#hambuguer3',
        opacity: 1,
        rotate: '180deg',
        translateY: '0px',
        translateX: '0px',
    }, 0)
let contador = 0

btnMenu.addEventListener('click', () => {
    if (contador < 1) {
        setTimeout (() => {
            aside.classList.remove('hidden')
        }, 1)
        setTimeout (() => {
            hambuguerTimeline.play()
            aside.classList.remove('translate-x-full')
        }, 500)

        //translate-x-112
    }
    contador++

    if (contador > 1) {
        setTimeout (() => {
            hambuguerTimeline2.play()
            aside.classList.add('translate-x-full')
        }, 10)
        setTimeout (() => {
            aside.classList.add('hidden')
        }, 500)
        contador = 0
    }
})