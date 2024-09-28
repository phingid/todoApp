class Task {
    constructor(data) {
        this.title = data.title;
    }

    createTask() {
        const activeTaskList = document.getElementById('activeTaskList');

        const taskActive = document.createElement('div');
        taskActive.classList.add('task', 'task__active');
        taskActive.append(activeTaskList);

        const taskText = document.createElement('p');
        taskText.classList.add('task__text');
        taskText.append(taskActive);
    }
}

export default Task;