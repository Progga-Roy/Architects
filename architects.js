// header create and append in the body then navbar create and append in the header

const body = document.getElementById('body')
const header = document.createElement('header')
header.classList.add('header')
const nav = document.createElement('nav')
nav.classList.add('nav-bar')
nav.innerHTML = 
` <a href="#" class="logo">Architects</a>
<ul class="nav-menu">
    <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">About</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Contact</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Blog</a>
</ul>
<div class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</div>`
header.appendChild(nav)

// create banner information and append in header
const div = document.createElement('div')
div.classList.add('banner-div')
div.innerHTML =
`<div class="banner-info">
<h1>Brand New Group  </br>  of Architects </h1>
<p>There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration in some form, </br> by injected humour, or randomized words which don't look even</p>
<button class="explore-btn">Explore More</button>
</div>
 <div class="banner-img">
<img src="./images/banner.png" alt="">
 </div>
`
header.appendChild(div)
body.appendChild(header)

// control hamburger menubar
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    
})
//  // control hamburger menubar clicking any nav link
// document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click',()=>{
//     hamburger.classList.remove('active')
//     navMenu.classList.remove('active')
// }));



// const main = document.createElement('main');
// main.classList.add('main-container');

// main.innerHTML =
// `
// <div class="first-div">
// <div class="full-team">
// <div class="team-img"><img src="./images/team1.png" alt=""></div>
// <div class="team-img"><img src="./images/team2.png" alt=""></div>
// <div class="team-img"><img src="./images/team3.png" alt=""></div>
// <div class="team-img"><img src="./images/team4.png" alt=""></div>
// </div>
// <div class="feature-info">
// <div class="feature-info-detail">
//     <h2 class="feature-title">Quick list <strong>of Our</strong> <br> <span>Features</span> </h2>
//     <p class="feature-description">An architect is a person who plans, designs and oversees the
//       construction of buildings.To practice architecture means to provide services in connection
//       with the design of buildings and the space within the site surrounding. </p>
//     <button class="explore-btn2">Explore More</button>
// </div>
// </div>
// </div>
// `

// body.appendChild(main);



const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.classList.add('title')
h1.innerHTML =`Our <span class="terms">Teams</span>`
body.appendChild(h1)
section.classList.add('container')
section.innerHTML = `
<div class="slideshow-container">
<div class="mySlides fade">
    <div class="numberText"> 1/ 6</div>
    <img src="./images/Pic1.jpg" alt="">
    <div class="text">Caption One</div>
</div>

<div class="mySlides fade">
    <div class="numberText"> 2/ 6</div>
    <img src="./images/Blueprints.jpg" alt="">
    <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
    <div class="numberText"> 3/ 6</div>
    <img src="./images/howtochoossearchitect_750xx1697-956-0-0.jpg" alt="">
    <div class="text">Caption Three</div>
</div>

<div class="mySlides fade">
    <div class="numberText"> 4/ 6</div>
    <img src="./images/HRqk9KwpB58oBCxkiHWPih.jpg" alt="">
    <div class="text">Caption Four</div>
</div>
<div class="mySlides fade">
    <div class="numberText"> 5/ 6</div>
    <img src="./images/remodelling-zirmunai.jpg" alt="">
    <div class="text">Caption Five</div>
</div>
<div class="mySlides fade">
    <div class="numberText"> 6/ 6</div>
    <img src="./images/team-v2.jpg" alt="">
    <div class="text">Caption Six</div>
</div>
<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>

</div>
`
const div2 = document.createElement('div')
div2.classList.add('images')
div2.innerHTML = `
<a class="imageLink activeImage" onclick="currentSlide(1)"><img class="clickableImage" src="./images/Pic1.jpg" alt="Image 1"></a>
    <a class="imageLink activeImage" onclick="currentSlide(2)"><img class="clickableImage" src="./images/Blueprints.jpg" alt="Image 2"></a>
    <a class="imageLink activeImage" onclick="currentSlide(3)"><img class="clickableImage" src="./images/howtochoossearchitect_750xx1697-956-0-0.jpg"  alt="Image 3"></a>
    <a class="imageLink activeImage" onclick="currentSlide(4)"><img class="clickableImage" src="./images/HRqk9KwpB58oBCxkiHWPih.jpg" alt="Image 4"></a>
    <a class="imageLink activeImage" onclick="currentSlide(5)"><img class="clickableImage" src="./images/remodelling-zirmunai.jpg" alt="Image 5"></a>
    <a class="imageLink activeImage" onclick="currentSlide(6)"><img class="clickableImage" src="./images/team-v2.jpg" alt="Image 6"></a>

`
body.appendChild(section)
body.appendChild(div2)

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }    
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}
// setInterval(() => {
//   plusSlides(1);
// }, 2500);
    


