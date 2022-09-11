const header_titles = document.querySelectorAll('[data-header-title]')

header_titles.forEach(function (iteam) {
    iteam.addEventListener('click', function () {
        header_titles.forEach(function (iteam) {
            iteam.classList.remove('_active')
        })
        this.classList.toggle('_active')
    })
})