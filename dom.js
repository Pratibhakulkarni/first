
    //to change bgcolor of 3rd element to green
var items=document.getElementsByClassName("list-group-item");
console.log(items);
items[2].style.backgroundColor="green";
//to make all the elements have bold font
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight ="bold";
}

