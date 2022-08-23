import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="instagram-logo">
        <img
          className="instagram-logo-pic"
          src="/images/Instagram_logo.svg.png"
          alt=""
        />
      </div>
      <div className="searchbar">
        <span className="material-symbols-outlined"> search </span>
        <input
          className="searchbar-inside"
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="navigation-panel">
        <div className="home">
          <img className="panel-icon" src="/images/home.svg" alt="" />
        </div>
        <div className="inbox">
          <a href="/inbox-page/inbox.html">
            <img className="panel-icon" src="/images/inbox.svg" alt="" />
          </a>
        </div>
        <div className="new-post">
          <img className="panel-icon" src="/images/new post.svg" alt="" />
        </div>
        <div className="explore">
          <img className="panel-icon" src="/images/explore.svg" alt="" />
        </div>
        <div className="activity">
          <img className="panel-icon" src="/images/big like.svg" alt="" />
        </div>
        <div className="nav-profile-icon">
          <Link to={"/ProfilePage"}>
            <img className="panel-icon" src="/images/profile-pic.webp" alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
