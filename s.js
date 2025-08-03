
// element tat will change
var web = document.getElementsByClassName('web')[0];
var header = document.getElementsByClassName('header')[0];
var p = document.querySelector(".web p");
var p2 = document.querySelector(".web #p2");
var three = document.querySelector(".web .three");
var palette_icon = document.querySelector("#palette_icon");
var palette = document.querySelector("#palette");



// input color
var c1 = document.getElementsByName('c1')[0];
var c2= document.getElementsByName('c2')[0];
var c32= document.getElementsByName('c32')[0];
var c3= document.getElementsByName('c3')[0];

// work the idea
c1.onblur=function()
{
    web.style.background=this.value;
}
c2.onblur=function()
{
    header.style.background=this.value;
}
c3.onblur=function()
{
    header.style.color=this.value;
    p.style.color=this.value;
    p2.style.color=this.value;

    
}
c32.onblur=function()
{
    three.style.background=this.value;
}
window.onload = function(){
     palette.classList.add('non_display_palette');
}

palette_icon.onclick=function()
{
    palette.classList.toggle('display_palette');
}

