import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./app/page";
import Fiori from "./app/fiori";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fiori" element={<Fiori />} />
      </Routes>
    </Router>
  );
}
