import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
    const {user, createUser} = useContext(AuthContext);
    console.log(user)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        
        createUser(email, password)
        .then(result => {
            const newUser  = result.user;
            console.log(newUser );
            form.reset();
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='w-3/4 mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:ms-20">
                        <h1 className="text-5xl font-bold">Create New Account</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-5">
                        <form onSubmit={handleRegister} className="card-body md:pb-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" name='name' id='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photo" name='photo' id='photo' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' id='email' className="input input-bordered" required />
                            </div>
                            
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' id='password' placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary my-0">Login</button>
                            </div>
                        </form>
                        <Link className='text-center label-text-alt link link-hover' to="/login">
                            Already have an Account ? login here!
                        </Link>
                        <div className="divider">OR</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;