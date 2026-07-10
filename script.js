/* ===================================
   NUHAS BEAUTY GARDEN
   LUXURY SANCTUARY VERSION 4
=================================== */



// MOBILE MENU

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");


if(menuIcon){

    menuIcon.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}




// CLOSE MOBILE MENU

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});








// BOOKING FORM → WHATSAPP


const bookingForm =
document.getElementById("bookingForm");


if(bookingForm){


bookingForm.addEventListener("submit",(e)=>{


e.preventDefault();



const name =
document.getElementById("name").value;


const phone =
document.getElementById("phone").value;


const service =
document.getElementById("service").value;


const date =
document.getElementById("date").value;


const message =
document.getElementById("message").value;




const bookingMessage =

`Hello Nuhas Beauty Garden 🌿

I would like to reserve my beauty experience.

Name:
${name}

Phone:
${phone}

Treatment:
${service}

Preferred Date:
${date}

Special Request:
${message}`;



const whatsappLink =

"https://wa.me/251905504444?text="

+ encodeURIComponent(bookingMessage);



window.open(
whatsappLink,
"_blank"
);



});


}









// HEADER SHADOW


const header =
document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 60){


header.style.boxShadow =
"0 10px 35px rgba(0,0,0,.45)";


}

else{


header.style.boxShadow =
"none";


}


});









// SMOOTH REVEAL EFFECT


const elements =
document.querySelectorAll(
".service-card, .package-grid div, .difference-grid div, .story-grid div, .gallery img"
);



elements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(35px)";


element.style.transition=
"all .8s ease";


});






function showElements(){


elements.forEach(element=>{


const top =
element.getBoundingClientRect().top;



if(top < window.innerHeight - 100){


element.style.opacity="1";


element.style.transform=
"translateY(0)";


}


});


}



window.addEventListener(
"scroll",
showElements
);


showElements();









// IMAGE SPEED OPTIMIZATION


document.querySelectorAll("img")
.forEach(image=>{


image.loading="lazy";


image.decoding="async";


});









// FOOTER YEAR


const copyright =
document.querySelector(".copyright");


if(copyright){


copyright.innerHTML =
`© ${new Date().getFullYear()} Nuhas Beauty Garden. All rights reserved.`;


   }
