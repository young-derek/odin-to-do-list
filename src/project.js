export const Project = (title, dueDate, selected) => {
    return {
        title: title,
        dueDate: dueDate,
        tasks: [],
        selected: selected
    }
};