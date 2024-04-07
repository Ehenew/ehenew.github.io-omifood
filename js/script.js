// console.log('Hello world!');

// const myName = 'Yihenew Amogne';
// console.log(myName);
// const h1 = document.querySelector('.heading-primary');
// console.log(h1);

// h1.textContent = myName;
// h1.style.backgroundColor = 'red';
// h1.style.padding = '5rem';

// h1.addEventListener('click', function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = 'red';
//   h1.style.padding = '5rem';
// });
//////////////////////////////////////////////////
///To automatically set the current time (especiallyyear) to our web page
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
// console.log(currentYear)
yearEl.textContent = currentYear;

//////////////////////////////////////////////////
///Make the mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

//////////////////////////////////////////////////
///Smooth scrolling animtion

const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks)
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(href)
    const href = link.getAttribute('href');

    //scrol back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    //scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl)
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // // close the mobile navigation
    // headerEl.classList.remove('nav-open'); //  MINE- for every link 
    if (link.classList.contains('main-nav-link')) {  // JONAS
      headerEl.classList.toggle('nav-open');
    }
  });
});

//////////////////////////////////////////////////
///Sticky navigation

// we want the navigation to be sticky after the hero section
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[ 0 ];
  // console.log(ent); // we need this only to test our code on console
  if (ent.isIntersecting === false) {
    //document.querySelector('.header').classList.add('.sticky') //  we want the sticky class to be added to the body
    document.body.classList.add('sticky');
  }

  if (ent.isIntersecting === true) {
    // to remove the sticky nav when we are in the hero section
    document.body.classList.remove('sticky');
  }
},
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px', //equal with the height of the header class to make the nav not to overlap to the featured in section //
  },
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////
//Fixing flexbox gap property missing in some safari versions;
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrolHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported); // false

  if (!isSupported) document.body.classList.add('no-flex-gap');
}
checkFlexGap();

//https://unpkg.com/smoothscrol-polyfill@0.4.4/dist/smoothscrol.min.js
//////////////////////////////////////////////////
