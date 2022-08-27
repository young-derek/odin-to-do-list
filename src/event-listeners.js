import * as Utility from './utility';
import { Project } from './project';
import { Task } from './task';
import { toDoList } from '.';

export const addEventListeners = () => {
    // Variables for modals
    const taskModal = document.querySelector('#task-modal');
    const projectModal = document.querySelector('#project-modal');

    // Variables for buttons
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

    // Variables for project and task list DOM nodes
    const projectsList = document.querySelector('#projects-list');
    const tasksList = document.querySelector('#tasks-list');

    // Variable to track selected project
    const projectSelected = 0;

    // Display project modal
    addNewProject.addEventListener('click', () => {
        Utility.toggleModal(projectModal);
    });

    // display project modal
    addNewTask.addEventListener('click', () => {
        Utility.toggleModal(taskModal);
    });

    // Select a project
    projectsList.addEventListener('click', (event) => {
        const projectsArray = Array.from(projectsList.children);
        console.log(projectsArray.indexOf(event.target));
    })

    // Submit new project
    submitNewProject.addEventListener('click', () => {
        // Variables for the project modal's input elements
        const projectTitle = document.querySelector(
            '#project-modal-text-input'
        );
        const projectDueDate = document.querySelector(
            '#project-modal-date-input'
        );

        // Create new project with values currently in the project form
        const newProject = Project(projectTitle.value, projectDueDate.value);

        // Push new project to the to do list array
        toDoList.push(newProject);
        console.log(toDoList);

        // Refresh the project list
        Utility.refreshProjectsDisplay(toDoList, projectsList);

        // Toggle off the project modal
        Utility.toggleModal(projectModal);
    });

    // Cancel new project

    // Add new task
    submitNewTask.addEventListener('click', () => {
        // Variables for task modal inputs
        const taskTitle = document.querySelector('#task-modal-text-input');
        const taskDate = document.querySelector('#task-modal-date-input');
        const taskPriority = document.querySelector('#task-modal-priority');
        const taskNotes = document.querySelector('#task-modal-notes');

        // create new task object
        const newTask = Task(taskTitle.value, taskDate.value, taskPriority.value, taskNotes.value);

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
