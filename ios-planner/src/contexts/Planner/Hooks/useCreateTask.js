import firestoreService from "services/firebase/firestoreService"

const useCreateTask = dispatch => {
  const createTask = task => {
    const payload = task
    firestoreService.createDocument("task", payload.taskId, {
      ...task,
    })
    dispatch({ type: "createTask", payload: payload })
  }
  return createTask
}

export default useCreateTask
