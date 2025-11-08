// This file contains functions related to the user interface. It handles DOM manipulation, updates the display based on user input, and manages user interactions.

document.addEventListener('DOMContentLoaded', () => {
    const sleepInput = document.getElementById('sleep-input');
    const moodInput = document.getElementById('mood-input');
    const taskDisplay = document.getElementById('task-display');
    const assignButton = document.getElementById('assign-button');

    assignButton.addEventListener('click', () => {
        const sleepHours = parseFloat(sleepInput.value);
        const mood = moodInput.value;
        const tasks = assignTasks(sleepHours, mood);
        displayTasks(tasks);
    });

    function assignTasks(sleepHours, mood) {
        let tasks = [];
        if (sleepHours >= 8 && mood === 'happy') {
            tasks = ['Go for a run', 'Read a book', 'Cook a new recipe'];
        } else if (sleepHours >= 6 && mood === 'neutral') {
            tasks = ['Do some light exercise', 'Watch a movie'];
        } else if (sleepHours < 6 || mood === 'sad') {
            tasks = ['Take a nap', 'Meditate', 'Listen to music'];
        } else {
            tasks = ['Relax and do nothing'];
        }
        return tasks;
    }

    function displayTasks(tasks) {
        taskDisplay.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task;
            taskDisplay.appendChild(taskItem);
        });
    }
});