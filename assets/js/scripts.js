
// navigation bar
const navbarHTML = 
`<nav class="navbar">
    <div class="navbar_logo">
        <a href="index.html">
          <img src="assets/img/logo.png" alt="logo"> 
          Carus Cha
        </a>
    </div>
    <ul class="navbar_menu">
        <li><a id="family" href="family.html">Family</a></li>
        <li><a id="interest" href="interest.html">Interest</a></li>
        <li><a id="skill" href="skill.html">Skill</a></li>
    </ul>

    <div class="hamburger_toggle">
        <a href="#" class="hamburger_toggle_button">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </a>
</div>        
</nav>
`;

document.querySelector("#nav_bar").innerHTML = navbarHTML;
const family = document.querySelector('a[id="family"]');
const interest = document.querySelector('a[id="interest"]');
const skill = document.querySelector('a[id="skill"]');
switch(window.location.pathname) {
case "/family.html":
  family.classList.add("active");
  break;
case "/interest.html":
  interest.classList.add("active");
  break;
case "/skill.html":
  skill.classList.add("active");
  break;
}


// hamburger toggle
const hamburgerButton = document.querySelector('.hamburger_toggle_button');
const menu = document.querySelector('.navbar_menu');

hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});



// footer
const footerbarHTML = 
`
<div class="row footer_container">
    <div class="column icons">
        <div>Icons made by 
        <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a>
        <a href="https://www.freepik.com" title="Freepik">, Freepik</a>
        <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">, Good Ware</a>
        <a href="https://www.flaticon.com/authors/ruslan-babkin" title="Ruslan Babkin">, Ruslan Babkin</a>
        <a href="https://www.flaticon.com/authors/riajulislam" title="riajulislam">, riajulislam</a>
        <a href="https://www.flaticon.com/authors/ghost-icon" title="ghost_icon">, ghost_icon</a>
        <a href="https://www.flaticon.com/authors/wanicon" title="wanicon">and wanicon</a>
        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>
    <div class="column copyright">
        <div>
            &#169; 2021 by Carus Cha. All rights reserved.
        </div>
    </div>
</div>


`;
document.querySelector(".footer").innerHTML = footerbarHTML;
