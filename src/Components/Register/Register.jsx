import React, { useContext } from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const { createUser, profileUpdate } = useContext(AuthContext)

    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(userInfo => {

            profileUpdate(data.name, data.photoURL)
            .then(user => console.log(user))
            .catch(err => console.log(err))

            navigate(location.state ? location.state : "/")
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
      <div className='bg-gray-100'>
        <div className='max-w-[1140px] mx-auto '>
            <NavBar></NavBar>
        </div>
          <div className=" flex items-center justify-center mt-24">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[752px]">
                <h2 className="text-2xl font-bold text-center mb-6">Register your account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-24 py-24">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Your Name</label>
                        <input 
                            type="text" {...register("text")}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Photo URL</label>
                        <input
                            type="text" {...register("text")}
                            placeholder="Enter your photo URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email" {...register("email")}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold  text-gray-700">Password</label>
                        <input
                            type="password" {...register("password")}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-600">
                            Accept Term & Conditions
                        </label>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-lg font-semibold  hover:bg-gray-800" type="submit" value="Register" >
                        Register
                    </button>
                </form>
            </div>
        </div>
      </div>
    );
};

export default Register;