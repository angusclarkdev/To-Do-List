(function() {
  var domElements = [

     tasks = document.getElementById('tasks'),
     clear = document.getElementById('clear_button'),
     submit = document.getElementById('submit_button'),
     checkButton = document.getElementsByClassName('check'),
     deleteButton = document.getElementsByClassName('delete'),
     example = document.getElementById('example'),
     secondaryButtons = document.getElementsByClassName('secondary_buttons'),
     completed = document.getElementById('completed_title'),
     item = document.getElementById('item')
  ];

submit.addEventListener('click', function() {

    if (input.value !== "") {

      createNewItem()
      deleteExample()
      input.value = "";
    } else {
      alert("You must enter a value")
    }
})

clear.addEventListener('click', function() {

  input.value = "";

})



function deleteExample() {
  if (example.innerText === 'E.g. "Buy dog food"') {
    tasks.children[0].remove();
  } else {

  }

}
function createNewItem(){

    var newUl = item.cloneNode(true);
    newUl.childNodes[1].innerText = input.value;
    if (document.getElementById('example')) {
        tasks.insertBefore(newUl, completed);
    } else {
      tasks.insertBefore(newUl, completed);

    }
}




$('#tasks').on('click', '.check', function(e) {

var parent = this.parentNode.parentNode;
var newLi = document.createElement('li');
var completed = document.getElementById('completed');
completed.appendChild(newLi);
newLi.innerText = parent.children[0].innerText;
tasks.removeChild(parent)

});



$('#tasks').on('click', '.delete', function(e) {

    var parent = this.parentNode.parentNode;
    tasks.removeChild(parent)

});
}());
