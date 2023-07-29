// Dom Findings
const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const elContent = document.getElementById('elContent')
const btnMore = document.getElementById('btnMore');


let searchKey = '';
let page = 1;
let apiUrl = 'https://api.unsplash.com/search/photos';
const accessKey = 'jUpLTA7zBY_mvxnxTtJJ8yxdbod7oWhc5-tfnSp1Bho';

const searchImage = async () => {
    searchKey = searchInput.value;
    const url = `${apiUrl}?page=${page}&query=${searchKey}&client_id=${accessKey}&per_page=12`;
    const res = await fetch(url);
    const data = await res.json();

    const results = data.results;

    results.map((result) => {
        console.log(result)

        let imageEl = document.createElement('img');
        imageEl.src = result.urls.small;
        let imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        imageLink.appendChild(imageEl);

        elContent.appendChild(imageLink)


    });

    btnMore.style.display = 'inline-block'
}
// Search event
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage()
});

btnMore.addEventListener('click', ()=>{
    page++;
    searchImage();
})