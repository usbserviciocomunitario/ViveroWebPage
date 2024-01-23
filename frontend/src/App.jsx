import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import ActivitySowing from "./pages/ActivitySowing";
import ActivityCourses from "./pages/ActivityCourses";
import ActivityRecycling from "./pages/ActivityRecycling";
import ActivityTalks from "./pages/ActivityTalks";
import Contact from "./pages/Contact";
import Layout from "./components/Layout/Layout";
import Catalogue from "./pages/Catalogue";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Routes manage for user no logged */}
          <Route path="/" element={<Home />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/actividades/siembra" element={< ActivitySowing/>} />
          <Route path="/actividades/cursos" element={< ActivityCourses/>} />
          <Route path="/actividades/reciclaje" element={< ActivityRecycling/>} />
          <Route path="/actividades/charlas" element={< ActivityTalks/>} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogo" element={<Catalogue />} />
          <Route path="*" element={<h1>Not found page</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
