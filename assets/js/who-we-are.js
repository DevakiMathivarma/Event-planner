
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


// get in touch form
document.getElementById("getQuoteBtn").addEventListener("click", function () {
    document.getElementById("getInTouchForm").classList.add("active");
});

// Close button functionality
document.getElementById("closeGetInTouch").addEventListener("click", function () {
    document.getElementById("getInTouchForm").classList.remove("active");
});

// Function to show popup
function showPopup() {
    let popup = document.getElementById("get-in-touch-popup");
    if (!popup) {
        console.error("Popup element not found!");
        return;
    }
    popup.style.display = "block"; 
    console.log("Popup displayed");

    
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}

// Real-time validation for inputs
document.querySelectorAll(".input-box input, textarea").forEach(input => {
    input.addEventListener("input", function () {
        validateInput(this);
    });
});

function validateInput(input) {
    let value = input.value.trim();
    let errorMessage = input.nextElementSibling;

    if (!errorMessage || !errorMessage.classList.contains("error-message")) {
        errorMessage = document.createElement("span");
        errorMessage.classList.add("error-message");
        input.parentNode.appendChild(errorMessage);
    }

    if (value === "") {
        input.style.border = "2px solid red";
        errorMessage.textContent = `${input.placeholder} is required`;
    } else {
        input.style.border = "1px solid #FF007F";
        errorMessage.textContent = "";
    }

    // Email validation
    if (input.id === "emailAddress" && value !== "") {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            input.style.border = "2px solid red";
            errorMessage.textContent = "Enter a valid email address";
        }
    }

    // Mobile number validation (10 digits)
    if (input.id === "mobileNumber" && value !== "") {
        let mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(value)) {
            input.style.border = "2px solid red";
            errorMessage.textContent = "Enter a valid 10-digit mobile number";
        }
    }
}

// Form submission validation
document.getElementById("getInTouchFormID").addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    document.querySelectorAll(".input-box input, textarea").forEach(input => {
        validateInput(input);
        if (input.value.trim() === "") {
            isValid = false;
        }
    });

    if (isValid) {
        showPopup();
        document.getElementById("getInTouchFormID").reset(); 
    }
});
