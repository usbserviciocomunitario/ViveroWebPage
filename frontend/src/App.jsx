import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Activities from "./pages/Activities";
import ActivitySowing from "./pages/ActivitySowing";
import ActivityCourses from "./pages/ActivityCourses";
import ActivityRecycling from "./pages/ActivityRecycling";
import ActivityTalks from "./pages/ActivityTalks";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Catalogue from "./pages/Catalogue";
import CatalogueDetail from "./pages/CatalogueDetail";
import ScrollToTop from './helpers/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
        <Routes>
          {/* Routes manage for user no logged */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/actividades/siembra" element={< ActivitySowing/>} />
          <Route path="/actividades/cursos" element={< ActivityCourses/>} />
          <Route path="/actividades/reciclaje" element={< ActivityRecycling/>} />
          <Route path="/actividades/charlas" element={< ActivityTalks/>} />
          <Route path="/acercadenosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogo" element={<Catalogue />} />
          <Route path="/catalogo/:id" element={<CatalogueDetail />} />
          <Route path="*" element={<h1>Not found page</h1>} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;