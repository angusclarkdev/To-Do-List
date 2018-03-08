(function() {

// Clear field when 'Clear' button clicked

const clear = document.getElementById('clear_button');
clear.addEventListener('click', function() {
    const input = document.getElementById('input');
    input.value = '';
});

// Print task in 'Tasks' when 'Submit' button clicked

const submit = document.getElementById('submit_button');

submit.addEventListener('click', function() {


    let newItem = document.createElement('li');  // create new li
    let tasks = document.getElementById('tasks');

    tasks.appendChild(newItem);
    newItem.innerText = input.value;  // print user input in new li

    if (input.value !== '') {
        input.value = '';
      }
});
})();
