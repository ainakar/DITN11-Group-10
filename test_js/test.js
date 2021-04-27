alert("Hello Iwan, input your name in the next text box and check console from inspect element");
document.getElementById("button").onclick = function() {
  document.getElementById("finish").innerHTML = "Completed! Check email for confirmation";
  document.getElementById("button").style.display = "none";
}

var username = prompt();
//alert(username); //is a pop-up
console.log(username);

var message = "Nice one, " + username;
console.log(message); //look at the console from inspect element

(function() {
  /*IIFE - Immediately Invoked Function Expression
  to avoid naming conflicts*/

  var age = 5;
  console.log(age);
})();
