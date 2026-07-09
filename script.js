/* ==================================
   NUHAS BEAUTY GARDEN
   PREMIUM VERSION 2 SCRIPT
================================== */


// MOBILE MENU

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");


if(menuIcon){

menuIcon.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

}



// Close mobile menu when clicking links

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

    navLinks.classList.remove("active");

});

});






// NAVBAR EFFECT ON SCROLL


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 80){

    header.style.boxShadow =
    "0 10px 30px rgba(0,0,0,0.08)";

}else{

    header.style.boxShadow="none";

}


});







// REVEAL ANIMATION


const revealItems =
document.querySelectorAll(
"section, .service, .why-grid div, .gallery img"
);



revealItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition="1s ease";

});



function revealOnScroll(){


revealItems.forEach(item=>{


const position =
item.getBoundingClientRect().top;


if(position < window.innerHeight - 100){


item.style.opacity="1";

item.style.transform="translateY(0)";


}


});


}



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();








// SMART WHATSAPP BOOKING


function bookAppointment(service){


const phone =
"251905504444";


const message =
`Hello Nuhas Beauty Garden. I would like to book ${service}. Please share available appointment times.`;


const link =
"https://wa.me/" +
phone +
"?text=" +
encodeURIComponent(message);



window.open(link,"_blank");


}







// IMAGE LOADING PERFORMANCE


document.querySelectorAll("img").forEach(image=>{


image.loading="lazy";


});







// CURRENT YEAR FOOTER


const year =
new Date().getFullYear();



const footer =
document.querySelector("footer p");


if(footer){

footer.innerHTML =
`Where Beauty Meets Elegance © ${year}`;

}
