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

//DRAG AND DROP section
document.querySelectorAll(".drop-zone-input").forEach(inputElement => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", e => {
    inputElement.click();
  });

  inputElement.addEventListener("change", e => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", e => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone-over");
  });

  ["dragleave", "dragend"].forEach(type => {
    dropZoneElement.addEventListener(type, e =>{
      dropZoneElement.classList.remove("drop-zone-over");
    });
  });

  dropZoneElement.addEventListener("drop", e => {
    e.preventDefault();
    // console.log(e.dataTransfer.files);

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone-over");
  });

  function updateThumbnail(dropZoneElement, file) {
    // console.log(dropZoneElement);
    // console.log(file);
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone-thumbnail");

    //removing the prompt the first time
    if (dropZoneElement.querySelector(".drop-zone-prompt")) {
      dropZoneElement.querySelector(".drop-zone-prompt").remove();
    }

    //creating thumbnail element for the first time
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone-thumbnail");
      dropZoneElement.appendChild(thumbnailElement);
    }

    // thumbnailElement.dataset.label = file.name;

    //show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }

});

function rememberMe() {
  localStorage.setItem("recepient", recepient.value);
  localStorage.setItem("sender", sender.value);

  document.getElementById("kepada").innerHTML = localStorage.getItem("recepient");
  document.getElementById("daripada").innerHTML = localStorage.getItem("sender");
}

if ("kepada" != null) {
  document.getElementById("kepada").innerHTML = localStorage.getItem("recepient");
}
if ("daripada" != null) {
  document.getElementById("daripada").innerHTML = localStorage.getItem("sender");
}

$('.addToFavBtn').on('click', event => {
var template2 = $(event.target).parents()[1].firstElementChild.innerHTML;

var favorites = localStorage.getItem("favorites");
if (!favorites){
  localStorage.setItem("favorites", JSON.stringify({favTemplate:[]}));
  favorites = JSON.parse(localStorage.getItem("favorites"));
}else{
  favorites = JSON.parse(favorites);
}

favorites.favTemplate.push(template2);

localStorage.setItem("favorites", JSON.stringify(favorites));

});
