const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const buttonInsert = document.getElementById("buttonInsert");
const lsOutput = document.getElementById("lsOutput");

buttonInsert.onclick = function () {
  const key = inputKey.value;
  const value = inputValue.value;

  // console.log(key);
  // console.log(value);

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  lsOutput.innerHTML += `${key}: ${value}<br>`;
}

let myObject = {
  name: "Karmila",
  age: 22
};

let myObject_serialized = JSON.stringify(myObject);
console.log(myObject_serialized);

localStorage.setItem("myObject", myObject_serialized);

let myObject_deserialized = JSON.parse(localStorage.getItem("myObject"));

console.log(myObject_deserialized);
