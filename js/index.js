const searchIcon = document.getElementById('searchIcon')
let searchInput = document.getElementById('searchInput')

searchIcon.onclick = () => {
    searchInput.classList.toggle('search-input-transform')
}