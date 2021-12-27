const deleteTask = (state, payload) => {
  return { ...state, tasks: payload }
}

export default deleteTask
