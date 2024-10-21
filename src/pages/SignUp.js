import "../styles/signup.css";

function SignUp() {
  return (
    <div className="Register">
      <div className="card-register">
        <h2 className="register-title">Register</h2>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="username" id="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" required />
          </div>
          <button type="submit" className="btn-primary">
            Register
          </button>
          <div className="signup-text">
            <div>Sudah Punya Akun</div>
            <a href="/signin" className="login-link">
              Masuk 
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;