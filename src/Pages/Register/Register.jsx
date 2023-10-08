import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const Register = () => {
    const {user, createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState();
    console.log(user)

    

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confPassword.value;
        console.log(name, email, password, confirmPassword);

        setError('');

        if(password !== confirmPassword){
            setError('Your password did not match!')
            return;
        }else if (password.length < 6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUser(email, password)
        .then(result => {
            const newUser  = result.user;
            console.log(newUser );

            if(newUser){
                updateUserProfile(name, photo)
                .then(result => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Registration has been done Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            }
            form.reset();
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
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
                        <p className='text-error'>{error}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" name='name' id='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" name='photo' id='photo' className="input input-bordered" required />
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confPassword' id='confPassword' placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary my-0">Login</button>
                            </div>
                        </form>
                        <Link className='text-center label-text-alt link link-hover pb-5' to="/login">
                            Already have an Account ? login here!
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;