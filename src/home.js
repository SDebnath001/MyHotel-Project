
// Navigation Links Code
const navLinks = document.querySelectorAll(".nav-links");

navLinks.forEach(navLinks => {
    navLinks.addEventListener("click", () => {
        document.querySelector(".active-nav").classList.remove("active-nav");
        navLinks.classList.add("active-nav");
        console.log('nav-link clicked');
    })
});


// Form Submit event
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const Fdata = new FormData(form);
    const obj = Object.fromEntries(Fdata);
    console.log(obj);

    const jsonData = JSON.stringify(obj);
    localStorage.setItem("form", jsonData);

    location.href = "Thanks.html";
})

