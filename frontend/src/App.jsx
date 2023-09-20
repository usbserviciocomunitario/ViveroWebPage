import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not found page</h1>} />

        {/* Routes manage for user no logged */}
        <Route path="/" element={<Home />} >
          <Route index path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
