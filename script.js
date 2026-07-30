
const header = document.querySelector('.site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');}
  });
},{threshold:.12});
reveals.forEach(el=>revealObserver.observe(el));

const stages = document.querySelectorAll('[data-stage]');
const links = document.querySelectorAll('.rail-link');
const stageObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(link=>link.classList.toggle('active',link.getAttribute('href') === '#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
stages.forEach(stage=>stageObserver.observe(stage));

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.zoomable').forEach(img=>{
  img.addEventListener('click',()=>{
    lightboxImg.src=img.src;
    lightboxImg.alt=img.alt;
    lightbox.classList.add('open');
    document.body.classList.add('no-scroll');
  });
});
function closeLightbox(){
  lightbox.classList.remove('open');
  document.body.classList.remove('no-scroll');
  lightboxImg.src='';
}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
