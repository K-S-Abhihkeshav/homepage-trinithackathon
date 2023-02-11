import "./login.css";

export default function login() {
  return (
    <div class="login">
      <div class="loginwrapper">
        <div class="logo">
          <h3 class="loginlogo">AGRI-CONNECT</h3>
          <span class="logindesc">
          Enhance your farming experience by connecting with fellow farmers and passionate agriculture enthusiasts.
          </span>
        </div>
          <div class="loginbox">
            <input placeholder="E-Mail " class="logininput"/>
            <input placeholder="Password " class="logininput"/>
            <button class="loginbutton">LOGIN</button>
            <span class="signup">
            new here? <a href=""> SIGNUP</a>
            </span>
          </div>
      </div>
    </div>
  );
}
