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

    // APPEND SECTION
    body.append(mainContainer);
    mainContainer.append(header, projectsSection, tasksSection, footer);
    header.append(pageTitle);
    projectsSection.append(projectsTitle, btnAddProject, projectsList);
    tasksSection.append(tasksTitle, btnAddTask, tasksList);
    footer.append(copyrightInfo);
};
