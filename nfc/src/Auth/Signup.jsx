import React from 'react';
import { useState } from 'react';

const Signup = () => {
    const [form, setForm] = useState({
        organizationName: '',
        organizationType: 'University',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        alert('Registration Successful!');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-landing">
            <div className="bg-widget p-8 rounded-2xl shadow-modal w-96 animate-slideUp">
                <h2 className="text-2xl text-primary-dark font-heading mb-6 text-center">Register Organization</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-secondary mb-2">Organization Name</label>
                        <input 
                            type="text" 
                            name="organizationName" 
                            value={form.organizationName} 
                            onChange={handleChange} 
                            className="w-full p-2 border border-dark rounded-lg focus:border-active outline-none" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-secondary mb-2">Organization Type</label>
                        <select 
                            name="organizationType" 
                            value={form.organizationType} 
                            onChange={handleChange} 
                            className="w-full p-2 border border-dark rounded-lg focus:border-active outline-none">
                            <option value="University">University</option>
                            <option value="College">College</option>
                            <option value="School">School</option>
                            <option value="Company">Company</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-secondary mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={form.email} 
                            onChange={handleChange} 
                            className="w-full p-2 border border-dark rounded-lg focus:border-active outline-none" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-secondary mb-2">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={form.password} 
                            onChange={handleChange} 
                            className="w-full p-2 border border-dark rounded-lg focus:border-active outline-none" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-secondary mb-2">Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            value={form.confirmPassword} 
                            onChange={handleChange} 
                            className="w-full p-2 border border-dark rounded-lg focus:border-active outline-none" 
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full p-2 mt-4 bg-primary text-white rounded-lg shadow-button hover:bg-primary-dark transition duration-300">Register</button>
                </form>
            </div>
            
        </div>
    );
};

export default Signup;
