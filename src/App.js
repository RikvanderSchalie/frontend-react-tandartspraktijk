import React from 'react';
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import CavitiesPage from './pages/Cavities';
import AppointmentsPage from './pages/Appointments';
import WhiteningPage from './pages/Whitening';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';


function App() {
  return (
     <Router>
         <TopMenu />

         <Switch>
      <Route exact path="/">
      <HomePage/>
      </Route>

       <Route path="http://localhost:3000/gaatjes">
      <CavitiesPage />\
       </Route>


      <AppointmentsPage />

      <Route path="http://localhost:3000/tanden-bleken">
      <WhiteningPage />
      </Route>

         </Switch>
     </Router>
  );
}

export default App;
