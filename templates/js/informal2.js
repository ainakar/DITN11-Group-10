function open_card() {
  document.getElementById('cover').className = 'open-card';
}

function close_card() {
  document.getElementById('cover').className = '';
}

const storageInput = document.querySelector('.storage');
const message = document.querySelector('.message');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('messageInput2');

if (storageInput) {
  message.textContent = storedInput;
}

storageInput.addEventListener('input', letter => {
  message.textContent = letter.target.value;
})

const saveToLocalStorage = () => {
  localStorage.setItem('messageInput2', message.textContent);
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
