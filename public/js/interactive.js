function topFunction(){
    window.scroll({top: 0, behavior: "smooth"})
}

window.addEventListener('scroll', () => {
    const topButton = document.querySelector('#top-button')

    if(window.scrollY > 100) {
        topButton.classList.remove('hidden')
    } else {
        topButton.classList.add('hidden')
    }
});