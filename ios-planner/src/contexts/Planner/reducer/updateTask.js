const { updateTaskList } = require(".")

const updateTask = (state, payload) => {
  return { ...state, tasks: payload }
}

export default updateTask
