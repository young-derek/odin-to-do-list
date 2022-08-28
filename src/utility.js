import { projectSelected, taskEditIndex } from './page-layout';
import { toDoList } from '.';

// Toggle modal visibility
export const toggleModal = (modal) => {
    modal.classList.toggle('inactive');
    modal.reset();
};

// Function to refresh list of projects in the DOM
export const refreshProjectsDisplay = () => {
    const projectsList = document.querySelector('#projects-list');
    // Clear current projects displayed
    projectsList.innerHTML = '';

    // Append each project as a list item
    toDoList.forEach((project) => {
        const projectItem = document.createElement('li');
        const projectTitle = document.createElement('p');
        const projectDueDate = document.createElement('p');
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button');

        projectTitle.textContent = project.title;
        projectDueDate.textContent = `Due: ${project.dueDate}`;
        editButton.textContent = 'Edit';
        removeButton.textContent = 'Remove';

        projectItem.classList.add('project-item');
        projectTitle.classList.add('project-title');
        removeButton.classList.add('project-remove-button');
        editButton.classList.add('project-edit-button');

        editButton.setAttribute('type', 'button');
        removeButton.setAttribute('type', 'button');

        editButton.addEventListener('click', () => {
            const newProjectTitleInput = document.createElement('input');
            const newProjectDueDateInput = document.createElement('input');
            const newProjectSubmitButton = document.createElement('button');

            newProjectDueDateInput.setAttribute('type', 'date');
            newProjectSubmitButton.setAttribute('type', 'button');

            newProjectSubmitButton.textContent = 'Submit';

            let projectIndex = Array.from(
                projectsList.querySelectorAll('.project-item')
            ).indexOf(editButton.parentElement);

            projectTitle.replaceWith(newProjectTitleInput);
            projectDueDate.replaceWith(newProjectDueDateInput);
            editButton.replaceWith(newProjectSubmitButton);

            newProjectSubmitButton.addEventListener('click', () => {
                toDoList[projectIndex].title = newProjectTitleInput.value;
                toDoList[projectIndex].dueDate = newProjectDueDateInput.value;

                refreshProjectsDisplay();
            });
        });

        removeButton.addEventListener('click', () => {
            let projectIndex = Array.from(
                projectsList.querySelectorAll('.project-item')
            ).indexOf(removeButton.parentElement);

            toDoList.splice(projectIndex, 1);
            refreshProjectsDisplay();
        });

        projectItem.append(
            projectTitle,
            projectDueDate,
            editButton,
            removeButton
        );
        projectsList.append(projectItem);
    });
};

// Function to refresh list of tasks in the DOM
export const refreshTasksDisplay = () => {
    const tasksList = document.querySelector('#tasks-list');

    // Clear the task list
    tasksList.innerHTML = '';

    // Append each task item for the current project to the DOM
    toDoList[projectSelected].tasks.forEach((task) => {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const taskTitle = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const notesButton = document.createElement('button');
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button');

        taskItem.classList.add('task-item');
        checkbox.classList.add('task-checkbox');
        taskTitle.classList.add('task-title');
        dueDate.classList.add('task-due-date');
        priority.classList.add('task-priority');
        notesButton.classList.add('task-notes-button');
        editButton.classList.add('task-edit-button');
        removeButton.classList.add('task-remove-button');

        taskTitle.textContent = task.title;
        dueDate.textContent = `Due: ${task.dueDate}`;
        priority.textContent = `${task.priority} Priority`;
        notesButton.textContent = 'View Notes';
        editButton.textContent = 'Edit';
        removeButton.textContent = 'Remove';

        checkbox.setAttribute('type', 'checkbox');

        // Add conditional classes
        if (task.complete === true) {
            taskItem.classList.add('task-complete');
            checkbox.checked = true;
        } else if (task.complete === false) {
            taskItem.classList.remove('task-complete');
        }

        if (task.priority === 'Low') {
            taskItem.classList.add('low-priority');
        } else if (task.priority === 'Medium') {
            taskItem.classList.add('medium-priority');
        } else if (task.priority === 'High') {
            taskItem.classList.add('high-priority');
        }

        checkbox.addEventListener('click', () => {
            let taskSelected =
                toDoList[projectSelected].tasks[
                    Array.from(
                        tasksList.querySelectorAll('.task-item')
                    ).indexOf(checkbox.parentElement)
                ];

            console.log(
                Array.from(tasksList.querySelectorAll("input[type='checkbox']"))
            );
            console.log(
                Array.from(
                    tasksList.querySelectorAll("input[type='checkbox']")
                ).indexOf(checkbox)
            );

            if (taskSelected.complete === true) {
                taskSelected.complete = false;
                taskItem.classList.remove('task-complete');
            } else if (taskSelected.complete === false) {
                taskSelected.complete = true;
                taskItem.classList.add('task-complete');
            }
        });

        editButton.addEventListener('click', () => {
            const taskModal = document.querySelector('#task-modal');
            const taskModalTextInput = document.querySelector(
                '#task-modal-text-input'
            );
            const taskModalDateInput = document.querySelector(
                '#task-modal-date-input'
            );
            const taskModalPriority = document.querySelector(
                '#task-modal-priority'
            );
            const taskModalNotes = document.querySelector('#task-modal-notes');

            let taskIndexSelected = Array.from(
                tasksList.querySelectorAll('.task-item')
            ).indexOf(editButton.parentElement);

            let taskSelected =
                toDoList[projectSelected].tasks[taskIndexSelected];

            taskEditIndex[0] = taskIndexSelected;
            toggleModal(taskModal);

            taskModalTextInput.value = taskSelected.title;
            taskModalDateInput.value = taskSelected.dueDate;
            taskModalPriority.value = taskSelected.priority;
            taskModalNotes.value = taskSelected.notes;
        });

        removeButton.addEventListener('click', () => {
            let taskIndexSelected = Array.from(
                tasksList.querySelectorAll('.task-item')
            ).indexOf(removeButton.parentElement);

            toDoList[projectSelected].tasks.splice(taskIndexSelected, 1);
            refreshTasksDisplay();
        });

        taskItem.append(
            checkbox,
            taskTitle,
            dueDate,
            priority,
            notesButton,
            editButton,
            removeButton
        );

        // Create additional notes div
        const taskNotesContainer = document.createElement('div');
        taskNotesContainer.textContent = `Notes: ${task.notes}`;
        taskNotesContainer.classList.add(
            'task-notes-container',
            'display-none'
        );

        notesButton.addEventListener('click', () => {
            taskNotesContainer.classList.toggle('display-none');
            console.log(taskNotesContainer.classList);
        });

        tasksList.append(taskItem, taskNotesContainer);
    });
};

// Function to push an item to an array
export const pushToArray = (array, item) => {
    array.push(item);
};
