import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();


    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: '',
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    const validate = (name, value) => {
        let message = "";

        if (name !== "company" && name !== "agency" && !value?.trim()) {
            message = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        }

        if (name === "email" && value && !emailRegex.test(value)) {
            message = "Enter a valid email address";
        }

        if (name === "password" && value && value.length < 6) {
            message = "Password must be at least 6 characters";
        }

        if (name === "phone" && value && !phoneRegex.test(value)) {
            message = "Enter a valid phone number";
        }

        if (name === "agency" && !value) {
            message = "Agency is required";
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

    const handleRadioChange = (e) => {
        const value = e.target.value;

        setFormData((prev) => ({ ...prev, agency: value }));

        setErrors((prev) => ({
            ...prev,
            agency: validate("agency", value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            newErrors[key] = validate(key, formData[key]);
        });

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some((msg) => msg);

        if (hasError) return;

        toast.success("Account Create Successfully.");
        navigate('/login');
    };

    const isFormValid =
        formData.name.trim() &&
        formData.phone.trim() &&
        formData.email.trim() &&
        formData.password.trim().length >= 6 &&
        emailRegex.test(formData.email) &&
        phoneRegex.test(formData.phone) &&
        formData.agency;



    return (
        <div className="bg-[#F7F8F9] w-93.75 h-203 border border-gray-200">
            <h1 className="text-[28px] text-left leading-9 w-47 h-17.25 font-medium text-[#1D2226] ml-5 mt-10 mb-7.75">Create your PopX account</h1>
            <form className="mt-7.75 space-y-7.25" onSubmit={handleSubmit}>

                {/* Full name */}

                <div className="relative">
                    <input id='name' type='text' value={formData.name} onChange={handleChange} placeholder='Enter full name' className={` appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md  text-[#1D2226] border  focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-[14px] placeholder:h-4.25 placeholder:text-[#919191] ${errors.name ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF] "}`} />

                    <label htmlFor='name' className={`absolute left-7 -top-2 mb-8.5 pl-1.25  bg-[#F7F8F9]  text-[13px] text-left leading-3 font-normal  pb-0.5 w-24 h-4.25 ${errors.name ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Full Name
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal ">*</span>
                    </label>
                    {errors.name && (
                        <p className="text-red-500 text-xs ml-6 mt-1">{errors.name}</p>
                    )}
                </div>



                {/* phone */}

                <div className="relative">
                    <input id='phone' type='tel' value={formData.phone} onChange={handleChange} placeholder='Enter phone number' className={`appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-[14px] placeholder:h-4.25 placeholder:text-[#919191] ${errors.phone ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"}`} />

                    <label htmlFor='phone' className={`absolute left-7 -top-2 mb-8.5 pl-1.25   bg-[#F7F8F9]  text-[13px] text-left leading-3 font-normal  pb-0.5 whitespace-nowrap w-24 h-3.75 ${errors.phone ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Phone number
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal ">*</span>
                    </label>

                    {errors.phone && (
                        <p className="text-red-500 text-xs ml-6 mt-1">{errors.phone}</p>
                    )}

                </div>



                {/* email */}

                <div className="relative">
                    <input id='email' type='email' value={formData.email} onChange={handleChange} placeholder='Enter email address' className={`appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-[14px] placeholder:h-4.25 placeholder:text-[#919191] ${errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"}`} />

                    <label htmlFor='email' className={`absolute left-7 -top-2 mb-8.5 pl-1.25  bg-[#F7F8F9]  text-[13px] text-left leading-3 font-normal  pb-0.5 w-24 h-3.75 ${errors.email ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Email address
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal ">*</span>
                    </label>
                    {errors.email && (
                        <p className="text-red-500 text-xs ml-6 mt-1">{errors.email}</p>
                    )}
                </div>



                {/* Password */}

                <div className="relative">
                    <input id='password' type='password' value={formData.password} onChange={handleChange} placeholder='Enter password' className={`appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-[14px] placeholder:h-4.25 placeholder:text-[#919191] ${errors.password ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"}`} />

                    <label htmlFor='password' className={`absolute left-7 -top-2 mb-8.5 pl-1.25  bg-[#F7F8F9]  text-[13px] text-left leading-3 font-normal  pb-0.5 w-24 h-4.25 ${errors.password ? "text-red-500" : "text-[#6C25FF]"}`}>
                        Password
                        <span className="ml-0 text-[#DD4A3D] text-[13px] font-normal ">*</span>
                    </label>
                    {errors.password && (
                        <p className="text-red-500 text-xs ml-6 mt-1">{errors.password}</p>
                    )}
                </div>


                {/* Company */}

                <div className="relative">
                    <input id='company' type='text' value={formData.company} onChange={handleChange} placeholder='Enter company name' className={`appearance-none w-83.75 h-10 ml-5 mr-5 rounded-md  text-[#1D2226] border    focus:outline-none focus:ring-[0.5px] pl-4 pt-3 pb-2.75 placeholder:text-[14px] placeholder:h-4.25 placeholder:text-[#919191] border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]`} />

                    <label htmlFor='company' className={`absolute left-7 -top-2 mb-8.5 pl-1.25  bg-[#F7F8F9]  text-[13px] text-left leading-4 font-normal  pb-0.5 whitespace-nowrap  w-24 h-3.75 text-[#6C25FF]`}>
                        Company name

                    </label>
                </div>



                {/* Radio */}

                <div>
                    <h3 className="text-[#1D2226] text-[13px] font-normal text-left ml-5 leading-4.25  h-3.75">Are you an Agency?<span className="text-[#DD4A3D]">*</span></h3>

                    <div className="flex gap-5.75 mt-2.5 ml-5">
                        <label className="flex items-center gap-3 text-[14px] text-[#1D2226] text-left cursor-pointer relative">
                            <input type="radio" name='agency' value='Yes' checked={formData.agency === 'Yes'} onChange={handleRadioChange} className="w-5.5 h-5.5 cursor-pointer peer appearance-none border border-[#919191] rounded-full relative " />
                            <span className="pointer-events-none absolute left-0 top-0 w-5.5 h-5.5 rounded-full ring ring-[#642AF5] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></span>

                            <span className="pointer-events-none absolute left-1.25 top-1.25 w-3 h-3 rounded-full bg-[#6C25FF] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></span>

                            Yes
                        </label>

                        <label className="flex items-center gap-3 text-[14px] text-[#1D2226] text-left relative">
                            <input type="radio" name='agency' value='No' checked={formData.agency === 'No'} onChange={handleRadioChange} className="w-5.5 h-5.5 cursor-pointer peer appearance-none border border-[#919191] rounded-full relative" />
                            <span className="pointer-events-none absolute left-0 top-0 w-5.5 h-5.5 rounded-full ring ring-[#642AF5] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></span>

                            <span className="pointer-events-none absolute left-1.25 top-1.25 w-3 h-3 rounded-full bg-[#6C25FF] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></span>
                            No
                        </label>

                    </div>
                    {errors.agency && (
                        <p className="text-red-500 text-xs ml-5 mt-1">{errors.agency}</p>
                    )}
                </div>

                <button type="submit" disabled={!isFormValid} className={` mb-7.5 mt-37.5 ml-5 mr-5  font-medium text-[16px] text-center rounded-md w-83.75 h-11.5 py-3.25 ${isFormValid ? "bg-[#6C25FF] text-[#FFFFFF] " : "bg-[#CBCBCB] text-[#FFFFFF] cursor-not-allowed"}`}>
                    Create Account
                </button>



            </form>

        </div>
    );
};

export default Registration;