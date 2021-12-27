const createTaskList = (state, payload) => {
  console.log(state, " state")

  console.log(state.categories)
  return { ...state, categories: [...state.categories, payload] }
}

export default createTaskList
