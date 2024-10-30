
import './App.css';
import { BrowserRouter, Route, NavLink,Routes } from 'react-router-dom'


import Slidebar from './component/Slidebar';
import Dashboard from './pages/Dashboard';
import Finance from './pages/Finance';
import Event from './pages/Event';
import HR from './pages/HR';
import Message from './pages/Message';
import Noticebord from './pages/Noticebord';
import Product from './pages/Product';
import Ticket from './pages/Ticket';
import Work from './pages/Work';
import Settings from './pages/Settings';


function App() {
  return (
    <BrowserRouter>
    <Slidebar>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/finance" element={<Finance/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/hr" element={<HR/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/noticebord" element={<Noticebord/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/ticket" element={<Ticket/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/settings" element={<Settings/>}/>
       
       
    </Routes>
    </Slidebar>
    </BrowserRouter>
  );
}

export default App;
