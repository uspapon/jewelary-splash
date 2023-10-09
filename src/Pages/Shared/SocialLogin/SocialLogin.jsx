import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const { user, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    // Google Signup
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                console.log("successful google login");
                console.log("Email flag: ", loggedUser.email)

                // save user info to database 
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
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

                            
                        }
                        // navigate 
                        navigate(from, { replace: true });
                    })



            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <div className='mb-3'>SignUp with Google here </div>
                <button onClick={handleGoogleSignIn} className="btn btn-circle mb-3 btn-outline text-indigo-700 hover:bg-indigo-500 hover:border-none">
                    <FaGoogle></FaGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;