import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Form from './Form';
import Table from './Table';
function App() {
  return (
   <>
 
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Table" element={<Table/>} />
      </Routes>
   </>
  );
}

export default App;
