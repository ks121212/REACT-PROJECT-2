import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Header'
import Home from './Home'
import FullStackDeveloper from './FullStackDeveloper'
import Footer from './Footer'
import DataScience from './DataScience'
import Navbar from './Navbar'
import CyberSecurity from './CyberSecurity' // Make sure to import CyberSecurity
import Career from './Career' // Make sure to import Career


function App() {
  //its parentcomponent
  return (
    <div>
      <Header />
          <hr />
        <Navbar />
        {/* Routes componenet to redirect the path from Link to file name and change diretory */}
        <Routes>
           <Route path='/' element={<Home />} />
          <Route path='/full-stack-development' element={<FullStackDeveloper />} />
           <Route path='/data-science' element={<DataScience />} />
          <Route path='/cyber-security' element={<CyberSecurity />} /> {/* Make sure to use the correct component */}
           <Route path='/career' element={<Career />} /> {/*Make sure to use the correct component */} 
        </Routes>
    <Footer/>
    </div>
  );
}

export default App;
