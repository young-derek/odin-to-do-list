// File that contains the to do list functionality
import { projectSelected } from './event-listeners';
import { toDoList } from '.';

// Toggle modal visibility
export const toggleModal = (modal) => {
    modal.classList.toggle('inactive');
    modal.reset();
};

// Function to refresh list of projects
export const refreshProjectsDisplay = () => {
    const projectsList = document.querySelector('#projects-list');
    // Clear current projects displayed

    projectsList.innerHTML = '';

    // Append each project as a list item
    toDoList.forEach((project) => {
        const listItem = document.createElement('li');
        listItem.textContent = project.title;
        projectsList.append(listItem);
    });
};

// function to refresh list of tasks
export const refreshTasksDisplay = () => {
    const tasksList = document.querySelector('#tasks-list');

    // Clear the task list
    tasksList.innerHTML = '';

    // Append each task item for the current project to the DOM
    toDoList[projectSelected].tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Title: ${task.title}, Due Date: ${task.dueDate}, Priority: ${task.priority}, Notes: ${task.notes}`;
        tasksList.append(listItem);
    });
};

// Function to append an item to an array
export const pushToArray = (array, item) => {
    array.push(item);
};
