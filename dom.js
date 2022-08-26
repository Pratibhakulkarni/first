
    //to change bgcolor of 3rd element to green
var li=document.getElementsByTagName("li");
console.log(li);
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor="brown";
    li[i].style.border="solid 5px black";
}

var liv=document.getElementsByClassName("kk");
console.log(liv);
liv[0].style.color="white";
liv[0].style.fontWeight="bold";
