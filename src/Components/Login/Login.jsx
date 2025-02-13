import React, { useContext } from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

     const { register, handleSubmit } = useForm()

     const {signIn} = useContext(AuthContext)
        
     const onSubmit = (data) => {
            signIn(data.email, data.password)
            .then(userInfo => {
                console.log(userInfo)
                navigate(location.state? location.state: "/")
            })
            .catch( err => console.log(err))
        }
    return (
       <div className='bg-gray-100'>
        <div className='max-w-[1140px] mx-auto '>
            <NavBar></NavBar>
        </div>
         <div className="mt-24 max-w-[1140px] mx-auto flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[752px]">
                <h2 className="text-2xl font-bold text-center mb-6">Login your account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-24 py-24">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email" {...register("email")}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password" {...register("password")}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800" type="submit" value="Login">
                        Login
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Don’t Have An Account?{" "}
                    <Link state={location.state} to="/register" className="text-red-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
       </div>
    );
};

export default Login;