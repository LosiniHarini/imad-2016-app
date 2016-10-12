console.log('Loaded!');
var element=document.getElementById('maintext');

element.innerHTML='NEW VALUE';
//move the image
var img=document.getElementById('disney');
img.onclick=function(){
    img.style.marginleft='200px';
};