

//User clicked Submit

//If there is text inside entry field, add text to toDo list

document.getElementById('submit').addEventListener('click', function() {

let value = document.getElementById('entry').value;

if (value) { addItemTodo(value)

};

});


function addItemTodo() {

};
