import Header from "../components/Header";
import Posts from "../components/Posts";
import RightSidebar from "../components/RightSidebar";
import Stories from "../components/Stories";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <Stories />
      <RightSidebar />
      <Posts />
    </div>
  );
}
