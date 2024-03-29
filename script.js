/* -------toggle icon navbar------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('activated');
}


/* -------Scroll section active link------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    } )



/* -------sticky navbar------*/    

let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);

/*-----remove toggle icon and navbar when click navbar link (scroll)-----*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('activated');
}

/*----scroll reveal----*/
ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*----typed js----*/
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Web Designer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*-------Send mail-----*/

function sendEmail(){
        
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kiemaian.ik@gmail.com",
    Password : "C0260BEE1BCC3D2C91A9FC86B6153BCBACDB",
    To : 'kiemaian.ik@gmail.com',
    From : "kiemaian.ik@gmail.com",
    Subject : "New contact from personal website",
    Body : "Name:" + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Project: " + document.getElementById("continent").value + "<br> Message:" + document.getElementById("message").value
}).then(
message => alert("Your message has been sent!")
);
}

function toggleReadMore() {
    let intro = document.getElementById('intro');

    let btn = document.getElementById('readMoreBtn');

    if (intro.style.maxHeight === "150px" || intro.style.maxHeight === "") {
        intro.style.maxHeight = "1000px";
        btn.textContent = "Read Less";
    } else {
        intro.style.maxHeight = "150px";

        btn.textContent = "Read More";
    }
}

function toggleReadMore1() {
    let intro1 = document .getElementById('intro1')
 
    let btn1 = document.getElementById('readMoreBtn1');
   

    if (intro1.style.maxHeight === '150px' || intro1.style.maxHeight === "") {
            intro1.style.maxHeight = '1000px'
            btn1.textContent = 'Read Less'
        
        } else {
        intro1.style.maxHeight = "150px";
        btn1.textContent = "Read More";
    }
}

function toggleReadMore2() {
    let intro2 = document .getElementById('intro2')
 
    let btn2 = document.getElementById('readMoreBtn2');
   

    if (intro2.style.maxHeight === '150px' || intro2.style.maxHeight === "") {
            intro2.style.maxHeight = '500px'
            btn2.textContent = 'Read Less'
        
        } else {
        intro2.style.maxHeight = "150px";
        btn2.textContent = "Read More";
    }
}

function toggleReadMore3() {
    let intro3 = document .getElementById('intro3')
 
    let btn3= document.getElementById('readMoreBtn3');
   

    if (intro3.style.maxHeight === '150px' || intro3.style.maxHeight === "") {
            intro3.style.maxHeight = '500px'
            btn3.textContent = 'Read Less'
        
        } else {
        intro3.style.maxHeight = "150px";
        btn3.textContent = "Read More";
    }
}



