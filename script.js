const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // O código abaixo é para verificar se o campo nome está vazio.

  if (nameInput.value === "") {
    alert("por favor, preencha o seu nome!!!.");
    return;
  }

  // O código abaixo é para verificar se o campo e-mail está preenchido e se é válido.

  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("por favor, preencha o seu email!!!.");
    return;
  }

  // O código abaixo é para verificar se o campo senha está preenchido.

  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ser no minimo de 8 digitos.");
    return;
  }

  // O código abaixo é para verificar se a situação foi selecionada.

  if (jobSelect.value === "") {
    alert("por favor, selecione a sua situação");
    return;
  }

  // O código abaixo é para verificar se a mensagem está preenchida.

  if (messageTextarea.value === "") {
    alert("por favor, escreva uma mensagem!!!.");
    return;
  }

  // O código abaixo e para verificar se todos os campos entiverem preenchidos corretamente, enviar o form.

  form.submit();
});

// O código abaixo é para função que válida o e-mail.

function isEmailValid(email) {
  // O código abaixo é para criar uma regex para validar o email.

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

// O código abaixo é para validar a senha.

function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    // senha valida.
    return true;
  }
  // senha inválida
  return false;
}
