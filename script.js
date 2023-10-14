var index=0;
show_image(index);
function show_image(i){
    index+=i;

    var images=document.getElementsByClassName("image");

    var dots=document.getElementsByClassName("dot");
    var n=images.length;
    var m=dots.length;
    for(i=0;i<n;i++)
    images[i].style.display='none';

    for(i=0; i<m;i++)
    dots[i].className=dots[i].className.replace("active","");

    if(index > images.length -1)
    index=0;

    if(index < 0)
    index = images.length - 1;

    images[index].style.display="block";
    dots[index].className += "active";
}