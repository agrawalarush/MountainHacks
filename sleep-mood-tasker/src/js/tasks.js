// This file manages task-related functionality. It includes functions to create, read, update, and delete tasks based on user input and mood/sleep data.

const tasks = [];

// Function to create a new task
function createTask(title, sleepHours, mood) {
    const task = {
        id: Date.now(),
        title,
        sleepHours,
        mood,
        completed: false
    };
    tasks.push(task);
    return task;
}

// Function to get tasks based on sleep and mood
function getTasks(sleepHours, mood) {
    return tasks.filter(task => {
        if (mood === 'happy' && sleepHours >= 7) {
            return true; // Assign more tasks
        } else if (mood === 'neutral' && sleepHours >= 5) {
            return true; // Assign moderate tasks
        } else if (mood === 'sad' && sleepHours < 5) {
            return false; // Assign fewer tasks
        }
        return false;
    });
}

// Function to update a task
function updateTask(id, updatedData) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
        return tasks[taskIndex];
    }
    return null;
}

// Function to delete a task
function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return true;
    }
    return false;
}

// Exporting functions for use in other modules
export { createTask, getTasks, updateTask, deleteTask };