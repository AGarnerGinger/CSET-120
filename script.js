document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("loginLink");
    if (!loginLink) return;

    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (isLoggedIn) {
        loginLink.textContent = "Logout";
        loginLink.href = "#";

        loginLink.onclick = () => {
            localStorage.removeItem("loggedIn");
            window.location.reload();
        };
    } else {
        loginLink.textContent = "Login";
        loginLink.href = "login.html";
        loginLink.onclick = null;
    }
});
