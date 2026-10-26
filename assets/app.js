(function(){
var d=document,hdr=d.querySelector('header.site');
// start each new page at the top (not on Back/Forward or #links)
try{var nav=performance.getEntriesByType('navigation')[0];if(!location.hash&&(!nav||nav.type!=='back_forward')){history.scrollRestoration='manual';d.documentElement.scrollIntoView()}}catch(e){}
// header shadow
function sc(){if(hdr)hdr.classList.toggle('scrolled',scrollY>4)}addEventListener('scroll',sc,{passive:true});sc();
// services dropdown
var sb=d.querySelector('.sub-btn'),sm=d.getElementById('submenu');
function setSub(o,focusBtn){if(!sb)return;sb.setAttribute('aria-expanded',o);sm.hidden=!o;if(!o&&focusBtn)sb.focus()}
if(sb){sb.addEventListener('click',function(){setSub(sb.getAttribute('aria-expanded')!=='true')});
 sb.parentNode.addEventListener('keydown',function(e){if(e.key==='Escape'&&sb.getAttribute('aria-expanded')==='true'){setSub(false,true);e.stopPropagation()}});
 sb.parentNode.addEventListener('focusout',function(e){if(e.relatedTarget&&!sb.parentNode.contains(e.relatedTarget))setSub(false)});
 d.addEventListener('click',function(e){if(!sb.parentNode.contains(e.target))setSub(false)})}
// mobile menu
var nb=d.querySelector('.navbtn'),mn=d.getElementById('mainnav');
function setNav(o,focusBtn){nb.setAttribute('aria-expanded',o);mn.classList.toggle('open',o);if(!o&&focusBtn)nb.focus()}
if(nb){nb.addEventListener('click',function(){setNav(nb.getAttribute('aria-expanded')!=='true')});
 d.addEventListener('keydown',function(e){if(e.key==='Escape'&&nb.getAttribute('aria-expanded')==='true')setNav(false,true)});
 d.addEventListener('click',function(e){if(nb.getAttribute('aria-expanded')==='true'&&!mn.contains(e.target)&&!nb.contains(e.target))setNav(false)});
 mn.addEventListener('focusout',function(e){if(e.relatedTarget&&!mn.contains(e.relatedTarget)&&e.relatedTarget!==nb&&nb.getAttribute('aria-expanded')==='true')setNav(false)})}
// legend <-> pins
d.querySelectorAll('[data-leg]').forEach(function(a){var n=a.getAttribute('data-leg');
 function hl(on){d.querySelectorAll('.cw-pin[data-pin="'+n+'"]').forEach(function(p){p.classList.toggle('hl',on)});a.classList.toggle('hl',on)}
 a.addEventListener('mouseenter',function(){hl(true)});a.addEventListener('mouseleave',function(){hl(false)});a.addEventListener('focus',function(){hl(true)});a.addEventListener('blur',function(){hl(false)});
 d.querySelectorAll('.cw-pin[data-pin="'+n+'"]').forEach(function(p){p.addEventListener('mouseenter',function(){hl(true)});p.addEventListener('mouseleave',function(){hl(false)});p.addEventListener('focus',function(){hl(true)});p.addEventListener('blur',function(){hl(false)})})});
// reveal on scroll (anything already on screen shows at once)
var els=[].slice.call(d.querySelectorAll('[data-reveal]'));
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')})}
else{var vh=innerHeight;els.forEach(function(e){if(e.getBoundingClientRect().top<vh*0.98)e.classList.add('in')});
 var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}})},{rootMargin:'0px 0px -6% 0px'});
 els.forEach(function(e){if(!e.classList.contains('in'))io.observe(e)})}
// demo quote form (not connected)
var f=d.getElementById('qform');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=d.getElementById('qstatus');
 if(!f.checkValidity()){s.textContent='Please add your name, a phone number and a few words about the problem.';var b=f.querySelector(':invalid');if(b)b.focus();return}
 s.textContent='This is a working demo and is not connected yet, so nothing was sent. For now, please call or text (330) 262-1543.'})}
})();
