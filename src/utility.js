// functions for event listeners

// Toggle modal visibility
export const toggleModal = (modal) => {
    modal.classList.toggle('inactive');
    modal.reset();
};

// function to refresh list of projects
export const refreshProjectsDisplay = (projectsArray, projectsList) => {
    // Clear current projects displayed
    projectsList.innerHTML = '';
    projectsArray.forEach((project) => {
        const listItem = document.createElement('li');
        listItem.textContent = project.title;
        projectsList.append(listItem);
    });
};

// function to display project specific tasks

// function to display all tasks

// function to append to array
export const pushToArray = (array, item) => {
    array.push(item);
};
