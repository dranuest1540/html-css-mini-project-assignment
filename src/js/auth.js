// Password Hidden/Not 
function togglePassword(inputId, buttonId) {
    const input = document.getElementById(inputId);;
    const button = document.getElementById(buttonId);
    const icon = button.querySelector("i");

    button.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
}

togglePassword("password", "togglePassword");
togglePassword("confirm", "toggleConfirm");