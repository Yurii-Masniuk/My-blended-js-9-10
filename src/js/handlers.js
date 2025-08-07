import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import { nanoid } from 'nanoid';
import { renderTask } from './render-tasks';
import { saveTasks, loadTasks } from './local-storage-api';

let tasks = loadTasks();

export function onTaskFormSubmit(event) {
    event.preventDefault();

    const { taskName, taskDescription } = event.target.elements;
    const taskNameValue = taskName.value.trim();
    const taskDescriptionValue = taskDescription.value.trim();
    console.log(event.target.elements);

    if (!taskNameValue || !taskDescriptionValue) {
        iziToast.error({ message: 'Fill input', position: 'topLeft' });
        return;
        
    };    

    const task = {
        taskId: nanoid(),
        taskName: taskNameValue,
        taskDescription: taskDescriptionValue,
    };
    tasks.push(task);
    saveTasks(tasks);
    renderTask(task);
    
    event.target.reset();
};

export function onTaskDelete(event) {
  if (!event.target.classList.contains('task-list-item-btn')) return;

  const li = event.target.closest('li');
  const id = li.dataset.id;

  tasks = tasks.filter(task => task.taskId !== id);
  saveTasks(tasks);
  li.remove();
};