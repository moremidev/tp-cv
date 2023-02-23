// Seleccion contact left panel
const btn = document.querySelector("#btn-user");
const avatar = document.querySelector('#avatar');
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const place = document.querySelector("#location")

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});


// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

//Fech Api
const getUser = async () => {
    try {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const { results } = await response.json();
    const data = results[0];

    //console.log(data);

    avatar.src = data.picture.large;
    name.textContent = `${data.name.first}  ${data.name.last}`;
    email.textContent = data.email;
    phone.textContent = data.phone;
    place.textContent = `${data.location.country} ${data.location.city}`;

    } catch (error) {
    console.log(error)
    }
};

