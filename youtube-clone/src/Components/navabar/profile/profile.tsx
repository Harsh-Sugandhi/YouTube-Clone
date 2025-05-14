import { useState } from 'react';
import photo from './assets/profile-photo.jpg';
import { useTheme } from '../../../context/ThemeContext';
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";

function Profile() {

    const { theme, toggleTheme } = useTheme();

    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const showMenu = () => {
        setShowProfileMenu((prevState) => !prevState);
    };

    return (
        <>
            <div className="absolute top-2.5 right-12">
                <div className="cursor-pointer">
                    <img
                        src={photo}
                        alt="Profile Photo"
                        className="w-12 h-12 rounded-full"
                        onClick={showMenu}
                    />
                </div>
            </div>
            {showProfileMenu && (
                <div className="absolute top-2.5 right-24 w-72 rounded-lg shadow-lg z-50 overflow-hidden">
                    <div className="p-2.5">
                        <div className="flex items-center p-2.5">
                            <img
                                src={photo}
                                alt="Profile Photo"
                                className="w-12 h-12 rounded-full mr-2.5"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-base">
                                    Master Ping
                                </span>
                                <span className="text-sm text-gray-400">@MasterPing07</span>
                            </div>
                        </div>
                        <hr className="border-t border-gray-300 dark:border-gray-600 my-2.5" />
                        <div className="cursor-pointer text-sm p-2.5">
                            Theme
                            <button
                                onClick={toggleTheme}
                                className="absolute top-22 right-40 p-2 
                                           rounded-full cursor-pointer 
                                           transition-transform duration-300 ease-in-out">
                                {
                                    theme === 'light' ?
                                        <BsFillCloudSunFill size={30} /> :
                                        <BsFillCloudMoonFill size={30} />
                                }
                            </button>
                        </div>
                        <hr className="border-t border-gray-300 dark:border-gray-600 my-2.5" />
                        <div className="cursor-pointer text-sm p-2.5 ">
                            Sign out
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;