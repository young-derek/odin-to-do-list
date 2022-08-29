import './style.css';
import { createPageLayout } from './page-layout.js';
import { Project } from './project';
import { refreshProjectsDisplay, refreshTasksDisplay } from './utility';

export const toDoList = [Project('Default Project', '2025-01-01', [], true)];

((run) => {
    createPageLayout();
    refreshProjectsDisplay();
    refreshTasksDisplay();
})();
