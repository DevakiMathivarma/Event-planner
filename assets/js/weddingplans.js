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
        document.getElementById("popup").style.display = "block"; // Show popup
        setTimeout(() => {
            document.getElementById("popup").style.display = "none"; // Hide popup after 3 seconds
        }, 3000);
        document.getElementById("login-form").reset(); // Clear form
        document.getElementById("form").style.display = "none"; // Hide form after submission
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

