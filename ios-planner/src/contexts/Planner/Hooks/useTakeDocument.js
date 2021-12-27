const useTakeDocument = (state, dispatch) => {
  const takeDocument = collection => {
    dispatch({
      type: "takeDocument",
      payload: { categories: collection.categories, tasks: collection.tasks },
    })
  }
  return takeDocument
}

export default useTakeDocument
