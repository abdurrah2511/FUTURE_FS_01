import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout/PageLayout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App(){
  return(
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectDetails/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;