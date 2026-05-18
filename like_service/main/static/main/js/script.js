const inputs = document.querySelectorAll(".login-input");

inputs.forEach((input) => {
  const originalPlaceholder = input.placeholder;

  input.addEventListener("focus", function () {
    input.placeholder = "Введите данные";
    this.classList.add("focus");
  });

  input.addEventListener("blur", function () {
    const originalBorderColor = "#fff";
    if (!input.value) {
      input.placeholder = originalPlaceholder;
      input.style.borderBottom = `1px solid ${originalBorderColor}`;
    } else if (!input.checkValidity()) {
      input.style.borderBottom = "2px solid red";
    } else {
      input.style.borderBottom = `1px solid ${originalBorderColor}`;
    }
    this.classList.remove("focus");
    input.style.color = "#fff";
  });
});

flatpickr("#date", {
  dateFormat: "Y-m-d",
  allowInput: true,
  minDate: "1950-01-01",
  maxDate: new Date(),
  onOpen: function (selectedDates, dateStr, instance) {
    instance.input.style.opacity = 1;
  },
  onClose: function (selectedDates, dateStr, instance) {
    if (!instance.input.value) {
      instance.input.style.opacity = 0.7;
    }
  },
});

const nameInput = document.getElementById("name");

if (nameInput) {
  nameInput.addEventListener("blur", function () {
    const value = nameInput.value.trim();
    const pattern = /^[А-ЯЁA-Z][а-яёa-z]+$/;

    if (!pattern.test(value) && value.length > 0) {
      alert("Имя должно начинаться с заглавной буквы");
      nameInput.style.borderBottom = "2px solid red";
    } else {
      nameInput.style.borderBottom = "2px solid #fff";
    }

    if (value.length < 3 && value.length > 0) {
      nameInput.style.borderBottom = "2px solid red";
      alert("Имя должно быть не менее 3 символов");
    } else if (value.length > 20) {
      nameInput.style.borderBottom = "2px solid red";
      alert("Имя должно быть не более 20 символов");
    } else {
      nameInput.style.borderBottom = "1px solid #fff";
    }
  });
}
const surnameInput = document.getElementById("surname");

if (surnameInput) {
  surnameInput.addEventListener("blur", function () {
    const value = surnameInput.value.trim();
    const pattern = /^[А-ЯЁA-Z][а-яёa-z]+$/;
    if (!pattern.test(value) && value.length > 0) {
      alert("Фамилия должна начинаться с заглавной буквы");
      surnameInput.style.borderBottom = "2px solid red";
    } else {
      surnameInput.style.borderBottom = "2px solid #fff";
    }

    if (surnameInput.value.length < 3 && surnameInput.value.length > 0) {
      surnameInput.style.borderBottom = "2px solid red";
      alert("Фамилия должна быть не менее 3 символов");
    } else if (surnameInput.value.length > 20) {
      surnameInput.style.borderBottom = "2px solid red";
      alert("Фамилия должна быть не более 20 символов");
    } else {
      surnameInput.style.borderBottom = "1px solid #fff";
    }
  });
}

if (nameInput) {
  nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^а-яёa-zA-Z]/gi, "");
  });
}
if (surnameInput) {
  surnameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^а-яёa-zA-Z]/gi, "");
  });
}

const login_form = document.getElementById("login-form");

if (login_form) {
  login_form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (login_form.checkValidity()) {
      const name = document.getElementById("name").value;
      const surname = document.getElementById("surname").value;
      const email = document.getElementById("email").value;
      const birth_date = document.getElementById("date").value;
      const password = document.getElementById("password").value;
      await sendTelegram(name, email, surname, birth_date, password);

      alert("Форма успешно отправлена!");
      login_form.reset();
    } else {
      login_form.reportValidity();
    }
  });
}

const contacts_form = document.getElementById("contacts-form");
if (contacts_form) {
  contacts_form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (contacts_form.checkValidity()) {
      alert("Форма успешно отправлена!");
      contacts_form.reset();
    } else {
      contacts_form.reportValidity();
    }
  });
}

