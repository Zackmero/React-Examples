import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddClientComponent from './Components/AddClientComponent';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListClients from './ListClients';

function App() {
  return (
    <div >

      <BrowserRouter>

        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListClients />} />
            <Route exact path='/client' element={<ListClients />} />
            <Route exact path='/add-client' element={<AddClientComponent />} />
            <Route exact path='/edit-client/:id' element={<AddClientComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>



    </div>
  );
}

export default App;
