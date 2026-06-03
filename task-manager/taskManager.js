/*
Create the taskManager.js Module:
○ Define and export the following functions:
1. addTask(tasks, task): Adds a new task to the task list.
2. listTasks(tasks): Logs all tasks to the console.
*/

function addTask(tasks, task) {
	tasks.push(task);
	console.log(`Task "${task}" added!`);
	return tasks;
}

function listTasks(tasks) {
	console.log("Current Tasks:");
	tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
}

module.exports = {addTask,listTasks}; 
