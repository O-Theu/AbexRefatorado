import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import NewProjects from './components/pages/NewProjects';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
            <Route 
              path='/projetos' 
              element={<Projects />} 
            />
            <Route 
              path='/novoprojeto' 
              element={<NewProjects />} 
            />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
