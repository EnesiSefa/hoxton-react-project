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
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function login(credentials: any) {
    fetch(`http://localhost:4000/users?_embed=posts`)
      .then((resp) => resp.json())
      .then((usersFromServer) => {
        setUsers(usersFromServer);
        const newUsers = structuredClone(users);
        const filteredUser = newUsers.find(
          (item: User) =>
            item?.email! === credentials.email &&
            item?.password! === credentials.password
        ); //@ts-ignore
        setUser(filteredUser);
        if (user !== null && user !== undefined) {
          localStorage.id = user.id;
          navigate(`/HomePage`);
        }
      });
  }
  function logout() {
    localStorage.removeItem("id");
    setUser(null);
    navigate(`/loginPage`);
  }
  useEffect(() => {
    const userId = localStorage.id;
    if (userId) {
      fetch(`http://localhost:4000/users/${userId}?_embed=posts`)
        .then((resp) => resp.json())
        .then((userFromServer) => {
          setUser(userFromServer);
          // navigate("/HomePage");
        });
    } else {
      navigate("/LoginPage");
    }
  }, [localStorage.id]);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/LoginPage" />} />
        {user && (
          <>
            <Route
              path="/HomePage"
              element={<HomePage user={user} logout={logout} />}
            />
            <Route
              path="/ProfilePage"
              element={<ProfilePage user={user} logout={logout} setUser={setUser} />}
            />
          </>
        )}

        <Route path="/LoginPage" element={<LoginPage login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
