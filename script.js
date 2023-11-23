let confdesk = document.getElementById('desk-conf')
let divconfdesk = document.getElementById('div-conf-desk')
let pfundo = document.getElementById('p-cor')
let psize = document.getElementById('p-size')
let pfonte = document.getElementById('p-font')
let body = document.querySelector('body')
let header = document.querySelector('header')

divconfdesk.addEventListener('click', ()=>{
    divconfdesk.classList.toggle('open')
})
pfundo.addEventListener('click', ()=>{
    body.classList.toggle('modo-claro')
})
pfonte.addEventListener('click', ()=>{
    body.classList.toggle('second-font')
})
psize.addEventListener('click', ()=>{
    body.classList.toggle('tamanho2')
})
window.addEventListener('scroll', ()=>{
    header.classList.toggle('scroll', window.scrollY > 100)
    var fadein = document.querySelectorAll('.fadein')

    for(var i = 0; i < fadein.length; i++){
        var windowheigt = window.innerHeight;
        var fadetop = fadein[i].getBoundingClientRect().top; 
        var fadepoint = 150;

        if(fadetop < windowheigt - fadepoint){
            fadein[i].classList.add('active');
        }
        else{
            fadein[i].classList.remove('active');
        }
    }
})
