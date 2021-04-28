function open_card() {
  document.getElementById('cover').className = 'open-card';
}

function close_card() {
  document.getElementById('cover').className = '';
}

const storageInput = document.querySelector('.storage');
const message = document.querySelector('.message');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('messageInput');

if (storageInput) {
  message.textContent = storedInput;
}

storageInput.addEventListener('input', letter => {
  message.textContent = letter.target.value;
})

const saveToLocalStorage = () => {
  localStorage.setItem('messageInput', message.textContent);
}

button.addEventListener('click', saveToLocalStorage);
