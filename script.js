var button = document.getElementById("hi");
var h1 = document.getElementById("garcia")
var body = document.body;

body.setAttribute("style", "background-color: white");
button.addEventListener("click", function(){

console.log("click");
body.setAttribute("style", "color: white");
body.setAttribute("style", "background-color: red ");
});