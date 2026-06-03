/*
Create the fileHandler.js Module:
○ Use the fs (File System) built-in module to define and export the following functions:
1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON
format.
2. loadTasks(filePath): Reads and parses the tasks from the file.
If the file doesn’t exist, return an empty array.
*/

const fs = require("fs");

function saveTasks(filePath, tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
    console.log("Tasks saved successfully!");
}

function loadTasks(filePath) {
    if (fs.existsSync(filePath)) {

        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data)
    } else {
        console.log("File does not exist!");
        return [];
    }
}

module.exports = {saveTasks, loadTasks};