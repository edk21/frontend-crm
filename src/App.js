import './App.css';
import {Dashboard} from './pages/dashboard/Dashboard.page';
import TicketList from './pages/listing/TicketList.page';
import AddTicket from './pages/new-ticket/AddTicket.page';
import Ticket from './pages/ticket/Ticket.page';
import Entry from './pages/entry/Entry.page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Entry />
          </Route>
            <PrivateRoute exact path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path='/add-ticket'>
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute exact path='/tickets'>
              <TicketList />
            </PrivateRoute>
            <PrivateRoute exact path='/ticket/:tId'>
              <Ticket />
            </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
