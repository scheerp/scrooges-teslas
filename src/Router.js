import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import VehicleOverview from './pages/VehicleOverview'
import VehicleDetail from './pages/VehicleDetail'

const Router = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/vehicleDetail/cknosxo3k6pm70b516ysogq5q">2</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={VehicleOverview} />
        <Route path="/vehicleDetail/:id" component={VehicleDetail} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router
