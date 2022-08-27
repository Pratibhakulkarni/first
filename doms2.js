var itemlist=document.querySelector('#items')
//parentElement
console.log(itemlist.parentElement)
itemlist.parentElement.style.backgroundColor="#f4f4f4"
console.log(itemlist.parentElement.parentElement.parentElement)
//lastelementchild(returns last child )
itemlist.parentElement.style.backgroundColor="black"
console.log(itemlist.lastElementChild)
//firstchild(returns 1st child,(like text node) )
itemlist.parentElement.style.color="pink"
console.log(itemlist.firstChild)
//firstelementchild(returns 1st child )
console.log(itemlist.firstElementChild)
itemlist.firstElementChild.textContent="hi"
//lastchild(returns last child (like text node))
console.log(itemlist.lastChild)
//lastElementchild(returns last child )
console.log(itemlist.lastElementChild)
//nextSibling(next sibling within the same parent node,(like text node))
console.log(itemlist.nextSibling)
//nextElementSibling(next sibling within the same parent node)
console.log(itemlist.nextElementSibling)
//prevsibling(prev sibling within the same parent node,(like text node))
console.log(itemlist.previousSibling)
//previousElementSibling(prev sibling within the same parent node)
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.color="green"
//createelement()
var newdiv=document.createElement('div')
newdiv.className="hi"
newdiv.id="hey"
//setattribute
var newdiv=document.createElement('div')
newdiv.className="hi"
newdiv.id="hey"
newdiv.setAttribute("title","hi D")
//appendChild and createTextNode
var newdiv=document.createElement('div')
var newdivv=document.createTextNode('hello')
newdiv.appendChild(newdivv)
// add HEllo word before Item Lister
var newdiv=document.createElement('div')
newdiv.className="hi"
newdiv.id="hey"
newdiv.setAttribute("title","hi D")
newdiv.textContent="hello"
var newdivv=document.createTextNode('hello')
newdiv.appendChild(newdivv)
var contains=document.querySelector("header .container")
var h1=document.querySelector("Header h1")
console.log(newdiv)
contains.insertBefore(newdiv,h1)

// add HEllo word before Item 1
var newli=document.createElement('li')
newli.className="hii"
newli.id="heyy"
var newlii=document.createTextNode("hello")
newli.appendChild(newlii)
var ul=document.getElementById("items")

console.log(ul)
ul.insertBefore(newli,ul.firstElementChild)
