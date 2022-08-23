import Header from "../components/Header";
import Posts from "../components/Posts";
import RightSidebar from "../components/RightSidebar";
import Stories from "../components/Stories";
// import "../App.css";

export default function HomePage() {
  return (
    <>
      <Stories />
      <RightSidebar />
      <Posts />
    </>
  );
}
