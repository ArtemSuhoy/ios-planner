const useUpdateTaskList = (state, dispatch) => {
  const updateTaskList = (id, text) => {
    const shallowCopy = [...state]
    const filter = shallowCopy.map(item => {
      item.id === id && (item.name = text)
      return item
    })

    dispatch({ type: "updateTaskList", payload: filter })
  }
  return updateTaskList
}

export default useUpdateTaskList
