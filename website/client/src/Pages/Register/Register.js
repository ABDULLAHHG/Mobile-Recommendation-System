import React, {useEffect , useState} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import basestyle from "../Base.module.css";
import './Register.css';
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    fullName: "",
    lastName: "",
    address : "",
    date  : "",
    email: "",
    password: "",
    cpassword: "",
  });

  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:9002/signup/", user).then((res) => {
        alert(res.data.message);
        navigate("/login", { replace: true });
      });
    }
  }, [formErrors]);


  // validating user input  
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.fullName) {
      error.fullName = "First Name is required";
    }

    if (!values.lastName) {
      error.lastName = "Last Name is required";
    }

    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }

    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
    }
    return error;
  };


  return (
  <div>
    <div className="Register-app-container">
      <div className="Register-mid-container">
        <div className="Register">
          <form>
            <h1>Create your account</h1>
            <input
            className="fullName"
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              onChange={changeHandler}
              value={user.fname}
            />
            
            <input
              className="lastName"

              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              onChange={changeHandler}
              value={user.lname}
            />
            <p className={basestyle.error}>{formErrors.lname}</p>
            <p className={basestyle.error}>{formErrors.fname}</p>
            <input
            className="email"
            type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={changeHandler}
              value={user.email}
            />
            <p className={basestyle.error}>{formErrors.email}</p>
            
            <input
            className="password"
            type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={changeHandler}
              value={user.password}
            />
            <p className={basestyle.error}>{formErrors.password}</p>
            
            <input
            className="cpassword"
            type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={user.cpassword}
            />
            <p className={basestyle.error}>{formErrors.cpassword}</p>
            
            
            <button className={basestyle.button_common} onClick={signupHandler}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Register;
