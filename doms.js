var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

var filter=document.getElementById("filter")
//form submit event
form.addEventListener('submit',addItem)
//delete event
itemList.addEventListener('click', removeitem)
//filter event
filter.addEventListener('keyup',filteritems)
//add item
function addItem(e)
{
    e.preventDefault();
    
var newitem=document.getElementById('item').value;
var li=document.createElement('li');
li.className="list-group-item"
li.appendChild(document.createTextNode(newitem));
itemList.appendChild(li);
//description
var newdesc=document.getElementById('item1').value;
var description=document.createElement('description')
description.className="list-group-item"
description.appendChild(document.createTextNode(newdesc))
description.style.border="solid 1px pink"
itemList.appendChild(description);
//del  button for desc
var delbtn1 =document.createElement('button')
delbtn1.className="btn btn-danger btn-sm float-right delete";
delbtn1.appendChild(document.createTextNode('X'));
description.appendChild(delbtn1)
itemList.appendChild(description);
//edit button for desc
var editbtn1=document.createElement('button')
editbtn1.className="btn btn-danger btn-sm float-right delete";
editbtn1.appendChild(document.createTextNode('EDIT'))
editbtn1.style.border="solid 3px black"
editbtn1.style.color="white"
editbtn1.style.backgroundColor="skyblue"
description.appendChild(editbtn1)
itemList.appendChild(description)
//create delete button for li
var delbtn =document.createElement('button')
delbtn.className="btn btn-danger btn-sm float-right delete";
delbtn.appendChild(document.createTextNode('X'));
li.appendChild(delbtn)
itemList.appendChild(li);

//create edit button for li
var editbtn=document.createElement('button')
editbtn.className="btn btn-danger btn-sm float-right delete";
editbtn.appendChild(document.createTextNode('EDIT'))
editbtn.style.border="solid 3px black"
editbtn.style.color="white"
editbtn.style.backgroundColor="skyblue" 
li.appendChild(editbtn)
itemList.appendChild(li);


}

function removeitem(e) {
 if(e.target.classList.contains('delete'))
 var li =e.target.parentElement;
itemList.removeChild(li)
}
function filteritems(e){
    var text=e.target.value.toLowerCase();
   
    var items=itemList.querySelectorAll(' .list-group-item');
   Array.from(items).forEach(function(item)
   {
var itemname=item.firstChild.textContent;
if(itemname.toLowerCase().indexOf(text)!=-1)
{
    item.style.display="block"
} else {
    item.style.display="none"
}

})

}
