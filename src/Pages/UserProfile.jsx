import picture from "../assets/profile.png";
import camera from "../assets/camera.png";
import { useState } from "react";


const UserProfile = () => {
    const [user] = useState(() => {
        return JSON.parse(localStorage.getItem("user"));
    });



    return (
        <div className='bg-[#F7F8F9] w-93.75 h-203 border border-gray-200'>
            <div className='bg-[#FFFFFF]  h-17 shadow-[0px_3px_6px_#00000007] '>
                <h1 className='text-[18px] text-[#1D2226] leading-5.25 font-normal pl-3.75 pt-6.75 pb-4.75 capitalize 
h-5.5'>Account Settings</h1>

            </div>
            <div className=" mt-7.5 ml-5 ">
                <div className="flex items-start gap-5">
                    <img src={picture} alt="profile picture" className="relative" />
                    <img src={camera} alt="camera" className="absolute ml-14.5 mt-12.5 " />
                    <div className="space-y-1.5">
                        <h2 className="font-medium text-[#1D2226] text-left text-[15px]leading-[19px]  h-4.5 capitalize"> {user?.name || "No Name"}</h2>
                        <p className="text-[#1D2226] text-[14px] text-left leading-4.75 font-normal h-4.25 capitalize">  {user?.email || "No Email"}

                        </p>
                    </div>
                </div>
                <p className="text-[14px] text-left w-84.25 h-15.75 capitalize leading-5.5 mt-7.5 mr-4.5  opacity-100">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam

                </p>
            </div>

            <p className="mt-5  border-t border border-transparent" style={{
                borderImage: "repeating-linear-gradient(to right, #CBCBCB 0 4px, transparent 4px 8px)",
                borderImageSlice: 50,
            }}>

            </p>


            <p className="mt-121.25  border-t border border-transparent" style={{
                borderImage: "repeating-linear-gradient(to right, #CBCBCB 0 4px, transparent 4px 8px)",
                borderImageSlice: 50,
            }}>

            </p>









        </div>
    );
};

export default UserProfile;