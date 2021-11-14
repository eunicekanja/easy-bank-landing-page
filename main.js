const menu=document.querySelector('.menu')
const linksContainer=document.querySelector('.linksContainer');
const Links=document.querySelector('.head-links')
const links=document.querySelectorAll('.link')
menu.addEventListener('click',function(){
    linksContainer.classList.toggle('active')
})

Links.addEventListener('click',function(e){
    const id=e.target.dataset.id;
    if(id){
        links.forEach(link=>link.classList.remove('active'));
        e.target.classList.add('active')
    }
})