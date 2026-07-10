/* =====================================
   NUHAS BEAUTY GARDEN
   LUXURY SANCTUARY JAVASCRIPT
===================================== */



// MOBILE MENU

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");


if(menuIcon){

menuIcon.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}




// CLOSE MENU WHEN CLICKING LINK

document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});


});







// RESERVATION FORM TO WHATSAPP


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




const text =

`Hello Nuhas Beauty Garden 🌿

I would like to reserve a beauty experience.

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




const whatsapp =

"https://wa.me/251905504444?text="

+ encodeURIComponent(text);




window.open(
whatsapp,
"_blank"
);



});

}





// NAVBAR EFFECT


const header =
document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 60){


header.style.boxShadow =
"0 10px 35px rgba(0,0,0,.4)";


}

else{


header.style.boxShadow="none";


}


});








// REVEAL ANIMATION


const revealItems = document.querySelectorAll(
".card, .package-grid div, .stats div, .gallery img"
);



revealItems.forEach(item=>{


item.style.opacity="0";

item.style.transform=
"translateY(40px)";

item.style.transition=
"all .8s ease";


});





function reveal(){


revealItems.forEach(item=>{


const position =
item.getBoundingClientRect().top;



if(position < window.innerHeight - 80){


item.style.opacity="1";


item.style.transform=
"translateY(0)";


}



});


}



window.addEventListener(
"scroll",
reveal
);


reveal();







// IMAGE PERFORMANCE


document.querySelectorAll("img")
.forEach(image=>{


image.loading="lazy";


});





// CURRENT YEAR FOOTER


const footerText =
document.querySelector("footer p");



if(footerText){


footerText.innerHTML =
"Where Beauty Meets Elegance © "
+
new Date().getFullYear();


}
