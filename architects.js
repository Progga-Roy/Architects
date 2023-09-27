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