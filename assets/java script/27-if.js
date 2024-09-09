console.log("27-if.js is working...");

// SELECTORS
const inputEl = document.querySelector("#role");
const contentEl = document.querySelector("#concent");



//FUNCTIONS
function showContent() {
    const role = inputEl.value
if (role == "admin") {
    contentEl.innerHTML=
     `
    <ul>

    <li>Admin Dashboard</li>
    <li>User Management</li>
    <li>Settings</li>

    </ul>
    `
}

}