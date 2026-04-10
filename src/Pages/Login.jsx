import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = (name, value) => {
        let message = "";

        if (!value?.trim()) {
            message = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        }

        if (name === "email" && value && !emailRegex.test(value)) {
            message = "Enter a valid email address";
        }

        if (name === "password" && value && value.length < 6) {
            message = "Password must be at least 6 characters";
        }

        return message;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({ ...prev, [id]: value }));

        setErrors((prev) => ({
            ...prev,
            [id]: validate(id, value),
        }));
    };

    const isFormValid =
        formData.email.trim() &&
        formData.password.trim() &&
        emailRegex.test(formData.email) &&
        formData.password.length >= 6 &&
        !errors.email &&
        !errors.password;

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            newErrors[key] = validate(key, formData[key]);
        });

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some((msg) => msg);

        if (hasError) return;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            toast.error("No registered user found");
            return;
        }

        if (
            storedUser.email !== formData.email ||
            storedUser.password !== formData.password
        ) {
            toast.error("Invalid email or password");
            return;
        }

        toast.success("Login Successfully!");
        navigate("/user");
    };


    return (
        <div className='bg-[#F7F8F9] w-93.75 h-203 border border-gray-200'>
            <h1 className='text-left text-[28px] leading-9 w-47 h-17.25 font-medium text-[#1D2226] ml-5 mt-10'>Signin to your PopX account</h1>
            <p className='text-[#1D2226] text-left font-normal w-58 h-12 opacity-60 text-[18px] leading-6.5 ml-5 mt-3.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>


            <form className='mt-8.25 space-y-5.75' onSubmit={handleSubmit}>

                {/* email */}

                <div className='relative'>
                    <input id="email" type='email' value={formData.email} onChange={handleChange} placeholder='Enter email address' className={`appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md text-[#1D2226] border focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-sm placeholder:h-4.25 placeholder:text-[#919191] ${errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"} `} />
                    <label htmlFor='email' className={`absolute left-7 -top-2 mb-8.5 pl-1.25  w-25.75 h-3.75 bg-[#F7F8F9] text-[13px] text-left leading-3 font-normal pb-0.5  ${errors.email ? "text-red-500" : "text-[#6C25FF]"}`}>Email Address
                    </label>

                    {errors.email && (
                        <p className="text-red-500 text-xs ml-6 mt-1">
                            {errors.email}
                        </p>
                    )}

                </div>

                {/* password */}

                <div className='relative'>
                    <input id="password" type='password' value={formData.password} onChange={handleChange} placeholder='Enter password' className={`appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md text-[#1D2226] border focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-sm placeholder:h-4.25 placeholder:text-[#919191] ${errors.password ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"} `} />
                    <label htmlFor='email' className={`absolute left-7 -top-2 mb-8.5 pl-1.25 w-25.75 h-3.75 bg-[#F7F8F9] text-[13px] text-left leading-3 font-normal pb-0.5  ${errors.password ? "text-red-500" : "text-[#6C25FF]"}`}>Password
                    </label>

                    {errors.password && (
                        <p className="text-red-500 text-xs ml-6 mt-1">
                            {errors.password}
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