import { Routes, Route } from "react-router-dom";
import RecordDetails from "./pages/RecordDetails";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/upload"
          element={<UploadPage />}
        />

        <Route
          path="/records/:id"
          element={<RecordDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;