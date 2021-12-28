import "./styles/styles.css"
import { Navigator } from "./pages"
import { PlannerProvider } from "./contexts/Planner"

const App = () => {
  return (
    <div className="App">
      <PlannerProvider>
        <Navigator />
      </PlannerProvider>
    </div>
  )
}

export default App
