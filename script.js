const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    if (fullName.length < 5) {
        displayError('nameError', 'Name must be at least 5 characters.');
        isValid = false;
    }

    if (!email.includes('@')) {
        displayError('emailError', 'Enter a valid email.');
        isValid = false;
    }

    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        displayError('phoneError', 'Phone must be 10 digits and not "123456789".');
        isValid = false;
    }

    if (password === 'password' || password === fullName.toLowerCase() || password.length < 8) {
        displayError('passwordError', 'Password must be strong and at least 8 characters.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

function displayError(id, message) {
    document.getElementById(id).innerText = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');
}
