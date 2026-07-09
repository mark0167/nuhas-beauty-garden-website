/* =========================
   NUHAS BEAUTY GARDEN
   JAVASCRIPT
========================= */


// Mobile Menu

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");


menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});




// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});






// Scroll animation

const sections = document.querySelectorAll("section");


const revealSection = () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};



sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "1s ease";

});



window.addEventListener("scroll", revealSection);

revealSection();






// Booking message generator


function bookService(service){

    const phone = "251905504444";

    const message =
    `Hello Nuhas Beauty Garden, I would like to book ${service}. Please provide available times.`;

    const whatsappURL =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank");

}




// Add current year automatically


const footerYear = document.querySelector("footer p");


if(footerYear){

footerYear.innerHTML =
`© ${new Date().getFullYear()} Nuhas Beauty Garden. All Rights Reserved.`;

}
