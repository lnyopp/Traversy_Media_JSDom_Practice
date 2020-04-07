var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);

// delete event
itemList.addEventListener('click',removeItem);

// Filter Event
filter.addEventListener('keyup',filterItems);




//add item function
function addItem(e){
    e.preventDefault();
// get input value
var newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li')
//add a class 
li.className = 'list-group-item';
// add text node with input value
li.appendChild(document.createTextNode(newItem));

// create a delete button element
var deleteBtn = document.createElement('button');
// add classes to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//append text node
deleteBtn.appendChild(document.createTextNode('X'));

//append delete button to list item
li.appendChild(deleteBtn);


itemList.appendChild(li);

}

// Remove item function

function removeItem(e){
    if(e.target.classList.contains('delete')){ 
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        } 
    }
}

// Filter Item Function

function filterItems(e){
    // convert user input to lowercase
    var text = e.target.value.toLowerCase();
    //get list
   var items = itemList.getElementsByTagName('li');
   // covert items from HTMLCollection to array
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
   });

}