import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

    };

    const isFormValid =
        emailRegex.test(formData.email) &&

        formData.password.trim().length >= 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsValid(true);
        if (!isFormValid)
            return;

        toast.success("Login Successfully!");


        navigate('/user');

    };

    return (
        <div className='bg-[#F7F8F9] w-93.75 h-203 border border-gray-200'>
            <h1 className='text-left text-[28px] leading-9 w-47 h-17.25 font-medium text-[#1D2226] ml-5 mt-10'>Signin to your PopX account</h1>
            <p className='text-[#1D2226] text-left font-normal w-58 h-12 opacity-60 text-[18px] leading-6.5 ml-5 mt-3.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>


            <form className='mt-8.25 space-y-5.75' onSubmit={handleSubmit}>

                {/* email */}

                <div className='relative'>
                    <input id="email" type='email' value={formData.email} onChange={handleChange} placeholder='Enter email address' className={`appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md text-[#1D2226] border focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-sm placeholder:h-4.25 placeholder:text-[#919191] ${isValid && !formData.email.trim() ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"} `} />
                    <label htmlFor='email' className={`absolute left-7 -top-2 mb-8.5 pl-1.25  w-25.75 h-3.75 bg-[#F7F8F9] text-[13px] text-left leading-3 font-normal pb-0.5  ${isValid && (!formData.email.trim() || !emailRegex.test(formData.email)) ? "text-red-500" : "text-[#6C25FF]"}`}>Email Address
                    </label>

                    {formData.email && !emailRegex.test(formData.email) && (
                        <p className="text-red-500 text-sm mt-1 ml-6">
                            Enter a valid email address
                        </p>
                    )}

                </div>

                {/* password */}

                <div className='relative'>
                    <input id="password" type='password' value={formData.password} onChange={handleChange} placeholder='Enter password' className={`appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md text-[#1D2226] border focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-sm placeholder:h-4.25 placeholder:text-[#919191] ${isValid && !formData.password.trim() ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"} `} />
                    <label htmlFor='email' className={`absolute left-7 -top-2 mb-8.5 pl-1.25 w-25.75 h-3.75 bg-[#F7F8F9] text-[13px] text-left leading-3 font-normal pb-0.5  ${isValid && (!formData.password.trim() || formData.password.length < 6) ? "text-red-500" : "text-[#6C25FF]"}`}>Password
                    </label>

                    {formData.password && formData.password.length < 6 && (
                        <p className="text-red-500 text-sm mt-1 ml-6">
                            Password must be at least 6 characters
                        </p>
                    )}

                </div>

                <button type="submit" disabled={!isFormValid} className={`mt-3.5 ml-5 mr-5  font-medium text-[16px] text-center  rounded-md w-83.75 h-11.5 py-3.25 ${isFormValid ? "bg-[#6C25FF] text-[#FFFFFF] " : "bg-[#CBCBCB] text-[#FFFFFF] cursor-not-allowed"}`}>
                    Login
                </button>

            </form>

        </div>
    );
};

export default Login;