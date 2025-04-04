function addManga() {

    const title = document.getElementById('title').value.trim();
    const status = document.getElementById('status').value.trim();
    const description = document.getElementById('description').value.trim();

    if (title == '') {
        alert('Write a Title!');
        return false;
    } if (status == '') {
        alert('What is the status?');
        return false;
    } if (description == '') {
        alert('Put a description!')
        return false;
    } else {

        const manga = {
            title: title,
            status: status,
            description: description
        }; 

        let mangaList = JSON.parse(localStorage.getItem('mangaList')) || [];

        mangaList.push(manga);

        localStorage.setItem('mangaList', JSON.stringify(mangaList));

        const link = 'library.html';
        window.location.replace(link);

        alert('You added a manga to the list.');
    }
}