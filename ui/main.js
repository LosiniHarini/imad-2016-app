console.log('Loaded!');
var element=document.getElementById('maintext');
var c=0;
element.innerHTML='NEW VALUE';
//move the image
var img=document.getElementById('disney');
img.onclick=function(){
    img.style.marginleft='200px';
};
    var img=document.getElementById('pic');
img.onclick=function(){
    img.style.marginright='200px';
};

var element2=document.getElementById('r');
 element2.onclick=function()
{
    console.log("Refresh count:"+c);
    c++;
};