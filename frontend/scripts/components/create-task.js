import HTTP from '../services/classes/Http.js';
import Task from '../services/classes/Task.js';

const createTask = function () {
    const taskTextField = document.getElementById('taskText');
    const addTask = document.getElementById('addTask');
    const Http = new HTTP();
    
    let id = 1;

    addTask.addEventListener('click', () => {
        const data = {
            id: id,
            title: taskTextField.value,
        }

        const task = new Task(data);
        task.createTask();

        Http.post('tasks', data);

        taskTextField.value = '';
        
        
    })
}
createTask();

export default createTask;