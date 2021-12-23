const reducer = (state, action) => {
  switch (action.type) {
    case "createTaskList": {
      return [...state, action.payload]
    }

    case "deleteTaskList": {
      return action.payload
    }

    case "updateTaskList": {
      return action.payload
    }
    default:
      return state
  }
}

export { reducer }
