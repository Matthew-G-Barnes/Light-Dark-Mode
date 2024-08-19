const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

let isDark = '';

// Toggle Image Colour
function toggleImage(mode) {
    const imgSrc = [`img/undraw_engineering_team_${mode}.svg`, `img/undraw_video_games_${mode}.svg`, `img/undraw_reading_time_${mode}.svg`];

    for (let index = 0; index < imgSrc.length; index++) {
        const imageElement = document.getElementById(`image${(index+1)}`);
        if (imageElement) {
            imageElement.src = imgSrc[index]
        }
    }
}

// Toggles between light and dark
function toggleDarkLightMode() {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? `Dark Mode` : 'Light Mode';
    toggleIcon.children[1].classList.replace(isDark ? 'fa-sun' : 'fa-moon', isDark ? 'fa-moon': 'fa-sun');
    toggleImage((isDark ? 'dark' : 'light'));
    localStorage.setItem('isDark', isDark);
}

// Switch Theme Dynamically
function switchTheme(event) {
    try {isDark = event.target.checked} catch {console.log('no event data');}
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    toggleDarkLightMode();
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme)

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('isDark');
if (currentTheme !== null) {
    isDark = (currentTheme === 'true');
    toggleSwitch.checked = isDark;
    switchTheme();
}