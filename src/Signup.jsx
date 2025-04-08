import React from "react";
import "./Signup.css"; // Import CSS file

const SignupForm = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <p>
        Already a member? <a href="#">Log In</a>
      </p>

      <form>
        <div className="input-container">
          <input type="email" className="input-field" required />
          <span className="input-label">Email</span>
        </div>
        <div className="input-container">
          <input type="password" className="input-field" required />
          <span className="input-label">Password</span>
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>

        <div className="divider">
          <span>or sign up with</span>
        </div>

        <div className="social-icons">
          <img src="facebook-icon.png" alt="Facebook" />
          <img src="google-icon.png" alt="Google" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
