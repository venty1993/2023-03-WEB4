// 헤더가 어떤 움직임을 보여주냐

// 스크롤을 아래로 하면 헤더가 숨는다
// 스크롤을 위로하면 헤더가 나타난다

// 스크롤이 x 위에있으면 헤더가 투명해지고 로고가 하얀색이 된다
// 스크롤이 x 위에 있지 않으면 헤더가 불투명해지고 로고가 파란색이 된다

//mousewheel이벤트에는 delta : 120 or -120

const header = document.querySelector('header');
let 이전좌표 = window.scrollY;

//이전좌표보다 현재 좌표값이 크면 스크롤을 아래로 내린거고
//반대는 위로 올린거다

window.addEventListener('scroll', () => {
    if (window.scrollY < 100) {
        header.classList.remove('scrolled')
    } else {
        header.classList.add('scrolled')
    }
    if (이전좌표 < window.scrollY) {
        header.classList.add('hide-header')

    } else {
        header.classList.remove('hide-header')

    }
    이전좌표 = window.scrollY;
})


const hambergerButton = document.getElementById('hamberger');
const hambergerModal = document.querySelector('.hamberger-modal')

hambergerButton.addEventListener('click', (e) => {
    e.preventDefault();
    hambergerButton.classList.toggle('active')
    hambergerModal.classList.toggle('hide')
    hambergerModal.classList.toggle('go-back')

})
