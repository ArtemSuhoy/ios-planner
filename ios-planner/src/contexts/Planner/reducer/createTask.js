const createTask = (state, payload) => {
  return { ...state, tasks: [...state.tasks, payload] }
}

export default createTask
