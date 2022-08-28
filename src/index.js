import './style.css';
import { createPageLayout } from './page-layout.js';
import { Task } from './task';
import { Project } from './project';
import { refreshProjectsDisplay, refreshTasksDisplay } from './utility';

export const toDoList = [Project('Default Project', 2022 - 10 - 10, [], true)];

((run) => {
    createPageLayout();
    refreshProjectsDisplay();
    refreshTasksDisplay();
})();
