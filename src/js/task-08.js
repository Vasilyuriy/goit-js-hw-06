const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Зупиняє перезавантаження сторінки при відправленні форми

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Будь ласка, заповніть всі поля");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);
    form.reset();
  }
});
