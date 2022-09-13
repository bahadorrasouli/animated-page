const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const logo = document.querySelector('#logo');
const person = document.querySelector('.person');
const socials = document.querySelector('.socials');
const typing = document.querySelector('.typing');

const t1= new TimelineMax();

t1.fromTo(hero, 1, {height:'0%'}, {height:'70%', ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width:'100%'}, {width:'80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x:'-100%'}, {x:'0%', ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.4")
.fromTo(headline, 0.5, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.4")
.fromTo(headline, 1, {scale: 1}, {scale: 0.7}, "-=0")
.fromTo(person,1, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.9")
.fromTo(socials,1, {opacity: 0, y:-30}, {opacity: 1, y:0})
.fromTo(typing,.8, {opacity: 0, y:-30}, {opacity: 1, y:0}, "-=0.9")