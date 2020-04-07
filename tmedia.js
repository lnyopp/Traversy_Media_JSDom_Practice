// Lab
//TRAVERSY MEDIA ITEMS LIST JS //

// Examine Document Object //
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//Get Element by ID //

// // console.log(document.getElementById('header-title'));
//  var headerTitle = document.getElementById('header-title');
//  var header = document.getElementById('main-header');
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// // // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000';

// Get Elements by ClassName //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontweight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// //does not work:
// // items.style.backgroundColor = '#f4f4f4';
// //in order to change colors for all elements with a class name you use a for loop.
// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// };

// QUERY SELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// Query Selector All //

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }

// TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


// //child nodes - counts the lines breaks/text as a child
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//first child - also logs the text space like child nodes.
// console.log(itemList.firstChild);

// console.log(itemListFirstElementChild);

// last child & last element child work the same way.

// //nextsibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// if you add element the text nodes do count. 
// previousSibling & previousElementSibling work the same way.

// var newDiv = document.createElement('div');
// //add class 
// newDiv.className= 'hello';
// //add id
// newDiv.id = 'hello1'

// console.log(newDiv);

// // add attribute.
// newDiv.setAttribute('title','Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');
// // Add text to new div.
// newDiv.appendChild(newDivText);

// //moving this new div to the DOM.

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);

//Event Object 

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//    console.log('button clicked');
//    document.getElementById('header-title').textContent = 'Changed';
//    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e)
// console.log(e.target)
// console.log(e.target.id)
// console.log(e.target.className)

// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>'

// console.log(e.type)
// console.log(e.clientX)
// console.log(e.clientY)
// console.log(e.offsetY)


// }

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dbclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// //specific to the element that the listner is on.
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// // applies to children of the main element as well. 
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

// box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select')
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);


// select.addEventListener('change',runEvent);

form.addEventListener('submit',runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE: ' + e.type);
    console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';


}

