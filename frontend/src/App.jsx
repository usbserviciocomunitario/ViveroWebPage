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

import Catalogue from "./pages/Catalogue";
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
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogo" element={<Catalogue />} />
          <Route path="*" element={<h1>Not found page</h1>} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;


{/*function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route
          path="/"
          element={
            <Layout>
              <Route index element={<Home />} />
              <Route path="/actividades" element={<Activities />} />
              <Route path="/actividades/siembra" element={<ActivitySowing />} />
              <Route path="/actividades/cursos" element={<ActivityCourses />} />
              <Route path="/actividades/reciclaje" element={<ActivityRecycling />} />
              <Route path="/actividades/charlas" element={<ActivityTalks />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/catalogo" element={<Catalogue />} />
              <Route path="*" element={<h1>Not found page</h1>} />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

*/}

