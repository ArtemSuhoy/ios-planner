import { useReducer, useEffect, useState } from "react"
import { PlannerContext } from "."
import {
  useCreateTaskList,
  useDeleteTaskList,
  useUpdateTaskList,
  useTakeDocument,
  useCreateTask,
  useDeleteTask,
  useUpdateTask,
} from "./Hooks"
import { reducer } from "./reducer/reducer"
import firestoreService from "services/firebase/firestoreService"

const PlannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { categories: [], tasks: [] })
  const takeDocument = useTakeDocument(state, dispatch)

  useEffect(() => {
    const takeData = async () => {
      const BDTaskListId = await firestoreService.queryDocuments("category")
      const BDTaskId = await firestoreService.queryDocuments("task")
      takeDocument({ categories: BDTaskListId, tasks: BDTaskId })
    }
    takeData()
  }, [])

  const createTaskList = useCreateTaskList(dispatch)
  const deleteTaskList = useDeleteTaskList(state, dispatch)
  const updateTaskList = useUpdateTaskList(state, dispatch)

  const createTask = useCreateTask(dispatch)
  const deleteTask = useDeleteTask(state, dispatch)
  const updateTask = useUpdateTask(state, dispatch)

  const useCurrentCategory = () => {
    const [currentCategory, setCurrentCategory] = useState(false)
    return { currentCategory, setCurrentCategory }
  }

  const { currentCategory, setCurrentCategory } = useCurrentCategory()

  console.log(currentCategory)
  return (
    <PlannerContext.Provider
      value={{
        state,
        createTaskList,
        deleteTaskList,
        updateTaskList,
        useCreateTask,
        createTask,
        deleteTask,
        updateTask,
        currentCategory,
        setCurrentCategory,
      }}>
      {children}
    </PlannerContext.Provider>
  )
}

export default PlannerProvider
