// Modal for adding manga
let modalCreate = document.getElementById('modalForAdd');
let addText = document.getElementById('addText'); 
let span = document.getElementsByClassName('close')[0];

addText.onclick = function() {
    modalCreate.style.display = 'block';
};

span.onclick = function() {
    modalCreate.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modalCreate) {
        modalCreate.style.display = 'none';
    }
};

// Modal for editing manga
const modal = document.getElementById("modalForEdit");
const closeModal = document.querySelectorAll(".close");
const editForm = document.getElementById("editForm");
const editTitle = document.getElementById("editTitle");
const editStatus = document.getElementById("editStatus");
const editDescription = document.getElementById("editDescription");

function openEditModal(index) {
    const manga = mangaList[index];

    if (manga) {
        // Populate the form with the manga details
        document.getElementById('editTitle').value = manga.title;
        document.getElementById('editStatus').value = manga.status;
        document.getElementById('editDescription').value = manga.description;

        // Show the modal
        document.getElementById('modalForEdit').style.display = 'block';

        // Attach the form submission handler
        const editForm = document.getElementById('editForm');
        editForm.onsubmit = (e) => {
            e.preventDefault();
            updateManga(index);  // Pass the correct index to the updateManga function
        };
    } else {
        console.error("No manga found at index:", index);
    }
}
