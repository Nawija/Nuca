const search = document.getElementById('search')
const searchInput = decodeURI.getElementById('searchInput')

search.onclick = () => {
    searchInput.classlist.toggle('x')
}