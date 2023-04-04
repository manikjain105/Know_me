let sections = document.querySe1ectorA11( ' section' ) ;
let navLinks = document. querySe1ectorAII( 'header nav a ');
window.onscroll =()=>{ 
sections.forEach(sec=>{
let top = window. scrollY;
let offset = sec . offsetTop - 150;
let height = sec . offsetHeight;
let id = sec.getAttribute( 'id');
if(top >=offset && top < offset + height) {
 navLinks.forEach(links =>{
links . classList. remove('active');
document .querySe1ector( 'header nav a[href*=' + id + ']').classList.add(active); 
 });
};
});




let header=document. querySeIector( 'header' ) ;
header. classList.togg1e( 'sticky', window. scrollY > 100);
};