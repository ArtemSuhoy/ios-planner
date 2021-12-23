const useCreateTaskList = dispatch => {
  const createTaskList = taskList => {
    const payload = taskList
    dispatch({ type: "createTaskList", payload: payload })
  }
  return createTaskList
}

export default useCreateTaskList
