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
    projectsList.id = 'projects-list';
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
    tasksList.id = 'tasks-list';
    btnAddTask.id = 'btn-add-task';
    btnAddTask.textContent = '+ Add New Task';

    // FOOTER SECTION
    const footer = document.createElement('footer');
    const copyrightInfo = document.createElement('p');

    // TASK MODAL SECTION
    const taskModal = document.createElement('form');
    const taskModalTitle = document.createElement('h2');
    const taskModalTextInputContainer = document.createElement('div');
    const taskModalTextInput = document.createElement('input');
    const taskModalTextLabel = document.createElement('label');
    const taskModalDateInputContainer = document.createElement('div');
    const taskModalDateInput = document.createElement('input');
    const taskModalDateLabel = document.createElement('label');
    const btnTaskModalSubmit = document.createElement('button');
    const btnTaskModalCancel = document.createElement('button');
    const taskModalPriorityContainer = document.createElement('div');
    const taskModalPriorityLabel = document.createElement('label');
    const taskModalPriority = document.createElement('select');
    const taskModalDetails = document.createElement('textarea');

    taskModalPriority.innerHTML = `
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
    `;

    taskModalTitle.textContent = 'New Task:';
    btnTaskModalSubmit.textContent = 'Submit';
    btnTaskModalCancel.textContent = 'Cancel';
    taskModalPriorityLabel.textContent = 'Task priority: ';
    taskModalDateLabel.textContent = 'Date: ';
    taskModalTextLabel.textContent = 'Task: ';

    taskModal.id = 'task-modal';
    taskModalDateInput.id = 'task-modal-date-input';
    taskModalTextInput.id = 'task-modal-text-input';
    btnTaskModalSubmit.id = 'btn-task-modal-submit';
    btnTaskModalCancel.id = 'btn-task-modal-cancel';
    taskModalPriority.id = 'task-modal-priority';
    taskModalDetails.id = 'task-modal-details';

    taskModal.classList.add('inactive');

    taskModalTextInput.setAttribute('type', 'text');
    taskModalTextLabel.setAttribute('for', 'task-modal-text-input');
    taskModalDateInput.setAttribute('type', 'date');
    taskModalDateLabel.setAttribute('for', 'task-modal-date-input');
    taskModalPriorityLabel.setAttribute('for', 'task-modal-priority');
    taskModalPriority.setAttribute('name', 'task-modal-priority');
    btnTaskModalSubmit.type = 'button';
    btnTaskModalCancel.type = 'button';

    // NEW PROJECT MODAL SECTION
    const projectModal = document.createElement('form');
    const projectModalTitle = document.createElement('h2');
    const projectModalTextInputContainer = document.createElement('div');
    const projectModalTextInput = document.createElement('input');
    const projectModalTextLabel = document.createElement('label');
    const projectModalDateContainer = document.createElement('div');
    const projectModalDateInput = document.createElement('input');
    const projectModalDateLabel = document.createElement('label');
    const btnProjectModalSubmit = document.createElement('button');
    const btnProjectModalCancel = document.createElement('button');

    projectModal.id = 'project-modal';
    projectModalTextInput.id = 'project-modal-text-input';
    btnProjectModalSubmit.id = 'btn-project-modal-submit';
    btnProjectModalCancel.id = 'btn-project-modal-cancel';
    projectModalDateInput.id = 'project-modal-date-input';

    projectModal.classList.add('inactive');

    projectModalTextLabel.setAttribute('for', 'project-modal-text-input');
    projectModalDateLabel.setAttribute('for', 'project-modal-date-input');
    btnProjectModalSubmit.type = 'button';
    btnProjectModalCancel.type = 'button';
    btnProjectModalSubmit.textContent = 'Submit';
    btnProjectModalCancel.textContent = 'Cancel';
    projectModalTitle.textContent = 'New Project: ';
    projectModalDateLabel.textContent = 'Due Date: ';
    projectModalTextLabel.textContent = 'Title: ';
    projectModalDateInput.setAttribute('type', 'date');

    // APPEND SECTION
    body.append(mainContainer);
    mainContainer.append(
        header,
        projectsSection,
        tasksSection,
        footer,
        taskModal,
        projectModal
    );
    header.append(pageTitle);
    projectsSection.append(
        projectsTitle,
        btnAddProject,
        projectsList
    );
    tasksSection.append(tasksTitle, btnAddTask, tasksList);
    taskModalTextInputContainer.append(taskModalTextLabel, taskModalTextInput);
    taskModalDateInputContainer.append(taskModalDateLabel, taskModalDateInput);
    taskModalPriorityContainer.append(
        taskModalPriorityLabel,
        taskModalPriority
    );
    taskModal.append(
        taskModalTitle,
        taskModalTextInputContainer,
        taskModalDateInputContainer,
        taskModalPriorityContainer,
        taskModalDetails,
        btnTaskModalSubmit,
        btnTaskModalCancel
    );
    projectModalTextInputContainer.append(projectModalTextLabel, projectModalTextInput);
    projectModalDateContainer.append(projectModalDateLabel, projectModalDateInput);
    projectModal.append(
        projectModalTitle,
        projectModalTextInputContainer,
        projectModalDateContainer,
        btnProjectModalSubmit,
        btnProjectModalCancel
    );
    footer.append(copyrightInfo);

};
