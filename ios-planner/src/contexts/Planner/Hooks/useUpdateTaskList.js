import firestoreService from "services/firebase/firestoreService"

const useUpdateTaskList = (state, dispatch) => {
  const updateTaskList = (id, text) => {
    const shallowCopy = [...state]
    const filter = shallowCopy.map(item => {
      item.taskListId === id && (item.taskListName = text)
      return item
    })

    dispatch({ type: "updateTaskList", payload: filter })
    console.log(id, text, " updateTaskList 1: id, 2: text")
    firestoreService.updateDocument("category", id, {
      taskListName: text,
      taskListId: id,
    })
  }
  return updateTaskList
}

export default useUpdateTaskList
