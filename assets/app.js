const primary='573212435033';
const waBase='https://wa.me/';
function wa(service,number=primary){
  const msg=`Hola, Ángeles del Amor. Estoy en México y quisiera consultar sobre ${service}. ¿Me indican cómo es la atención, disponibilidad y costo antes de continuar?`;
  return `${waBase}${number}?text=${encodeURIComponent(msg)}`;
}
document.querySelectorAll('[data-wa]').forEach(el=>{el.href=wa(el.dataset.wa,el.dataset.number||primary);el.target='_blank';el.rel='noopener noreferrer'});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal:not(.is-visible)').forEach(el=>io.observe(el));
const menu=document.querySelector('.menu-btn');const links=document.querySelector('.nav-links');
if(menu)menu.addEventListener('click',()=>{const open=links.classList.toggle('mobile-open');menu.setAttribute('aria-expanded',open?'true':'false')});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('mobile-open')));
