const useDeleteTaskList = (state, dispatch) => {
  const deleteTaskList = deleteElementsId => {
    const shallowCopy = [...state]
    const filter = shallowCopy.filter(item => item.id !== deleteElementsId)
    dispatch({ type: "deleteTaskList", payload: filter })
  }
  return deleteTaskList
}

export default useDeleteTaskList
