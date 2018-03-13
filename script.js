/*

  To Do List written in Javascript

  Author: Angus Clark.

  Date: 13th March 2018.

*/

// App wrapped in IIFE to protect global scope

(function() {

  // Retrieve DOM elements for and make avaiable to all functions

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

  // Listens for a click on 'submit' button

  submit.addEventListener('click', function() {

    if (input.value !== "") {

      createNewItem();
      deleteExample();
      input.value = ""; // clear input field once user clicks 'submit'
    } else {
      alert("You must enter a value"); // If user attempts to submit
    }
  });

  // Listens for a click on 'clear' button

  clear.addEventListener('click', function() {

    input.value = ""; // clears input field

  });

  // function deletes the example task

  function deleteExample() {
    if (example.innerText === 'E.g. "Buy dog food"') {
      tasks.children[0].remove();
    } else {}

  }

  // function creates and appends new task

  function createNewItem() {

    var newUl = item.cloneNode(true); // clones original unordered list and all children
    newUl.childNodes[1].innerText = input.value; // sets new list item to task written by user
    tasks.insertBefore(newUl, completed); // inserts new list in correct position

  }

  // Jquery used for event delegation - target all children with class 'check'

  $('#tasks').on('click', '.check', function(e) {

    var parent = this.parentNode.parentNode; // navigate out to list
    var newLi = document.createElement('li'); // create new list item
    var completed = document.getElementById('completed');
    completed.appendChild(newLi); // append new list item to correct position
    newLi.innerText = parent.children[0].innerText; // take completed task and set to new list item
    tasks.removeChild(parent); // remove completed from tasks section

  });

  // Jquery used for event delegation - target all children with class 'delete'

  $('#tasks').on('click', '.delete', function(e) {

    var parent = this.parentNode.parentNode;
    tasks.removeChild(parent);

  });
}());
