import './style.css';
import { createPageLayout } from './page-layout.js';
import { addEventListeners } from './event-listeners';
import { Task } from './task';
import { Project } from './project';
import { refreshProjectsDisplay } from './utility';

export const toDoList = [Project('Default Project', 2022 - 10 - 10, [], true)];

((run) => {
    createPageLayout();
    addEventListeners();

    const projectsList = document.querySelector('#projects-list');
    refreshProjectsDisplay(toDoList, projectsList);

})();
