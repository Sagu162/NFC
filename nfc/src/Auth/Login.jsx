import React from 'react';
import Layout from '../Layout/Layout';

const Login = () => {
    return (
        <Layout>
        <div className="flex justify-center items-center min-h-screen bg-landing">
            <div className="bg-widget p-8 rounded-2xl shadow-card w-96">
                <div className="flex justify-center mb-6">
                    <div className="bg-primary text-white p-4 rounded-round">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4m-10 6l10-10m0 0h-4m4 0v4" />
                        </svg>
                    </div>
                </div>
                <h2 className="text-heading text-center text-2xl font-heading mb-2">Admin Login</h2>
                <p className="text-secondary text-center mb-6">Enter your credentials to access the dashboard</p>
                <form>
                    <label className="block mb-2 text-primary font-semibold">Email</label>
                    <input type="email" className="block w-full p-2 mb-4 border border-dark rounded-lg focus:outline-none focus:border-active" placeholder="Enter your email" />
                    <label className="block mb-2 text-primary font-semibold">Password</label>
                    <input type="password" className="block w-full p-2 mb-4 border border-dark rounded-lg focus:outline-none focus:border-active" placeholder="Enter your password" />
                    <div className="flex justify-between items-center mb-4">
                        <a href="#" className="text-accent hover:text-accent-dark">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg shadow-button hover:bg-primary-dark">Login</button>
                </form>
                <p className="text-center text-secondary mt-4">
                    <a href="http://localhost:5173/signup" className="hover:text-primary">Don't have a login?</a>
                </p>
            </div>
        </div>
        </Layout>
    );
};

export default Login;
