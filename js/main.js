const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
    const isDark = theme === "dark";

    root.setAttribute("data-theme", theme);

    if (themeToggle) {
        themeToggle.checked = isDark;
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Disable dark mode" : "Enable dark mode"
        );

        const label = themeToggle.nextElementSibling?.querySelector(".theme-label");
        if (label) {
            label.textContent = isDark ? "DARK" : "LIGHT";
        }
    }

    if (themeColor) {
        themeColor.setAttribute("content", isDark ? "#171713" : "#eee9df");
    }

    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

if (themeToggle) {
    themeToggle.addEventListener("change", () => {
        applyTheme(themeToggle.checked ? "dark" : "light");
    });
}
