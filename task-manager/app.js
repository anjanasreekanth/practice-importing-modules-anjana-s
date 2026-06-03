/*
Use the Modules in app.js:
○ Import the custom modules (taskManager.js and fileHandler.js)
and the path built-in module.
○ Implement the following functionality:
1. Load existing tasks from a file named tasks.json.
2. Add new tasks to the list.
3. List all tasks.
4. Save the updated task list back to the file.
Requirements
● Use require to import all modules.
● Test the program by adding, listing, and saving tasks

*/
const path = require("path");
const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

const filePath = path.join(__dirname, "tasks.json");

let tasks = fileHandler.loadTasks(filePath);

// taskManager.addTask(tasks, "Wrap gifts");
// taskManager.addTask(tasks, "pick up party hats") 

taskManager.listTasks(tasks);

fileHandler.saveTasks(filePath, tasks);

// node app.js