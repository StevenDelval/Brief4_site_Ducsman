let btn = document.querySelector('.boutonhaut')

btn.addEventListener('click', function srolll() {
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'})
})