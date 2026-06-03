# practice-importing-modules-anjana-s
Practice Importing Modules

/*
Preparation
1. Create a new project folder named task-manager.
2. Inside the folder, create the following files:
○ tasks.json: Data for your program to parse
○ taskManager.js: A custom module for managing tasks.
○ fileHandler.js: A custom module for saving and reading tasks from
a file.
○ app.js: The main file that will import and use the other modules.
Tasks
1. Create the tasks.json data file:
○ Add an array of strings where each element is a different task.
○ Example:
1. ["pick up groceries", "bake cake", "clean kitchen", "get ready for
party"]
2. This is not a JS module, so do not use any keywords or store the
array in a variable.
2. Create the taskManager.js Module:
○ Define and export the following functions:
1. addTask(tasks, task): Adds a new task to the task list.
2. listTasks(tasks): Logs all tasks to the console.
3. Create the fileHandler.js Module:
○ Use the fs (File System) built-in module to define and export the following functions:
1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON
format.
2. loadTasks(filePath): Reads and parses the tasks from the file.
If the file doesn’t exist, return an empty array.
4. Use the Modules in app.js:
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