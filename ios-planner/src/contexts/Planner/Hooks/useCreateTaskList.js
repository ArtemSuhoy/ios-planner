import firestoreService from "services/firebase/firestoreService"

const useCreateTaskList = dispatch => {
  const createTaskList = taskList => {
    const payload = taskList
    firestoreService.createDocument("category", payload.taskListId, {
      taskListId: payload.taskListId,
      taskListName: payload.taskListName,
    })
    dispatch({ type: "createTaskList", payload: payload })
  }
  return createTaskList
}

export default useCreateTaskList
