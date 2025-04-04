// Update the manga list and save changes
function updateManga(index) {
    console.log("Updating manga at index:", index);
    console.log("mangaList:", mangaList);

    mangaList[index].title = document.getElementById('editTitle').value;
    mangaList[index].status = editStatus.value;
    mangaList[index].description = editDescription.value;

    // Save the updated manga list to localStorage
    localStorage.setItem('mangaList', JSON.stringify(mangaList));

    // Close the modal
    modal.style.display = "none";
    function updateManga(index) {
        console.log("Updating manga at index:", index);
        console.log("mangaList:", mangaList);

        // Check if mangaList[index] is valid
        if (mangaList[index]) {
            const updatedManga = mangaList[index];

            // Update the properties of the manga
            updatedManga.title = editTitle.value;
            updatedManga.status = editStatus.value;
            updatedManga.description = editDescription.value;

            // Save the updated manga list back to localStorage
            localStorage.setItem('mangaList', JSON.stringify(mangaList));

            // Close the edit modal
            modal.style.display = "none";

            // Re-render the list to reflect the updated data
            renderMangaList();
        } else {
            console.error("No manga found at index:", index);
        }
    }
    // Re-render the list to reflect the changes
    renderMangaList();
}

// Close the modal when the user clicks the close button
closeModal.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });
});

// Close the modal if the user clicks anywhere outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
