import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ErrorPage from "./pages/about/error";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function PageRoutes() {
  
  return (
     <Router>
             <Routes>
                 <Route exact path="/portfolio" element={<HomePage />} />
                 <Route path="/portfolio/projects" element={<ProjectsPage />} />
                 <Route path="/portfolio/about" element={<AboutPage />} />
                 <Route path="*" element={<ErrorPage />} />
             </Routes>
     </Router>
 )
  }