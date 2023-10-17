import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [token] = useToken(user || gUser)

  const navigate = useNavigate()

  let signInError;

  
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  
  useEffect( () =>{
    if (token) {
        navigate(from, { replace: true });
    }
}, [ from, navigate])

   if (loading || gLoading) {
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    if (user || gUser) {
      navigate(from, { replace: true });
    }

  const handelLogin = (data) =>{
    signInWithEmailAndPassword(data.email, data.password);
    navigate('/')
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl font-medium">Login</h1>
            <form onSubmit={handleSubmit(handelLogin)}>
            {signInError}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: {
                      value:true,
                      message:'Email is Required'
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Provide a valid Email' 
                    }
                }
                )}
                  placeholder="email"
                  className="input input-bordered"
                  
                />
                 {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                })}
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p>
              <small>
                New to Life Sever?{" "}
                <Link className="text-primary" to="/signup">
                  Create new account
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <button
              className="btn btn-primary btn-outline rounded-lg"
              onClick={() => signInWithGoogle()}
            >
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
