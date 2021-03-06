//draganddrop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


//colorpicker
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: '#000000',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor);
    document.querySelector('#blankcanvas').style.background = rgbaColor;
})

const storageInput = document.querySelector('.storage');
const message = document.querySelector('.message');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('messageInput3');

if (storageInput) {
  message.textContent = storedInput;
}

storageInput.addEventListener('input', letter => {
  message.textContent = letter.target.value;
})

const saveToLocalStorage = () => {
  localStorage.setItem('messageInput3', message.textContent);
}

button.addEventListener('click', saveToLocalStorage);
