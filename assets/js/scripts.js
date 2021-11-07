const navbarHTML = 
`<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="nav_bar_all">
<div class="container-fluid">
<label id="nav_title"><p>Passionable developer</p>, <p>Carus Cha's website</p></label>
  <a id="nav_title" class="navbar-brand block-with-text" href="index.html"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    </ul>
      <ul class="navbar-nav mb-2 mb-lg-0">
      <li class="nav-item">
        <a id="family" class="nav-link" href="family.html">Family</a>
      </li>
      <li class="nav-item">
        <a id="interest" class="nav-link" href="interest.html">Interest</a>
      </li>
      <li class="nav-item">
        <a id="skill" class="nav-link" href="skill.html">Skill</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;



document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#nav_bar").innerHTML = navbarHTML;
    document.querySelectorAll('a[class="nav');
    console.log(window.location.pathname);
    switch(window.location.pathname) {
    case "/family.html":
      document.querySelector('a[id="family"]').className += " active";
      // document.querySelector('a[id="family"]').classList.add("active");
      // navbar.classList.remove("sticky");
      break;
    case "/interest.html":
      document.querySelector('a[id="interest"]').className += " active";
      break;
    case "/skill.html":
      document.querySelector('a[id="skill"]').className += " active";
    }
});

