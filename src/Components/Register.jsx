import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/authContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, googleLogin } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const { email, password, ...newUser } = Object.fromEntries(
      formdata.entries()
    );
    // console.log(newUser);
    createUser(email, password)
      .then((result) => {
        const newData = {
          email,
          ...newUser,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("https://a-garden-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after db", data);
            if (data.insertedId) {
              Swal.fire({
                title: "Successfully Login!",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
              e.target.reset();
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("googlelogin:",result.user)
        if (result.user) {
          Swal.fire({
            title: "Successfully Login!",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
      <Helmet>
        <title>A Garden || Register</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            required
            className="input"
            placeholder="Name"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            required
            className="input"
            placeholder="Photo-URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            required
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            required
            className="input"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <button className="btn btn-active btn-success mt-4 font-semibold">
            Register
          </button>
          <h1 className="font-bold text-center text-2xl">Or</h1>
          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-success  text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            Already have an Account?{" "}
            <Link to="/auth/login" className="text-blue-400 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
