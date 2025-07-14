import { Link, Links } from "react-router-dom";
import "./register.scss"

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social</h1>
          <p>A "Hello, World!" program is usually a simple computer program 
            that emits (or displays) to the 
            screen (often the console) a message 
            it.</p>
          <span>Do you have an account?</span>
          <Link to="/login"> 
          <button>Login</button>
          </Link> 
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Name" />
              <button>Register</button>
          </form> 
        </div>
      </div>
    </div>  
  );
};

export default Register;