import React from "react";
import { Link } from "react-router-dom";
import auth from './../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user)
  }

  return (
    <div>
      <div className=" flex justify-center items-center min-h-screen bg-base-200">
       
       <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
         <div className="card-body">
         <h1 className='text-center text-2xl font-medium'>Login</h1>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input
               type="text"
               placeholder="email"
               className="input input-bordered"
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input
               type="text"
               placeholder="password"
               className="input input-bordered"
             />
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">
                 Forgot password?
               </a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Login</button>
           </div>
           <p><small>New to Life Sever? <Link className="text-primary" to="/signup">Create new account</Link></small></p>
           <div className="divider">OR</div>
           <button className='btn btn-primary btn-outline rounded-lg' onClick={()=>signInWithGoogle()}>
           Continue with google
         </button>
         </div>
        
       </div>
     </div>
    </div>
  );
};

export default Login;