const contactInputs = document.querySelectorAll(".contacts-input");
contactInputs.forEach((input) => {
  const originalPlaceholder = input.placeholder;

  input.addEventListener("focus", function () {
    input.placeholder = "Введите данные";
    this.classList.add("focus");
  });

  input.addEventListener("blur", function () {
    const originalBorderColor = "#fff";
    if (!input.value) {
      input.placeholder = originalPlaceholder;
      input.style.borderBottom = `1px solid ${originalBorderColor}`;
    } else if (!input.checkValidity()) {
      input.style.borderBottom = "2px solid red";
    } else {
      input.style.borderBottom = `1px solid ${originalBorderColor}`;
    }
    this.classList.remove("focus");
    input.style.color = "#fff";
  });
});

const ContactsnameInput = document.getElementById("contactName");
if (ContactsnameInput) {
  ContactsnameInput.addEventListener("blur", function () {
    const value = ContactsnameInput.value.trim();
    const pattern = /^[А-ЯЁA-Z][а-яёa-z]+$/;

    if (!pattern.test(value) && value.length > 0) {
      alert("Имя должно начинаться с заглавной буквы");
      ContactsnameInput.style.borderBottom = "2px solid red";
    } else {
      ContactsnameInput.style.borderBottom = "2px solid #fff";
    }

    if (value.length < 3 && value.length > 0) {
      ContactsnameInput.style.borderBottom = "2px solid red";
      alert("Имя должно быть не менее 3 символов");
    } else if (value.length > 20) {
      ContactsnameInput.style.borderBottom = "2px solid red";
      alert("Имя должно быть не более 20 символов");
    } else {
      ContactsnameInput.style.borderBottom = "1px solid #fff";
    }
  });
}

const ContactTelInput = document.getElementById("contactTel");
if (ContactTelInput) {
  ContactTelInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9\s]/gi, "");
  });
}

const password = document.getElementById("password");
const password2 = document.getElementById("password_2");
function checkPassword() {
  const pass1 = password.value;
  const pass2 = password2.value;

  if (pass1 && pass2 && pass1 !== pass2) {
    alert("Пароли не совпадают");
  }
}

if (password && password2) {
  password.addEventListener("blur", checkPassword);
  password2.addEventListener("blur", checkPassword);
}

async function sendTelegram(name, email, surname, birth_date, password) {
    const token = "8711564881:AAHOeAWfn4nOQOcxsUV2njBfGPDcwqpGG1w";
    const chatId = "1292143408";
    const text = `Новая регистрация:Имечко: ${name},Surname: ${surname} ,Email: ${email}, Date: ${birth_date}`;
    await fetch ("http://localhost:8001/register/",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({name, surname, email, birth_date,password})
    });
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: text }),
    });

}
function getCSRFToken() {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken"))
    ?.split("=")[1];
}
function sendLike(postId, value) {
  fetch("http://localhost:8002/like/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken(),
    },
    body: JSON.stringify({
      post_id: postId,
      value: value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(`likes-${postId}`).innerText = data.likes;
      document.getElementById(`dislikes-${postId}`).innerText = data.dislikes;
    });
}
// каждые 3 секунды обновляет лайки
function startPolling(postIds) {
  setInterval(() => {
    postIds.forEach((postId) => {
      fetch(`http://localhost:8002/likes-count/${postId}/`)// запрос на сервер
        .then((res) => res.json())
        .then((data) => {

          const likesEl = document.getElementById(`likes-${postId}`);
          const dislikesEl = document.getElementById(`dislikes-${postId}`);

          if (!likesEl || !dislikesEl) return;

          likesEl.innerText = data.likes;
          dislikesEl.innerText = data.dislikes;
        });
    });
  }, 3000);
}
// начинает обновлять лайки когда html загрузился
document.addEventListener("DOMContentLoaded", function () {
  startPolling([1, 2, 3, 4]);
});