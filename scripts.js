document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = document.getElementById('new-task').value;

    if (taskText.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click event from bubbling up to the li
        li.remove();
    });

    li.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(li);

    document.getElementById('new-task').value = '';
});
