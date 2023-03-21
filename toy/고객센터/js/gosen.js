const helpButton = document.querySelector('.help-button');
const helpCenter = document.querySelector('.help-center');
const closeButton = document.querySelector('.close-button');
const inputTag = document.querySelector('.inner-container > input')
const searchResult = document.querySelector('.search-result');

helpButton.addEventListener('click', (e) => {
    e.preventDefault()
    helpButton.classList.add('active');

    setTimeout(() => {
        helpCenter.classList.remove('hide');
    }, 600);
})

closeButton.addEventListener('click', (e) => {
    e.preventDefault()
    helpButton.classList.remove('active');
    helpCenter.classList.add('hide');
})

inputTag.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        helpCenter.classList.remove('flip');
        searchResult.firstElementChild.innerText = `'${inputTag.value}'에 대한 검색결과가 없습니다.`
    }
})