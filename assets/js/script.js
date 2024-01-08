var header = document.querySelector(".header")
var list_pages = document.querySelector(".list-pages")
var initial = header.offsetTop
var modal_sucesso = document.querySelector(".modal-sucesso")
var dark_filter = document.querySelector(".dark-filter")
var back_to_top = document.querySelector(".back-to-top")

window.onscroll = function() {
    if (window.scrollY >= initial) {
        header.classList.add("scroll-down")
        
        if (window.scrollY == 0) {
            header.classList.remove("scroll-down")
        } else if (window.scrollY >= 476) {
            list_pages.classList.add("contrast")
        } else if (window.scrollY < 476) {
            list_pages.classList.remove("contrast")
        }
    }

    showBackToTop(window.scrollY)
}

function showModal() {
    modal_sucesso.style.display = "flex"
    dark_filter.style.display = "block"
}

function closeModal() {
    modal_sucesso.style.display = "none"
    dark_filter.style.display = "none"
}

function showBackToTop(scrollY) {
    if (scrollY == 0) {
        back_to_top.style.display = "none"
    } else {
        back_to_top.style.display = "block"
    }
}