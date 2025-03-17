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



// appointment form

document.addEventListener("DOMContentLoaded", function () {
    const appbtn = document.getElementById("appbtn");
    const appform = document.getElementById("appointment-form");
    const closeFormBtn = document.querySelector(".close-btn i"); // Close icon
    const apptForm = document.getElementById("appt-login-form");
    const apptPopup = document.getElementById("appointment-popup");

    const apptName = document.getElementById("appt-name");
    const apptContact = document.getElementById("appt-contact");
    const apptEmail = document.getElementById("appt-email");
    const apptMessage = document.getElementById("appt-message");

    // Function to show error
    function showError(input, message) {
        const errorMsg = input.closest(".input1").querySelector(".error-msg");
        errorMsg.innerText = message;
        errorMsg.style.display = "block";
    }

    // Function to clear error
    function clearError(input) {
        const errorMsg = input.closest(".input1").querySelector(".error-msg");
        errorMsg.style.display = "none";
    }

    // Open the form
    appbtn.addEventListener("click", () => {
        appform.classList.add("active");
    });

    // Close the form and reset fields
    closeFormBtn.addEventListener("click", () => {
        appform.classList.remove("active");
        apptForm.reset();
        document.querySelectorAll(".error-msg").forEach(msg => msg.style.display = "none");
    });

    // Email live validation while typing
    apptEmail.addEventListener("input", function () {
        if (!/\S+@\S+\.\S+/.test(apptEmail.value)) {
            showError(apptEmail, "Enter a valid email");
        } else {
            clearError(apptEmail);
        }
    });

    // Contact number live validation while typing
    apptContact.addEventListener("input", function () {
        if (!/^\d{10}$/.test(apptContact.value)) {
            showError(apptContact, "Enter a valid 10-digit number");
        } else {
            clearError(apptContact);
        }
    });

    // Form submission validation
    apptForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        if (apptName.value.trim() === "") {
            showError(apptName, "Name is required");
            isValid = false;
        } else {
            clearError(apptName);
        }

        if (!/^\d{10}$/.test(apptContact.value)) {
            showError(apptContact, "Enter a valid 10-digit number");
            isValid = false;
        } else {
            clearError(apptContact);
        }

        if (!/\S+@\S+\.\S+/.test(apptEmail.value)) {
            showError(apptEmail, "Enter a valid email");
            isValid = false;
        } else {
            clearError(apptEmail);
        }

        if (apptMessage.value.trim() === "") {
            showError(apptMessage, "Message cannot be empty");
            isValid = false;
        } else {
            clearError(apptMessage);
        }

        if (isValid) {
            appform.classList.remove("active");
            apptForm.reset();
            apptPopup.style.display = "flex";
            setTimeout(() => apptPopup.style.display = "none", 3000);
        }
    });
});

