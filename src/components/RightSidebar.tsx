export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <header className="side-profile">
        <div className="side-profile-icon">
          <img className="side-profile-pic" src="./images/story1.jpg" alt="" />
        </div>
        <div className="side-profile-name">
          <a href="/log-in-page/log-in.html">
            <h4>landscape</h4>
          </a>
          <p>picture</p>
        </div>
        <div className="switch">switch</div>
      </header>
      <main className="suggestion-box">
        <div className="suggestions-for-you">
          <h3>Suggestions for you</h3>
          <a href="#">See All</a>
        </div>

        <div className="suggestions-area">
          <div className="profile-suggestions">
            <div className="sugg-pic">
              <img
                className="side-profile-pic"
                src="/images/story2.jpg"
                alt=""
              />
            </div>
            <div className="sugg-name">
              <h4>mutual</h4>
              <p>friend</p>
            </div>
            <div className="sugg-follow">follow</div>
          </div>
        </div>

        <div className="suggestions-area">
          <div className="profile-suggestions">
            <div className="sugg-pic">
              <img
                className="side-profile-pic"
                src="/images/story2.jpg"
                alt=""
              />
            </div>
            <div className="sugg-name">
              <h4>mutual</h4>
              <p>friend</p>
            </div>
            <div className="sugg-follow">follow</div>
          </div>
        </div>

        <div className="suggestions-area">
          <div className="profile-suggestions">
            <div className="sugg-pic">
              <img
                className="side-profile-pic"
                src="/images/story2.jpg"
                alt=""
              />
            </div>
            <div className="sugg-name">
              <h4>mutual</h4>
              <p>friend</p>
            </div>
            <div className="sugg-follow">follow</div>
          </div>
        </div>
      </main>
    </aside>
  );
}
