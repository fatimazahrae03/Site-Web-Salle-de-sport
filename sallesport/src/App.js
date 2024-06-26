import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddCoachs from './AddCoachs';
import CoachsList from './CoachsList';
import AddRecette from './AddRecette';
import RecetteList from './RecetteList';
import AddPrograms from './AddPrograms';
import ProgramsList from './ProgramsList';
import Home from './Home';
import Formulaireclient from './Formulaireclient';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addcoachs" element={<AddCoachs />} /> {/* Corrected path */}
          <Route path="/coachslist" element={<CoachsList />} /> {/* Corrected path */}
          <Route path="/addrecette" element={<AddRecette />} /> {/* Corrected path */}
          <Route path="/recettelist" element={<RecetteList />} />
          <Route path="/addprograms" element={<AddPrograms />} /> {/* Corrected path */}
          <Route path="/programslist" element={<ProgramsList />} />
          <Route path="/formulair" element={<Formulaireclient />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
