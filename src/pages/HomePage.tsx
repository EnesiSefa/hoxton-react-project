import Header from "../components/Header";
import Posts from "../components/Posts";
import RightSidebar from "../components/RightSidebar";
import Stories from "../components/Stories";
import "./HomePage.css";

export default function HomePage({ user, logout }: any) {
  return (
    <div className="homepage">
      <Header logout={logout} user={user} />
      <Stories />
      <RightSidebar />
      <Posts />
    </div>
  );
}
