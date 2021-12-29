const createTaskList = (state, payload) => {
  return { ...state, categories: [...state.categories, payload] }
}

export default createTaskList
