import { useReducer } from "react"
import { PlannerContext } from "."
import {
  useCreateTaskList,
  useDeleteTaskList,
  useUpdateTaskList,
} from "./Hooks"
import { reducer } from "./reducer/reducer"

const PlannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])

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
