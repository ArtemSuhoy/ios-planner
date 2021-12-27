import firestoreService from "services/firebase/firestoreService"

const useUpdateTaskList = (state, dispatch) => {
  const updateTaskList = (id, text) => {
    const shallowCopy = { ...state }
    const filter = shallowCopy.categories.map(item => {
      item.taskListId === id && (item.taskListName = text)
      return item
    })

    dispatch({ type: "updateTaskList", payload: filter })
    firestoreService.updateDocument("category", id, {
      taskListName: text,
      taskListId: id,
    })
  }
  return updateTaskList
}

export default useUpdateTaskList
