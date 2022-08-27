/**
 * 
 * @param {string} title Task title
 * @param {date} dueDate Task due date
 * @param {string} priority Task priority level
 * @param {string} notes Additional notes about the task
 * @returns New task object
 */
export const Task = (title, dueDate, priority, notes) => {
    return {
        title: title,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
    }
}