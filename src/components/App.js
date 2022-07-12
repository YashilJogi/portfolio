import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectContainer from './ProjectContainer';
import '../App.css';
import Contact from './Contact';
import Resume from './Resume';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<HomePage />}></Route>
      <Route path='/resume' element={<Resume />}></Route>
      <Route path='/projectcontainer' element={<ProjectContainer />}></Route>
      <Route path='/contact' element={<Contact />}></Route>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
