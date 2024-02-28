const formPhone = document.getElementById('phone');
const formName = document.getElementById('name');

const regularLetters = /[A-Za-zА-Яа-яЁё]/g;
const regularnumbers = /[0-9]/g;

formPhone.addEventListener('input', (e) => {
  if (e.target.value.match(regularLetters)) {
    e.target.value = e.target.value.replace(regularLetters, '');
    formPhone.classList.add('inputError');
    formPhone.classList.remove('inputGood');
  } else {
    formPhone.classList.remove('inputError');
    formPhone.classList.add('inputGood');
  }
  if (e.target.value === '') {
    formPhone.classList.remove('inputError');
    formPhone.classList.remove('inputGood');
  }
});

formName.addEventListener('input', (e) => {
  if (e.target.value.match(regularnumbers)) {
    e.target.value = e.target.value.replace(regularnumbers, '');
    formName.classList.add('inputError');
    formName.classList.remove('inputGood');
  } else {
    formName.classList.remove('inputError');
    formName.classList.add('inputGood');
    // formName.style.borderColor = 'transparent';
  }

  if (e.target.value === '') {
    formName.classList.remove('inputError');
    formName.classList.remove('inputGood');
    // formName.style.borderColor = 'salmon';
  }

  formName.onfocus = () => {
    if (formName.value.length > 0) {
      formName.classList.add('inputGood');
    }
  };
});

formName.addEventListener('blur', (elem) => {
  if (elem) {
    formName.classList.remove('inputGood');
    formName.classList.remove('inputError');
    // formName.style.borderColor = 'transparent';
  }
});
