const switchToggle = document.querySelector('input[type="checkbox"]')
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
        switchImgMode('dark');
    } else {
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
        switchImgMode('light');
    }
    
};

function darkMode() {
    console.log('Dark mode');
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0 / 50%';
}

function lightMode() {
    console.log('Light mode');
    toggleIcon.children[0].textContent='Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    
}

function switchImgMode(mode) {
    img1.src=`/DarkandLightmode/img/undraw_website_${mode}.svg`
    img2.src=`/DarkandLightmode/img/undraw_freelancer_${mode}.svg`
    img3.src=`/DarkandLightmode/img/undraw_projections_${mode}.svg`
    
}
switchToggle.addEventListener('change',switchMode)
