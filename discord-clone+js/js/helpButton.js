function helpCenterFunc() {
    const openButton = document.querySelector('.help-button');
    const helpInput = document.querySelector('.help-input-container>input');
    const helpResult = document.querySelector('.help-result');
    const openHelp = document.querySelector('.open-help');
    const closeButton = document.querySelector('.help-header>a');

    openButton.addEventListener('click', (e) => {
        e.preventDefault();
        openButton.classList.add('active');
        setTimeout(() => {
            openHelp.classList.add('active');
        }, 600);
    })

    closeButton.addEventListener('click', () => {
        openButton.classList.remove('active');
        openHelp.classList.remove('active')
    })

    helpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            openHelp.classList.add('search');
            helpResult.innerText = `'${helpInput.value}'에 대한 검색 결과가 없습니다 ㅠ.ㅠ`
        }
    })
}