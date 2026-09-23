document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("chamboli_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
        updateButtonLabel(toggleBtn, savedTheme);

        toggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("chamboli_theme", newTheme);
            updateButtonLabel(toggleBtn, newTheme);
        });
    }
});

function updateButtonLabel(button, theme) {
    if (theme === "dark") {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}