document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  var taskText = taskInput.value.trim();
  if (taskText !== '') {
    var taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.addEventListener('click', function() {
      this.classList.toggle('completed');
    });

    document.getElementById('clearButton').addEventListener('click', function() {
      taskList.innerHTML = '';
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

document.getElementById('openModalButton').addEventListener('click', function() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
});

document.getElementById('modalForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();

  if (name !== '' && email !== '') {
    // Do something with the form data
    console.log('Name:', name);
    console.log('Email:', email);

    // Close the modal
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // Clear the form fields
    nameInput.value = '';
    emailInput.value = '';
  }
});