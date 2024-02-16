const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
  const userMail = form.elements.email.value;
  const userText = form.elements.message.value;

  const data = {
    email: userMail,
    message: userText,
  };

  saveInLS(STORAGE_KEY, data);
});

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

// function saveInLS(key, value) {
//   const jsonSave = JSON.stringify(value);
//   localStorage.setItem(key, jsonSave);
// }
function saveInLS(key, value) {
  const trimmedValue = {
    email: value.email.trim(),
    message: value.message.trim(),
  };
  const jsonSave = JSON.stringify(trimmedValue);
  localStorage.setItem(key, jsonSave);
}


function loadData() {
  const { email, message } = loadFromLS(STORAGE_KEY) || {};
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
}

loadData();

form.addEventListener('submit', e => {
  e.preventDefault();

  if (form.elements.email.value && form.elements.message.value !== '') {
    const data = loadFromLS(STORAGE_KEY) || {};
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    const sendData = {
      email: data.email,
      message: data.message,
    };
    console.log(sendData);
  } else {
    alert(`Please fill in all form fields before submitting.`);
  }
});
