import Header from "../components/Header";
import Posts from "../components/Posts";
import RightSidebar from "../components/RightSidebar";
import Stories from "../components/Stories";
import "./HomePage.css";

export default function HomePage(logout) {
  return (
    <div className="homepage">
      <Header logout={logout}/>
      <Stories />
      <RightSidebar />
      <Posts />
    </div>
  );
}
