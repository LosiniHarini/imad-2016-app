console.log('Loaded!');
var element=document.getElementById('maintext');
var c=0;
var n1=parseInt(document.getElementById('num1').value);
var n2=parseInt(document.getElementById('num2').value);
var re=document.getElementById('res');
var sum=document.getElementById('add');
sum.onclick=function()
{
    re.value=n1+n2;
    
};
var subt=document.getElementById('sub');
subt.onclick=function()
{
    re.value=n1-n2;
    
};
var mult=document.getElementById('mul');
mult.onclick=function()
{
    re.value=n1*n2;
    
};
var div=document.getElementById('divi');
divi.onclick=function()
{
    re.value=n1/n2;
    
};

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


