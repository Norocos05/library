function fetchMangaList() {
    const mangaList = JSON.parse(localStorage.getItem('mangaList')) || [];
    const listContainer = document.getElementById('manga-list-container');
    listContainer.innerHTML = '';

    mangaList.forEach((manga, index) => {
        const row = document.createElement('tr');
        row.classList.add('table-content');

        const titleCell = document.createElement('td');
        titleCell.textContent = manga.title;

        const statusCell = document.createElement('td');
        statusCell.textContent = manga.status;

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = manga.description;

        const actionCell = document.createElement('td');
        actionCell.classList.add('dataBtn');

        // Create and style Edit button
        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            openEditModal(index);  // Open edit modal with index
        };

        // Create and style Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteManga(index);  // Delete manga with index
        };

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(titleCell);
        row.appendChild(statusCell);
        row.appendChild(descriptionCell);
        row.appendChild(actionCell);

        listContainer.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", fetchMangaList);
