import firestoreService from "services/firebase/firestoreService"

const useDeleteTaskList = (state, dispatch) => {
  const deleteTaskList = deleteElementId => {
    const shallowCopy = [...state]
    const filter = shallowCopy.filter(
      item => item.taskListId !== deleteElementId
    )
    dispatch({ type: "deleteTaskList", payload: filter })
    firestoreService.deleteDocument("category", deleteElementId)
  }
  return deleteTaskList
}

export default useDeleteTaskList
