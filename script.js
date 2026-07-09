/* ===================================
   NUHAS BEAUTY GARDEN
   VERSION 3 SCRIPT
=================================== */



// MOBILE MENU

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");


if(menuIcon){

menuIcon.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

}




// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

    navLinks.classList.remove("active");

});

});






// BOOKING FORM TO WHATSAPP


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



const whatsappMessage =

`Hello Nuhas Beauty Garden,

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}

Message:
${message}`;



const whatsappURL =

"https://wa.me/251905504444?text="

+ encodeURIComponent(whatsappMessage);



window.open(
whatsappURL,
"_blank"
);



});


}








// NAVBAR SHADOW EFFECT


const header =
document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

header.style.boxShadow =
"0 8px 25px rgba(0,0,0,0.08)";

}

else{

header.style.boxShadow="none";

}


});








// SIMPLE SCROLL REVEAL


const animatedElements =
document.querySelectorAll(
".service-card, .experience-grid div, .review-grid div, .gallery-grid img"
);



animatedElements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(30px)";

element.style.transition=
"all .8s ease";


});





function reveal(){


animatedElements.forEach(element=>{


const position =
element.getBoundingClientRect().top;



if(position <
window.innerHeight - 80){


element.style.opacity="1";

element.style.transform=
"translateY(0)";


}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();






// LAZY LOAD ALL IMAGES


document.querySelectorAll("img")
.forEach(img=>{

img.loading="lazy";

});
