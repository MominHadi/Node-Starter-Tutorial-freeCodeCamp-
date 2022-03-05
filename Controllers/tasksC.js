const getAllTasks = (req, res) => {
  res.send("Get all the tasks");
};

const createTask = (req, res) => {
  res.send("Create a Task");
};
const getTask = (req, res) => {
  res.send("Get  Single task");
};

const updateTask = (req, res) => {
  res.send("Update a task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};
module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
