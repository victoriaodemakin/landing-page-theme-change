# Loopstudios landing Page

This is the [Loopstudio landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Main Overview

The overview of the project is to build out the landing page of susnnyside creative site. The site is responsive for both mobile,tablet and a desktop version of the design.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
  The designs were created to the following widths:

- Mobile: 375px
  -Tablet: 768px
- Desktop: 1440px

### Screenshot

![active desktop desgin](/images/desktop-preview.jpg)
![mobile desgin](images/mobile-design.jpg)
![Tablet desgin](images/mobile-menu.jpg)

### Links

- Solution URL: [solution URL ](https://github.com/victoriaodemakin/landing-page)
- Live Site URL: [live site URL ](https://victoriaodemakin.github.io/landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Javascript](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<header>
  <a href="#home"><img src="images/logo.svg" alt="SunnySide" class="logo" /></a>
  <a href="#" class="hide-desktop">
    <img
      src="images/icon-hamburger.svg"
      alt="open the  navigation"
      class="mobile-menu"
      id="mobilemenu"
    />
  </a>
  <nav class="hide-mobile" id="nav">
    <ul>
      <li class="close-nav">
        <img
          src="images/exit.svg"
          alt="close the navigation"
          id="mobileexit"
          class="exit-nav"
        />
      </li>
      <li><a href="#About" class="nav-right">About</a></li>
      <li><a href="#Services" class="nav-right">Services</a></li>
      <li><a href="#Project" class="nav-right">Project</a></li>
      <li id="contact-cta">
        <a href="#Contact" class="nav-right"> <span>Contact</span> </a>
      </li>
    </ul>
  </nav>
</header>
```

```css
.hero-bg {
  width: 100%;
  background-image: url(../images/mobile/image-header.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1em;
  padding-top: 1.5em;
  padding-bottom: 4em;
}

header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
```

```js
var mobilemenu = document.getElementById("mobilemenu");
var nav = document.getElementById("nav");
var mobilemexit = document.getElementById("mobileexit");

mobilemenu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  e.preventDefault();
});

mobileexit.addEventListener("click", function (e) {
  nav.classList.add("hide-mobile");
  e.preventDefault();
});
```

### Continued development

All other future projects will be focused on using Vue.Js Framework.which is found useful that to refine and perfect future project
