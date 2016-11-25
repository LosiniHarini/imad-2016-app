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
function move(elem) {
    var st = 0;
    console.log("ELEM " + elem);

    function animate() {
        st++;
        console.log(st);
        elem.style.left = st + 'px';
        console.log("elem" + elem.style.left);
        if (st == 100) // check finish condition
            clearInterval(id)
    }
    id = setInterval(animate, 10);
}
        

