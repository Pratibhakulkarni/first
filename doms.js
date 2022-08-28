var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem)
//delete event
itemList.addEventListener('click', removeitem)

//add item
function addItem(e)
{
    e.preventDefault();
    
var newitem=document.getElementById('item').value;
var li=document.createElement('li');
li.className="list-group-item"
li.appendChild(document.createTextNode(newitem));
itemList.appendChild(li);
//create delete button
var delbtn =document.createElement('button')
delbtn.className="btn btn-danger btn-sm float-right delete";
delbtn.appendChild(document.createTextNode('X'));
li.appendChild(delbtn)
itemList.appendChild(li);
//create edit button
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

