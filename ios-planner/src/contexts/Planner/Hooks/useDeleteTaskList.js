import firestoreService from "services/firebase/firestoreService"

const useDeleteTaskList = (state, dispatch) => {
  const deleteTaskList = deleteElementId => {
    const shallowCopy = { ...state }
    const filter = shallowCopy.categories.filter(
      item => item.taskListId !== deleteElementId
    )

    shallowCopy.tasks.map(item => {
      console.log(item.parentId === deleteElementId)
      return item.parentId === deleteElementId
        ? firestoreService.deleteDocument("task", item.taskId)
        : false
    })

    dispatch({ type: "deleteTaskList", payload: filter })
    firestoreService.deleteDocument("category", deleteElementId)
  }
  return deleteTaskList
}

export default useDeleteTaskList
