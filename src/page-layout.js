import { toggleModal } from './toggle-input-modal';

export const createPageLayout = () => {
    // MAIN CONTAINER
    const body = document.querySelector('body');
    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';

    // HEADER SECTION
    const header = document.createElement('header');
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'To Do List!';

    // PROJECTS SECTION
    const projectsSection = document.createElement('section');
    const projectsTitle = document.createElement('h2');
    const projectsList = document.createElement('ul');
    const btnAddProject = document.createElement('button');
    projectsTitle.textContent = 'Projects:';
    projectsTitle.classList.add('section-title');
    projectsSection.id = 'projects-section';
    btnAddProject.id = 'btn-add-project';
    btnAddProject.textContent = '+ Add New Project';

    // TASKS SECTION
    const tasksSection = document.createElement('section');
    const tasksTitle = document.createElement('h2');
    const btnAddTask = document.createElement('button');
    const tasksList = document.createElement('ul');
    tasksTitle.classList.add('section-title');
    tasksTitle.textContent = 'Tasks:';
    tasksSection.id = 'tasks-section';
    btnAddTask.id = 'btn-add-task';
    btnAddTask.textContent = '+ Add New Task';

    // FOOTER SECTION
    const footer = document.createElement('footer');
    const copyrightInfo = document.createElement('p');

    // MODAL SECTION
    const modal = document.createElement('div');
    const modalTitle = document.createElement('h2');
    const modalTextInputContainer = document.createElement('div');
    const modalTextInput = document.createElement('input');
    const modalTextLabel = document.createElement('label');
    const modalDateInputContainer = document.createElement('div');
    const modalDateInput = document.createElement('input');
    const modalDateLabel = document.createElement('label');
    const btnModalSubmit = document.createElement('button');
    const btnModalCancel = document.createElement('button');

    modalTitle.textContent = 'new project/task';
    btnModalSubmit.textContent = 'submit';
    btnModalCancel.textContent = 'cancel';

    modal.id = 'modal';
    modalDateInput.id = 'modal-date-input';
    modalTextInput.id = 'modal-text-input';
    btnModalSubmit.id = 'btn-modal-submit';
    btnModalCancel.id = 'btn-modal-cancel';

    modalTextInput.setAttribute('type', 'text');
    modalTextLabel.setAttribute('for', 'modal-text-input');
    modalDateInput.setAttribute('type', 'date')
    modalDateLabel.setAttribute('for', 'modal-date-input');

    // APPEND SECTION
    body.append(mainContainer);
    mainContainer.append(header, projectsSection, tasksSection, footer, modal);
    header.append(pageTitle);
    projectsSection.append(projectsTitle, btnAddProject, projectsList);
    tasksSection.append(tasksTitle, btnAddTask, tasksList);
    modalTextInputContainer.append(modalTextLabel, modalTextInput);
    modalDateInputContainer.append(modalDateLabel, modalDateInput);
    modal.append(modalTitle, modalTextInputContainer, modalDateInputContainer, btnModalSubmit, btnModalCancel);
    footer.append(copyrightInfo);
};
