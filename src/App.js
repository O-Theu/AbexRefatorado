import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProjectProvider } from './components/context/ProjectContext';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import NewProjects from './components/pages/NewProjects';
import Projects from './components/pages/Projects';
import Project from './components/project/Project';

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
              path='/projeto/:id' 
              element={<Project />} 
            />
            <Route 
              path='/novoprojeto' 
              element={
                <ProjectProvider>
                  <NewProjects />
                </ProjectProvider>
              } 
            />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
