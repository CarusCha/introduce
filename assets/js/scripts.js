const navbarHTML = 
`<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a id="family" class="nav-link active" aria-current="page" href="family.html">Family</a>
      </li>
      <li class="nav-item">
        <a id="interest" class="nav-link" href="interest.html">Interest</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="skill.html">Skill</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;



document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#nav_bar").innerHTML = navbarHTML;
    // document.querySelectorAll('a[class="nav')
    // switch(window.location.pathname) {
    // case "/family.html":
    //   document.querySelector('a[id="family"]').className += " active";  
    // case "/interest.html":
    //   document.querySelector('a[id="interest"]').className += " active";  
    
    // }
});

