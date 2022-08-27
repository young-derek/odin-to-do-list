// File that contains the to do list functionality
import { projectSelected } from './page-layout';
import { toDoList } from '.';

// Toggle modal visibility
export const toggleModal = (modal) => {
    modal.classList.toggle('inactive');
    modal.reset();
};

/**
 * Function to refresh list of projects in the DOM
 */
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

/**
 * Function to refresh list of tasks in the DOM
 */
export const refreshTasksDisplay = () => {
    const tasksList = document.querySelector('#tasks-list');

    // Clear the task list
    tasksList.innerHTML = '';

    // Append each task item for the current project to the DOM
    toDoList[projectSelected].tasks.forEach((task) => {
        const taskItem = document.createElement('li');
        // checkbox, task title, due date, expand button (to show textarea notes), edit button, remove button
        const checkbox = document.createElement('input');
        const taskTitle = document.createElement('div');
        const dueDate = document.createElement('div');
        const expandButton = document.createElement('button');
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button');

        taskItem.classList.add('task-item');
        checkbox.classList.add('task-checkbox');
        taskTitle.classList.add('task-title');
        dueDate.classList.add('task-due-date');
        expandButton.classList.add('task-expand-button');
        editButton.classList.add('task-edit-button');
        removeButton.classList.add('task-remove-button');

        taskTitle.textContent = task.title;
        dueDate.textContent = task.dueDate;



        

        // taskItem.textContent = `Title: ${task.title}, Due Date: ${task.dueDate}, Priority: ${task.priority}, Notes: ${task.notes}`;
        tasksList.append(taskItem);
    });
};

// Function to append an item to an array
export const pushToArray = (array, item) => {
    array.push(item);
};
