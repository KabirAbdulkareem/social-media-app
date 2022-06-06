import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!")
        } else {

            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            try {
                await axios.post("/auth/register", user)
                history("/login")

            } catch (err) {
                console.log(err)
            }
        }
    }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Pokemesocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Pokemsocial
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" ref={username} className="loginInput" />
            <input placeholder="Email" ref={email} type="email" className="loginInput" />
            <input placeholder="Password" ref={password} type="password" minLength="6" className="loginInput" />
            <input placeholder="Password Again" ref={passwordAgain} type="password" minLength="6" className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
