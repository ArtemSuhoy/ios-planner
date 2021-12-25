import { useReducer, useEffect } from "react"
import { PlannerContext } from "."
import {
  useCreateTaskList,
  useDeleteTaskList,
  useUpdateTaskList,
  useTakeDocument,
} from "./Hooks"
import { reducer } from "./reducer/reducer"
import firestoreService from "services/firebase/firestoreService"

const PlannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])
  const takeDocument = useTakeDocument(state, dispatch)

  useEffect(() => {
    const getData = async () => {
      const BDTaskListId = await firestoreService.queryDocuments("category")
      console.log(BDTaskListId, " queryDocuments")
      takeDocument(BDTaskListId)
    }
    getData()
  }, [])

  const createTaskList = useCreateTaskList(dispatch)
  const deleteTaskList = useDeleteTaskList(state, dispatch)
  const updateTaskList = useUpdateTaskList(state, dispatch)
  return (
    <PlannerContext.Provider
      value={{ createTaskList, deleteTaskList, updateTaskList, state }}>
      {children}
    </PlannerContext.Provider>
  )
}

export default PlannerProvider
