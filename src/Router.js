import { BrowserRouter, Switch, Route } from 'react-router-dom'
import VehicleOverview from './pages/VehicleOverview/VehicleOverview'
import VehicleDetail from './pages/VehicleDetail/VehicleDetail'
import Header from './components/Header/Header'

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={VehicleOverview} />
        <Route path="/vehicleDetail/:id" component={VehicleDetail} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router
