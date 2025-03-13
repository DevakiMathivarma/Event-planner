const btn = document.getElementById('toggle-btn')
const navlinks = document.getElementById('nav-links')
btn.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})
const togglebtn = document.getElementById('togglebtn')
const form = document.getElementById('form')
togglebtn.addEventListener('click', () => {
    form.classList.toggle('active')
})
const popup = document.getElementById('popup')
const connectbtn = document.getElementById('connect')
const form1 = document.getElementById('login-form')
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    popup.style.display = "flex";

    setTimeout(() => {
    popup.style.display = "none";
}, 3000);
})
const appbtn = document.getElementById('appbtn')
const appform = document.getElementById('appointment-form')
appbtn.addEventListener('click', () => {
    appform.classList.toggle('active')
})
