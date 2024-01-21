import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Routes manage for user no logged */}
          <Route path="/" element={<Home />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<h1>Not found page</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
