// This file handles data storage and retrieval. It manages saving tasks to local storage and loading them when the application starts.

const storage = {
    saveTasks: function(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },

    loadTasks: function() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    },

    clearTasks: function() {
        localStorage.removeItem('tasks');
    }
};

export default storage;