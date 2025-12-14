emailjs.init("E8UEc3K1GpLL58GlV"); // Replace with your EmailJS Public Key

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");
const btn = document.querySelector(".submit-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  message.style.display = "none";

  emailjs
    .sendForm("service_lzjfbnw", "template_ciice8j", this)
    .then(() => {
      message.textContent = "Thank you! Your message has been sent.";
      message.className = "form-message success";
      message.style.display = "block";
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      message.textContent = "Failed to send. Please try again.";
      message.className = "form-message error";
      message.style.display = "block";
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
    });
});