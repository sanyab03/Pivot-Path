var x =document.getElementById("login");
var y =document.getElementById("signup");
var z =document.getElementById("btn");

function signup(){
  x.style.left ="-400px";
  y.style.left ="50px";
  z.style.left ="110px";
  document.querySelector("#login .toggle-btn").style.color = "black";
      document.querySelector("#signup .toggle-btn").style.color = "white";
}
function login(){
  x.style.left ="50px";
  y.style.left ="450px";
  z.style.left ="0";
  document.querySelector("#signup .toggle-btn").style.color = "black";
  document.querySelector("#login .toggle-btn").style.color = "white";
}