import {
  createTaskList,
  takeDocument,
  updateTaskList,
  deleteTaskList,
  createTask,
  deleteTask,
  updateTask,
} from "."

const reducer = (state, action) => {
  const { type, payload } = action

  const actionsMap = {
    createTaskList,
    takeDocument,
    updateTaskList,
    deleteTaskList,
    createTask,
    deleteTask,
    updateTask,
  }

  return actionsMap[type](state, payload)
}

export { reducer }
