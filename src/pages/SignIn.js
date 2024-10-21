import "../styles/signin.css";
function Login() {
  return (
    <>
      <div className="Login">
        <div className="card-login">
          <h2 className="login-title">Masuk</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <a href="#" className="forgot-password">
              Lupa Password?
            </a>
            <button type="submit" className="btn-primary">
              Masuk
            </button>
            <p className="signup-text">
              Belum punya akun?{" "}
              <a href="/register" className="signup-link">
                Daftar
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;