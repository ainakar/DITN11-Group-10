var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails(){
  var heading = document.getElementById("heading").value;
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var place = document.getElementById("place").value;

  if(!heading || !name1 || !name2 || !date || !time || !place){
    alert("Please fill in all the boxes");
    return;
  }

  

}
