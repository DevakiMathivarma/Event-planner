


const btn = document.getElementById('toggle-btn')
const navlinks = document.getElementById('nav-links')
btn.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})
// login_form
document.getElementById("togglebtn").addEventListener("click", function () {
    let formSection = document.getElementById("form");
    formSection.style.display = (formSection.style.display === "none" || formSection.style.display === "") ? "block" : "none";
});


document.querySelector(".close i").addEventListener("click", function () {
    document.getElementById("form").style.display = "none";
});

document.getElementById("contact").addEventListener("input", function () {
    let contact = this.value.trim();
    let contactError = document.getElementById("contact-error");

    if (!/^\d{10}$/.test(contact)) {
        contactError.innerText = "Enter a valid 10-digit contact number";
    } else {
        contactError.innerText = ""; // Remove error when valid
    }
});

// Form Validation on Submit
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get input values
    let name = document.getElementById("name").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Get error elements
    let nameError = document.getElementById("name-error");
    let contactError = document.getElementById("contact-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");

    // Clear previous errors
    nameError.innerText = "";
    contactError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";

    // Name Validation: Must be at least 3 characters and contain only letters
    if (name.length < 3 || !/^[a-zA-Z ]+$/.test(name)) {
        nameError.innerText = "Enter a valid name (at least 3 letters)";
        isValid = false;
    }

    // Contact Validation: Must be exactly 10-digit number
    if (!/^\d{10}$/.test(contact)) {
        contactError.innerText = "Enter a valid 10-digit contact number";
        isValid = false;
    }

    // Email Validation: Must follow correct email pattern
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.innerText = "Enter a valid email address";
        isValid = false;
    }

    // Password Validation: Must be at least 6 characters long
    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    // If all validations pass, show popup and reset form
    if (isValid) {
        let userData = {
            name: name,
            contact: contact,
            email: email,
            password: password
        };
        localStorage.setItem("user", JSON.stringify(userData));
        document.getElementById("popup").style.display = "block"; // Show popup
        setTimeout(() => {
            document.getElementById("popup").style.display = "none"; // Hide popup after 3 seconds
        }, 3000);
        document.getElementById("login-form").reset(); // Clear form
        document.getElementById("form").style.display = "none"; // Hide form after submission
    }
});

// contact form validation
document.addEventListener("DOMContentLoaded", function () {
    const dropForm = document.getElementById("drop-us-a-line-form");
    const dropPopup = document.getElementById("drop-us-a-line-popup");

    const dropName = document.getElementById("drop-name");
    const dropEmail = document.getElementById("drop-email");
    const dropPhone = document.getElementById("drop-phone");
    const dropChoice = document.getElementById("drop-choice");
    const dropMessage = document.getElementById("drop-message");

    function showError(input, message) {
        const errorMsg = input.nextElementSibling;
        errorMsg.innerText = message;
       
    }

    function clearError(input) {
        const errorMsg = input.nextElementSibling;
        errorMsg.style.display = "none";
    }

    // Real-time Email Validation
    dropEmail.addEventListener("input", function () {
        if (!/\S+@\S+\.\S+/.test(dropEmail.value)) {
            showError(dropEmail, "Enter a valid email");
        } else {
            clearError(dropEmail);
        }
    });

    // Real-time Phone Number Validation (10 Digits)
    dropPhone.addEventListener("input", function () {
        if (!/^\d{10}$/.test(dropPhone.value)) {
            showError(dropPhone, "Enter a valid 10-digit number");
        } else {
            clearError(dropPhone);
        }
    });

    // Form Submission Validation
    dropForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        if (dropName.value.trim() === "") {
            showError(dropName, "Name is required");
            isValid = false;
        } else {
            clearError(dropName);
        }

        if (!/\S+@\S+\.\S+/.test(dropEmail.value)) {
            showError(dropEmail, "Enter a valid email");
            isValid = false;
        } else {
            clearError(dropEmail);
        }

        if (!/^\d{10}$/.test(dropPhone.value)) {
            showError(dropPhone, "Enter a valid 10-digit number");
            isValid = false;
        } else {
            clearError(dropPhone);
        }

        if (dropChoice.value.trim() === "") {
            showError(dropChoice, "Choice is required");
            isValid = false;
        } else {
            clearError(dropChoice);
        }

        if (dropMessage.value.trim() === "") {
            showError(dropMessage, "Message cannot be empty");
            isValid = false;
        } else {
            clearError(dropMessage);
        }

        if (isValid) {
            dropForm.reset();
            dropPopup.style.display = "flex";
            setTimeout(() => dropPopup.style.display = "none", 3000);
        }
    });
});