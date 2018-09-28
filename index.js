let hamMenu = document.getElementById("menu");
let navbar = document.getElementById('navbar');
let bar = document.querySelector(".fa-bars");
let content = document.querySelector(".content");

hamMenu.addEventListener("click", () => {
    navbar.classList.toggle('active-navbar');
    content.classList.toggle('content-margin');
});
