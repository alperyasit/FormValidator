const form = document.querySelector(`#form`);
const username = document.querySelector(`#username`);
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    success(input);
  } else {
    error(input, "hatalı mail adresi");
  }
}

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid";
}

function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required`);
    } else {
      success(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} en az ${min} karakterden oluşmalıdır`);
  } else if (input.value.length > max) {
    error(input, `${input.id} en fazla ${max} karakterden oluşmalıdır`);
  } else {
    success(input);
  }
}

function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    error(input2, "parolalar eşleşmiyor");
  }
}

function checkPhone(input) {
  var exp = /^\d{10}$/;
  if (!exp.test(input.value)) {
    error(input, "telefon numarası 10 haneli olmalıdır");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, phone, password, repassword]);
  checkEmail(email);
  checkLength(username, 7, 15);
  checkLength(password, 7, 12);
  checkPasswords(password, repassword);
  checkPhone(phone);
});
