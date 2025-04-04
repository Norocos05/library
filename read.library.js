const mangaList = JSON.parse(localStorage.getItem('mangaList')) || [];
const listContainer = document.getElementById('manga-list-container');
listContainer.innerHTML = '';

// Loop through the manga list to create rows in the table
mangaList.forEach((manga, index) => {
    const row = document.createElement('tr');
    row.classList.add('table-content');
    row.innerHTML = `
        <td>${manga.title}</td>
        <td>${manga.status}</td>
        <td>${manga.description}</td>
        <td class="dataBtn">
            <i class="fa fa-pencil-square-o" aria-hidden="true" data-index="${index}"></i>
            <i class="fa fa-trash-o" aria-hidden="true" onclick="deleteManga(${index})"></i>
        </td>
    `;
    listContainer.appendChild(row);

    // Select the edit icon within the current row
    const editIcon = row.querySelector('.fa-pencil-square-o');

    // Add an event listener to open the modal with the correct index
    editIcon.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-index');
        openEditModal(index);  // Pass the correct index to the openEditModal function
    });
});
