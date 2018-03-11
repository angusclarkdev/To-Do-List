(function() {
  var domElements = [

     tasks = document.getElementById('tasks'),
     clear = document.getElementById('clear_button'),
     submit = document.getElementById('submit_button'),
     checkButton = document.getElementsByClassName('check'),
     deleteButton = document.getElementsByClassName('delete'),
     example = document.getElementById('example'),
     secondaryButtons = document.getElementById('secondary_buttons')
  ];

  // Clear field when 'Clear' button clicked
  clear.addEventListener('click', function() {
    var input = document.getElementById('input');
    input.value = '';
  });

  // append user input to new li
  function newItem() {
    var newLi = document.createElement('li');
    newLi = tasks.insertBefore(newLi, secondaryButtons); // append new li to ul '#tasks'
    newLi.innerText = input.value; // print user input in new li
    //var newSecondaryButtons = document.createElement('li');
    //newSecondaryButtons.appendChild(newSecondaryButtons);
  };

// 'Submit' Clicked
  submit.addEventListener('click', function() {

    if (input.value === "") {
      alert('You must first enter a task');
    } else {
      newItem();
      deleteExample();
      input.value = "";
    }
  });

  function deleteExample() {
    if (example !== "") {
    example.parentNode.removeChild(example);
  } else {

  }

    //checkButton[0].parentNode.removeChild(checkButton[0]);
    //deleteButton[0].parentNode.removeChild(deleteButton[0]);
  }


// Object containing check & delete buttons (arrays)

  var secondaryButtonsObj = {

    checkButtons: [
      checkButton[0]
    ],

    deleteButtons: [
      deleteButton[0]
    ]
  };

    secondaryButtonsObj.checkButtons[0].addEventListener('click', function() {

    var completed = document.getElementById('completed');
    var newLi = document.createElement('li');
    completed.appendChild(newLi);
    newLi.innerHTML = tasks.firstElementChild.innerHTML;
    this.parentNode.removeChild(this);
    deleteButton[0].parentNode.removeChild(deleteButton[0]);

  });
console.dir(tasks);
  secondaryButtonsObj.deleteButtons[0].addEventListener('click', function(){


  })


  /*
          var example = tasks.childNodes[1];
        ;
          ;
          alert('clicked');
          //completed.appendChild(newLi);
          //newLi.innerText = "New list item";
 */

}());
