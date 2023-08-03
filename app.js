//for toggle active navigation item
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.querySelector("a.active").classList.remove("active");
    e.target.classList.add("active");
  });
});

//for validate the message form
const usernameEl = document.querySelector("#username");
const phoneEl = document.querySelector("#phone");
const emailEl = document.querySelector("#email");
const messageEl = document.querySelector("#message");
const form = document.querySelector("#contact-form");

const checkUsername = () => {
  let valid = false;
  const min = 4,
    max = 15;
  const username = usernameEl.value.trim();
  if (!isRequired(username)) {
    showError(usernameEl, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameEl,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const checkPhone = () => {
  const phone = phoneEl.value;
  if (!isRequired(phone)) {
    showError(phoneEl, "Phone cannot be blank.");
  } else {
    showSuccess(phoneEl);
    valid = true;
  }
  return valid;
};

const checkMessage = () => {
  let valid = false;

  const message = messageEl.value;
  if (!isRequired(message)) {
    showError(messageEl, "Message cannot be blank.");
  } else {
    showSuccess(messageEl);
    valid = true;
  }
  return valid;
};
const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // validate fields
  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPhoneValid = checkPhone(),
    isMessageValid = checkMessage();

  let isFormValid =
    isUsernameValid && isEmailValid && isPhoneValid && isMessageValid;
  // submit to the server if the form is valid
  if (isFormValid) {
  }
});

form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "username":
      checkUsername();
      break;
    case "email":
      checkEmail();
      break;
    case "phone":
      checkPhone();
      break;
    case "message":
      checkMessage();
      break;
  }
});
