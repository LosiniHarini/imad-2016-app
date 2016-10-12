console.log('Loaded!');
var element=document.getElementById('maintext');

element.innerHTML='NEW VALUE';
//move the image
var img=document.getElementById('img');
img.onclick=function(){
    img.style.marginleft='100px';
};