console.log("24-dom-value.js is working...");

const usernameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");

const username = usernameEl.value;
const password = passwordEl.value;
const labelUsernameEl = document.querySelector(".username-label");
const messageEl = document.querySelector(".message");

console.log("username: ", username);
console.log("password: ", password);
console.log("username classlist: ", usernameEl.classList.value);
console.log("username label: ", labelUsernameEl.innerText);

messageEl.textContent = "This is a message from JavaScript to , ${username} "; // This is a message from JavaScript to , ${username}
