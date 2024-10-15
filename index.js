const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        dob: document.getElementById('dob').value,
        termsAccepted: document.getElementById('terms').checked,
    };

    localStorage.setItem('user', JSON.stringify(user));
    displayData();
});

function displayData() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const table = document.getElementById('data-table');
        table.innerHTML = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.dob}</td>
                <td>${user.termsAccepted ? 'true' : 'false'}</td>
            </tr>
        `;
    }
}

// Call this function when the page loads to display saved data
window.onload = displayData;
