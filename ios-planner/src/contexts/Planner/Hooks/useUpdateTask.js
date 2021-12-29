import firestoreService from "services/firebase/firestoreService"

const useUpdateTask = (state, dispatch) => {
  const updateTask = (id, value) => {
    const shallowCopy = [...state.tasks]

    const index = shallowCopy.findIndex((item, i) =>
      item.taskId === id ? i : false
    )

    const filter = shallowCopy.map(item => {
      if (item.taskId === id) item = { ...item, ...value }
      return item
    })

    dispatch({ type: "updateTask", payload: filter })
    firestoreService.updateDocument("task", id, {
      ...shallowCopy[index],
      ...value,
    })
  }
  return updateTask
}

export default useUpdateTask
