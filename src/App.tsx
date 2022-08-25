import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { User } from "./types/type";
import LoginPage from "./pages/LoginPage";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function login(credentials: any) {
    fetch(`http://localhost:4000/users?_email=${credentials.email}`)
      .then((resp) => resp.json())
      .then((userFromServer) => {
        setUser(userFromServer);
        localStorage.setItem(`user`, userFromServer);
      });
  }
  function logout() {
    setUser(null);
    localStorage.removeItem(`user`);
  }
  function validateUser() {
    if (user) {
      navigate(`/HomePage`);
    }
  }
  useEffect(() => {
    validateUser();
  }, []);

  return (
    <div className="App">
      {/* <Header logout={logout} user={user} /> */}
      {/* <LoginPage login={login} /> */}
      {user ? <LoginPage login={login} /> : <HomePage user={user}  />}

      <Routes>
        {/* <Route path="/HomePage" element={<HomePage user={user} />} /> */}
        <Route path="ProfilePage" element={<ProfilePage user={user} />} />
        {/* <Route path="LoginPage" element={<LoginPage login={login} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
