// app.js
document.addEventListener('DOMContentLoaded', () => {
    const sleepInput = document.getElementById('sleep-input');
    const moodInput = document.getElementById('mood-input');
    const taskList = document.getElementById('task-list');
    const assignButton = document.getElementById('assign-button');

    assignButton.addEventListener('click', () => {
        const sleepHours = parseInt(sleepInput.value);
        const mood = moodInput.value;
        const tasks = getTasksBasedOnSleepAndMood(sleepHours, mood);
        displayTasks(tasks);
    });

    function getTasksBasedOnSleepAndMood(sleepHours, mood) {
        const tasks = [];
        if (sleepHours < 5) {
            tasks.push('Take a short walk to refresh your mind.');
            if (mood === 'happy') {
                tasks.push('Call a friend to share your happiness.');
            } else if (mood === 'sad') {
                tasks.push('Watch a funny movie to lift your spirits.');
            }
        } else if (sleepHours >= 5 && sleepHours < 8) {
            tasks.push('Do some light exercise.');
            if (mood === 'happy') {
                tasks.push('Plan a small gathering with friends.');
            } else if (mood === 'sad') {
                tasks.push('Read a book you enjoy.');
            }
        } else {
            tasks.push('Tackle a challenging project.');
            if (mood === 'happy') {
                tasks.push('Start a new hobby or project.');
            } else if (mood === 'sad') {
                tasks.push('Take time to relax and meditate.');
            }
        }
        return tasks;
    }

    function displayTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }
});