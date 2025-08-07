import { refs } from './refs';

export function renderTask(task) {
  const li = document.createElement('li');
  li.classList.add('task-list-item');
  li.dataset.id = task.taskId;

  li.innerHTML = `
    <button class="task-list-item-btn">Delete</button>
    <h3>${task.taskName}</h3>
    <p>${task.taskDescription}</p>
  `;

  refs.taskList.appendChild(li);
}

export function clearTasks() {
  refs.taskList.innerHTML = '';
}