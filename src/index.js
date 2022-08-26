import './style.css';
import { createPageLayout } from './page-layout.js';
import { addEventListeners } from './event-listeners';
import { Task } from './task';
import { Project } from './project';
import { refreshProjectsDisplay } from './utility';

((run) => {
    createPageLayout();
    addEventListeners();
    const toDoList = [
        Project('Default Project', 2022 - 10 - 10, [], true),
    ];
    const projectsList = document.querySelector('#projects-list');
    const tasksList = document.querySelector('#tasks-list');


    refreshProjectsDisplay(toDoList, projectsList);
})();
