// Função q adiciona tarefa
function addTask() {
    const taskTitle = document.querySelector('#task-title').value;
    if(taskTitle) {
        //clona template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);
        
        //Adiciona o título
        newTask.querySelector('.task-title').textContent = taskTitle;

        // remover a classe hide
        newTask.classList.remove('hide');
        newTask.classList.remove('template');

        //adiciona a nova tarefa na lista
        const list = document.querySelector('#tasks-list');
        list.appendChild(newTask);

        //adiciona o evento de remover tarefa
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this);   
        });

        //adiciona o evento de marcar tarefa como feita
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            completeTask(this);
        });

        //limpa o campo de input
        document.querySelector('#task-title').value = '';
    }
}

// Função que marca a tarefa como feita
function completeTask(btn) {
    //pega o elemento pai do botão
    const taskBox = btn.parentNode;
    
    //adiciona a classe de tarefa feita
    taskBox.classList.toggle('done');
}

// Função que remove a tarefa
function removeTask(btn) {
    //pega o elemento pai do botão
    const taskBox = btn.parentNode;
    
    //remove a tarefa
    taskBox.remove();
}


//Evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addTask();
});