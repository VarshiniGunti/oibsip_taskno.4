// Mock user data (replace with your actual authentication logic)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
];

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the provided username and password match any user in the mock data
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        // Authentication successful
        message.innerText = "Login successful!";
        message.style.color = "green";
    } else {
        // Authentication failed
        message.innerText = "Invalid username or password.";
        message.style.color = "red";
    }
});
