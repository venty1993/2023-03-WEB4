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



const countUpPlace = document.querySelector('.count-up');

const scrollAnimation = document.getElementsByClassName('scroll-animation')
let countupActive = true;

window.addEventListener('scroll', () => {



    closeModal();


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

    if (0 > countUpPlace.getBoundingClientRect().top - (window.innerHeight * 0.75) && countupActive) {
        countUp(countUpPlace, 1234123, 4000, 24);
        countupActive = false;
    }

    for (let i = 0; i < scrollAnimation.length; i++) {
        if (0 > scrollAnimation[i].getBoundingClientRect().top - (window.innerHeight * 0.75)) {
            scrollAnimation[i].classList.add('active')
        }
    }


})


const hambergerButton = document.getElementById('hamberger');
const hambergerModal = document.querySelector('.hamberger-modal')

hambergerButton.addEventListener('click', (e) => {
    e.preventDefault();
    // 삼항연산자 이용. 클래스에 액티브가없으면 ? 오픈모달 : 아니면클로즈모달
    !hambergerButton.classList.contains('active') ? openModal() : closeModal();



})

let modalTimeout;

function openModal() {
    clearTimeout(modalTimeout);
    hambergerModal.style.display = 'flex'

    // display none -> flex와 동시에 들어가면 transform+transition 애니메이션이 제대로 작동하지 않는다.
    // 약간의 딜레이를 주면 처리 가능한데 그렇게 마음에 들진 않는다.

    setTimeout(() => {

        hambergerButton.classList.add('active');
        hambergerModal.classList.remove('hide');
        hambergerModal.classList.remove('go-back');
    }, 1);


}

function closeModal() {
    hambergerButton.classList.remove('active')
    hambergerModal.classList.add('hide')
    hambergerModal.classList.add('go-back')

    modalTimeout = setTimeout(() => {
        hambergerModal.style.display = 'none'
    }, 500);
}
