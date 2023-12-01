const darkModeToggle = document.getElementById('dark-mode-toggle');
const sections = document.querySelectorAll('.section-padding');

function applyDarkMode(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    sections.forEach(section => {
        section.classList.toggle('dark-mode-section', isDarkMode);
    });
    darkModeToggle.innerText = isDarkMode ? 'Tryb Jasny' : 'Tryb Ciemny';

    darkModeToggle.classList.toggle('btn-light', isDarkMode);
    darkModeToggle.classList.toggle('btn-dark', !isDarkMode);
}

function toggleDarkMode() {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    const newDarkMode = !isDarkModeEnabled;

    localStorage.setItem('darkMode', newDarkMode ? 'enabled' : 'disabled');

    applyDarkMode(newDarkMode);
}

darkModeToggle.addEventListener('click', toggleDarkMode);

const storedDarkMode = localStorage.getItem('darkMode') === 'enabled';
applyDarkMode(storedDarkMode);