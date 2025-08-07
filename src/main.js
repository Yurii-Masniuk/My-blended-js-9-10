import { onTaskFormSubmit, onTaskDelete } from "./js/handlers";
import { refs } from "./js/refs";
import { loadTasks } from "./js/local-storage-api";
import { renderTask } from "./js/render-tasks";
import { toggleTheme, initTheme } from "./js/theme-switcher";

refs.taskForm.addEventListener('submit', onTaskFormSubmit);
refs.taskList.addEventListener('click', onTaskDelete);
refs.themeToggleBtn.addEventListener('click', toggleTheme);

const tasks = loadTasks();
tasks.forEach(renderTask);

initTheme();

refs.taskForm.addEventListener('submit', onTaskFormSubmit);