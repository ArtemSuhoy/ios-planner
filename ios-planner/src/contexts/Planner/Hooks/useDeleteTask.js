import firestoreService from "services/firebase/firestoreService"
const useDeleteTask = (state, dispatch) => {
  const deleteTask = deleteElementId => {
    const shallowCopy = [...state.tasks]
    const filter = shallowCopy.filter(item => item.taskId !== deleteElementId)
    dispatch({ type: "deleteTask", payload: filter })
    firestoreService.deleteDocument("task", deleteElementId)
  }
  return deleteTask
}

export default useDeleteTask
