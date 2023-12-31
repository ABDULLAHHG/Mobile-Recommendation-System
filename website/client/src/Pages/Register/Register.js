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
    phone : "",
    date  : "",
    email: "",
    password: "",
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
      axios.post("/Register", user, {
        proxy: {
          host: 'localhost',
          port: 3001,

        }
      }).then((res) => {
   
        navigate("/Login", { replace: true });
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


    if (!values.address) {
      error.address = "Address is required";
    }

    if (!values.phone) {
      error.phone = "Phone Number is required";
    }

    if (!values.date) {
      error.date = "Birth of Date is required";
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
              name="fullName"
              id="fullName"
              placeholder="First Name"
              onChange={changeHandler}
              value={user.fname}
            />
            
            <input
              className="lastName"

              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={changeHandler}
              value={user.lname}
            />
            <p className={basestyle.errorFullName}>{formErrors.fullName}</p>
            <p className={basestyle.errorLastName}>{formErrors.lastName}</p>
            
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

            <input
              className="address"
              type="text"
              name="address"
              id="address" 

              placeholder="Enter Address"
              onChange={changeHandler}
              value={user.address}
            />
            
            <input
              className="phone"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter Phone Number"
              onChange={changeHandler}
              value={user.phone}
            />
            <input
              className="date"

              type="date"
              name="date"
              id="date"
              placeholder="Date"
              onChange={changeHandler}
              value={user.date}
            />

            <p className={basestyle.errorAddress}>{formErrors.address}</p>
            <p className={basestyle.errorPhone}>{formErrors.phone}</p>
            <p className={basestyle.errorDate}>{formErrors.date}</p>
           
            
            <button onClick={signupHandler}>
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
