import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="ProfilePage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
