console.log('Loaded!');
var element=document.getElementById('maintext');
var c=0;
var result;
var n1=document.getElementById('num1').value;
var n2=document.getElementById('num2').value;

var sum=document.getElementById('add');
sum.onclick=function()
{
    result=parseInt(n1)+parseInt(n2);
    if (!isNaN(result)) {
           document.getElementById('res').value = result;
       }
    
};
var subt=document.getElementById('sub');
subt.onclick=function()
{
    re.Value=n1-n2;
    
};
var mult=document.getElementById('mul');
mult.onclick=function()
{
    re.Value=n1*n2;
    
};
var div=document.getElementById('divi');
div.onclick=function()
{
    re.Value=n1/n2;
    
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


