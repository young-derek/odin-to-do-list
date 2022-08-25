export const createPageLayout = () => {
    // MAIN CONTAINER
    const body = document.querySelector('body');
    const mainContainer = document.createElement('div');

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

    // TASKS SECTION
    const tasksSection = document.createElement('section');
    const tasksTitle = document.createElement('h2');
    const btnAddTask = document.createElement('button');
    const tasksList = document.createElement('li');
    tasksTitle.textContent = 'Tasks';

    // FOOTER SECTION
    const footer = document.createElement('footer');
    const copyrightInfo = document.createElement('p');


    // APPEND SECTION
    body.append(mainContainer);
    mainContainer.append(header, projectsSection, tasksSection, footer);
    header.append(pageTitle);
    projectsSection.append(projectsTitle, projectsList, btnAddProject);
    tasksSection.append(tasksTitle, tasksList, btnAddTask);
    footer.append(copyrightInfo);


};
