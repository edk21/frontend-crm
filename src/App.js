import './App.css';
import {DefaultLayout} from './layout/DefaultLayout';
import {Dashboard} from './pages/dashboard/Dashboard.page';
import TicketList from './pages/listing/TicketList.page';
import AddTicket from './pages/new-ticket/AddTicket.page';
import Ticket from './pages/ticket/Ticket.page';
//import Entry from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
