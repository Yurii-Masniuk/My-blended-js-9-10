export function onTaskFormSubmit(event) {
    event.preventDefault();


    const { taskName, taskDescription } = event.target.elements;
    const taskNameValue = taskName.value.trim();
    const taskDescriptionValue = taskDescription.value.trim();
    console.log(event.target.elements);
    
}