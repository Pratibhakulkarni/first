
    /*//to change bgcolor of 3rd element to green
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
liv[0].style.fontWeight="bold";*/

//Queryselector

var sec =document.querySelector(".list-group-item:nth-child(2)");
sec.style.backgroundColor="green";
var third =document.querySelector(".list-group-item:nth-child(3)");
third.style.visibility="hidden";

//Queryselectorall

var second =document.querySelectorAll('.list-group-item');
second[1].style.color="green"
var odd =document.querySelectorAll('li:nth-child(odd)');
    for(var i=0;i<odd.length;i++)
    {
odd[i].style.backgroundColor="green"
    }
