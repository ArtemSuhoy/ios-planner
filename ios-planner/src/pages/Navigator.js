import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AppLayout } from "components"
import { CategoryAdvancedView } from "domains/Task/Components/CategoryAdvancedView"
import { TaskAll } from "./TaskAll"
const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AppLayout content={<CategoryAdvancedView />} />
        </Route>

        <Route path="/today" exact>
          <AppLayout query="/today" />
        </Route>

        <Route path="/sheduled" exact>
          <AppLayout query="/sheduled" />
        </Route>

        <Route path="/all" exact>
          <AppLayout query="/all" content={<TaskAll />} />
        </Route>

        <Route path="/flags" exact>
          <AppLayout query="/flags" />
        </Route>
      </Switch>
    </Router>
  )
}

export default Navigator
