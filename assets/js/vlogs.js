


const btn = document.getElementById('toggle-btn')
const navlinks = document.getElementById('nav-links')
btn.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})

const togglebtn = document.getElementById('togglebtn');
const form = document.getElementById('form');
const form1 = document.getElementById('login-form');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close i');


togglebtn.addEventListener('click', () => {
    form.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    form.classList.remove('active');
    clearErrors()
});
function clearErrors() {
    document.querySelectorAll('.error').forEach(error => error.textContent = ""); 
    document.querySelectorAll('.input input').forEach(input => input.style.border = ""); 
}


// Validation function
function validateForm() {
    let isValid = true;

    // Selecting input fields and error message spans
    const name = document.getElementById('name');
    const contact = document.getElementById('contact');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const nameError = document.getElementById('name-error');
    const contactError = document.getElementById('contact-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Enter your name";
        name.style.border = "2px solid red";
        isValid = false;
    } else {
        nameError.textContent = "";
        name.style.border = "2px solid green";
    }

    // Contact validation (only numbers)
    if (/^\d{10}$/.test(contact.value.trim())) {
        contactError.textContent = "";
        contact.style.border = "2px solid green";
    } else {
        contactError.textContent = "Enter a valid 10-digit number";
        contact.style.border = "2px solid red";
        isValid = false;
    }

    // Email validation
    if (email.value.trim().includes("@") && email.value.trim().includes(".")) {
        emailError.textContent = "";
        email.style.border = "2px solid green";
    } else {
        emailError.textContent = "Enter a valid email";
        email.style.border = "2px solid red";
        isValid = false;
    }

    // Password validation (minimum 8 characters)
    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        password.style.border = "2px solid red";
        isValid = false;
    } else {
        passwordError.textContent = "";
        password.style.border = "2px solid green";
    }

    return isValid;
}

// Form submission with validation
form1.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm()) {

        const userData = {
            name: document.getElementById('name').value.trim(),
            contact: document.getElementById('contact').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim(),
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        popup.style.display = "flex";

        setTimeout(() => {
            popup.style.display = "none";
            form.classList.remove('active');
        }, 3000);

        form1.reset();
    }
});

