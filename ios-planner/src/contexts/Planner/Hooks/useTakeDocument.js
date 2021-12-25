const useTakeDocument = (state, dispatch) => {
  const takeDocument = collection => {
    console.log("Collection", collection)
    dispatch({ type: "takeDocument", payload: collection })
  }
  return takeDocument
}

export default useTakeDocument
