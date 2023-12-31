import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const { user, createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState();
    console.log(user)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'



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

        if (password !== confirmPassword) {
            setError('Your password did not match!')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Your password did not match!",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        } else if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Password must be 6 characters or longer",
                showConfirmButton: false,
                timer: 1500
            })

            return;
        }

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);

                if (newUser) {
                    updateUserProfile(name, photo)
                        .then(result => {
                            const saveUser = { name, email }
                            fetch('http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data.insertedId)
                                    if (data.insertedId) {
                                        form.reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'Registration has been done Successfully',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })

                                        navigate('/');
                                    }
                                })

                        })
                }

            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    // // Google Signup
    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then(res => {
    //             const loggedUser = res.user;
    //             console.log(loggedUser);
    //             console.log("successful google login");
    //             console.log("Email flag: ",loggedUser.email)

    //             // save user info to database 
    //             const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
    //             fetch('http://localhost:5000/users', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(saveUser)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data.insertedId)
    //                     if (data.insertedId) {



    //                         // navigate 
    //                         navigate(from, { replace: true });
    //                     }
    //                 })



    //         })
    //         .catch(error => console.log(error))

    // }
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
                                <button className="btn btn-primary my-0">Register</button>
                            </div>
                        </form>
                        <Link className='text-center label-text-alt link link-hover pb-5' to="/login">
                            Already have an Account ? login here!
                        </Link>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;