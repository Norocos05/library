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

/* update js
    window.onload = function() {
    // Retrieve the user index from the URL parameters
    const params = new URLSearchParams(window.location.search);
    const index = params.get("index");

    if (index === null) {
        alert("No user selected for editing.");
        return;
    }

    // Fetch the user data from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users[index];

    // Populate the input fields with the existing user data
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;

    // Save changes when the button is clicked
    window.saveChanges = function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            // Update the user data in localStorage
            users[index] = { name, email };
            localStorage.setItem('users', JSON.stringify(users));

            // Redirect back to the main page (index.html)
            window.location.href = 'index.html';  // Or wherever you want to redirect
        } else {
            alert("Please fill in both fields.");
        }
    };
};

delete js
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    fetchUsers();
}
*/
