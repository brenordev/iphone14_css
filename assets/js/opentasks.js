const button = document.querySelector('.btn_tasks');
const tasks = document.querySelector('.next_updates');

button.innerText = "Tarefas pendente";

button.addEventListener('click', function(){
    tasks.classList.toggle('taskActive');
    button.innerText = 'Fechar';
        if(tasks.classList == 'next_updates'){
            button.innerText = 'Tarefas pendente';
        }
    
})