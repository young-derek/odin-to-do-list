/**
 *
 * @param {string} title
 * @param {date} dueDate
 * @returns New Project object
 */

export const Project = (title, dueDate) => {
    return {
        title: title,
        dueDate: dueDate,
        tasks: [],
        selected: false,
    };
};
