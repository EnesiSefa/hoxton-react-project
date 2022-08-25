import "./loginPage.css";
export default function LoginPage({ login }) {
  return (
    <section className="login-page">
      <main className="main">
        <div className="phone-frame">
          <img
            className="iphone"
            src="/log-in-page-images/iphone-frame.png"
            alt=""
          />
          <img
            className="pic-transition1"
            src="/log-in-page-images/iphone-camera-template.png"
            alt=""
          />
          <img
            className="pic-transition2"
            src="/log-in-page-images/iphone-insta-chat.png"
            alt=""
          />
          <img
            className="pic-transition3"
            src="/log-in-page-images/iphone-insta-feed.png"
            alt=""
          />
          <img
            className="pic-transition4"
            src="/log-in-page-images/iphone-main-insta.png"
            alt=""
          />
        </div>
        <div className="log-in-box">
          <img
            className="insta-logo"
            src="/images/Instagram_logo.svg.png"
            alt=""
          />
          <form action="/HomePage" className="log-in-form" onSubmit={()=>{login}}>
            <label>
              <input
                className="username"
                type="text"
                minLength={3}
                maxLength={20}
                required
                placeholder="Phone number,username or email"
              />
            </label>
            <label>
              <input
                className="password"
                type="password"
                minLength={2}
                maxLength={20}
                required
                placeholder="Password"
              />
            </label>
            <label className="button">
              <a className="button-link" href="/index.html">
                <button className="log-in-button">
                  <p>Log in</p>
                </button>
              </a>
            </label>
            <h4 className="or">or</h4>
            <h4>
              <a href="">log in with facebook</a>
            </h4>
            <a href="">
              <p>forgot password?</p>
            </a>
          </form>
          <div className="sign-up">
            <p>Don't have an account?</p>
            <a href="/sign-up-page/sign-up.html">Sign up</a>
          </div>
          <div className="adv">
            <p>Get the app</p>
            <div className="banner">
              <img
                className="banner-pic"
                src="/log-in-page-images/ad1.png"
                alt=""
              />
              <img
                className="banner-pic"
                src="/log-in-page-images/ad2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <ul className="nav-list">
          <a href="">
            <li>Meta</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
          <a href="">
            <li>Jobs</li>
          </a>
          <a href="">
            <li>Help</li>
          </a>
          <a href="">
            <li>Api</li>
          </a>
          <a href="">
            <li>Privacy</li>
          </a>
          <a href="">
            <li>Terms</li>
          </a>
          <a href="">
            {" "}
            <li>Top accounts</li>
          </a>
          <a href="">
            <li>Hashtags</li>
          </a>
          <a href="">
            <li>Locations</li>
          </a>
          <a href="">
            <li>Instagram Lite</li>
          </a>
          <a href="">
            <li>Contact Uploading and Non-Users</li>
          </a>
          <a href="">
            <li>Dance</li>
          </a>
          <a href="">
            <li>Food and Drink</li>
          </a>
          <a href="">
            <li>Home and Garden</li>
          </a>
          <a href="">
            <li>Music</li>
          </a>
          <a href="">
            <li>Visual Arts</li>
          </a>
          <li>
            <label htmlFor="">
              English
              <select name="" id="">
                <option value="">English</option>
                <option value="">German</option>
                <option value="">Italian</option>
                <option value="">Polish</option>
                <option value="">French</option>
              </select>
            </label>
          </li>
          <li>© 2022 Instagram from Meta</li>
        </ul>
      </footer>
    </section>
  );
}
