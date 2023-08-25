import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const Signup = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

const [updateProfile, updating, updaterror] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate()

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updaterror) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const handelSignup = async(data) => {
   
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName:data.Name  })
    navigate('/')
  };
  return (
    <div>
      <div className=" flex justify-center items-center min-h-screen bg-base-200">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-center text-2xl font-medium">Sign Up</h2>

            <form onSubmit={handleSubmit(handelSignup)}>
            {signInError}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("Name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>

              {errors.Name && (
                <p className="text-red-600">{errors.Name?.message}</p>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Provide a valid Email",
                    },
                  })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>

            <p>
              <small>
                Already account?{" "}
                <Link className="text-primary" to="/login">
                  Login
                </Link>
              </small>
            </p>

            <div className="divider">OR</div>

            <button className="btn btn-primary btn-outline rounded-lg"  onClick={() => signInWithGoogle()}>
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
