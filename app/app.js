var showmobile = document.getElementById("showmobile");
var nav = document.getElementById("nav");
var exitnav = document.getElementById("exitnav");

showmobile.addEventListener("click", function (e) {
  nav.classList.toggle("navbar");
  e.preventDefault();
});

exitnav.addEventListener("click", function (e) {
  nav.classList.add("navbar");
  e.preventDefault();
});
