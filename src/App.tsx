import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { User } from "./types/type";
import LoginPage from "./pages/LoginPage";
import { useNavigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import InboxPage from "./pages/InboxPage";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function login(credentials: any) {
    fetch(
      `http://localhost:4000/users?email=${credentials.email}&?password=${credentials.password}`
    )
      .then((resp) => resp.json())
      .then((userFromServer) => {
        setUser(userFromServer);
        localStorage.setItem(user, userFromServer);
      });
  }
  function logout() {
    setUser(null);
    localStorage.removeItem(user);
  }
  function validateUser() {
    if (user !== null) {
      navigate(`/HomePage`);
    }
  }
  useEffect(() => {
    validateUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/LoginPage" />} />

        <Route
          path="/HomePage"
          element={<HomePage user={user} logout={logout} />}
        />

        <Route
          path="/ProfilePage"
          element={<ProfilePage user={user} logout={logout} />}
        />
        <Route path="/LoginPage" element={<LoginPage login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
