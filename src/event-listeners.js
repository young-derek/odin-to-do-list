import * as Utility from './utility';
import { Project } from './project';
import { Task } from './task';



export const addEventListeners = () => {
    // Define variables for modals
    const taskModal = document.querySelector('#task-modal');
    const projectModal = document.querySelector('#project-modal');

    // Define variables for each element to listen to
    const addNewProject = document.querySelector('#btn-add-project');
    const addNewTask = document.querySelector('#btn-add-task');
    const submitNewProject = document.querySelector(
        '#btn-project-modal-submit'
    );
    const cancelNewProject = document.querySelector(
        '#btn-project-modal-cancel'
    );
    const submitNewTask = document.querySelector('#btn-task-modal-submit');
    const cancelNewTask = document.querySelector('#btn-task-modal-cancel');

    // display project modal
    addNewProject.addEventListener('click', () => {
        Utility.toggleModal(projectModal);
    });

    // display project modal
    addNewTask.addEventListener('click', () => {
        Utility.toggleModal(taskModal);
    });

    // select a project

    // 

    // submit new project

    // cancel new project

    // add new task
    submitNewTask.addEventListener('click', () => {
        // create new task object
        // append to an array

        
        // need to find array to append to... anonymous function?
        // 
    });

    // cancel new task

    // delete project

    // delete task

    // edit task (bring up modal with task info filled in)

    // mark task complete

    // change task priority (low, medium, high)

    // display tasks by project

    // display all tasks

    //

    //add'tl:
    // edit project name
    // sort tasks by due date
    // manually change order of tasks (drop down list w/ number of tasks in project);
};
