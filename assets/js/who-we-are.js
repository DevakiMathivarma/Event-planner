
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
    document.getElementById("name-error").innerText = "";
    document.getElementById("contact-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("password-error").innerText = "";
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
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        passwordError.innerText = "Includes 1uppercase,1 lowercase,1 number, and1 special character";
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


// get in touch form
document.getElementById("getQuoteBtn").addEventListener("click", function () {
    document.getElementById("getInTouchForm").classList.add("active");
});

// Close button functionality
document.getElementById("closeGetInTouch").addEventListener("click", function () {
    let form = document.getElementById("getInTouchFormID");
    document.getElementById("getInTouchForm").classList.remove("active");
    document.querySelectorAll(".input-box input, textarea").forEach(input => {
        input.value = ""; // Clear input values
        input.style.border = "1px solid #FF007F"; // Reset border color
    });

    // Remove error messages
    document.querySelectorAll(".error-message").forEach(error => {
        error.textContent = ""; // Remove error text
    });

    // Uncheck all checkboxes
    document.querySelectorAll(".form2 input[type='checkbox']").forEach(checkbox => {
        checkbox.checked = false;
    });
   
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
