function addManga() {

    const title = document.getElementById('title').value.trim();
    const status = document.getElementById('status').value.trim();
    const description = document.getElementById('description').value.trim();

    if (title && status && description) {
    let mangaList = JSON.parse(localStorage.getItem('mangaList')) || [];

    mangaList.push({title, status, description});

    localStorage.setItem('mangaList', JSON.stringify(mangaList));

    fetchMangaList();

    alert('You added a manga to the list.');
    }
}
