import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiFillHome, AiOutlineVideoCamera } from 'react-icons/ai';
import { MdOutlineSubscriptions, MdHistory, MdPlaylistPlay, MdWatchLater, MdSettings } from 'react-icons/md';
import { FaThumbsUp } from 'react-icons/fa';
import { BiHelpCircle, BiFlag } from 'react-icons/bi';
import { RiFeedbackLine } from 'react-icons/ri';
import AppLogo from './asset/YouTube-Logo.png';

function SideMenu() {
    const [showSideMenu, setShowSideMenu] = useState(true);

    const toggleMenu = () => {
        setShowSideMenu((prevState) => !prevState);
    };

    return (
        <div className={`h-screen shadow-md ${showSideMenu ? 'w-50' : 'w-20'} transition-all duration-300 overflow-y-auto`}>
            <div className="flex items-center justify-between p-4">
                <IoIosMenu size={30} onClick={toggleMenu} className="cursor-pointer" />
                {showSideMenu &&
                    <img src={AppLogo} alt="Logo" width={100} height={80} />
                }
            </div>
            {showSideMenu && (
                <div className="mt-4">
                    {/* Main Section */}
                    <div className="space-y-2 pl-3">
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <AiFillHome className="text-xl" />
                            <span >Home</span>
                        </div>
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <AiOutlineVideoCamera className="text-xl" />
                            <span >Shorts</span>
                        </div>
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <MdOutlineSubscriptions className="text-xl" />
                            <span >Subscriptions</span>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* "You" Section */}
                    <div className="space-y-2 pl-3">
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <MdHistory className="text-xl" />
                            <span >History</span>
                        </div>
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <MdPlaylistPlay className="text-xl" />
                            <span >Playlists</span>
                        </div>
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <MdWatchLater className="text-xl" />
                            <span >Watch later</span>
                        </div>
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <FaThumbsUp className="text-xl" />
                            <span >Liked videos</span>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Settings Section */}
                    <div className="space-y-2 pl-3">
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <MdSettings className="text-xl" />
                            <span >Settings</span>
                        </div>
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <BiFlag className="text-xl" />
                            <span >Report history</span>
                        </div>
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <BiHelpCircle className="text-xl" />
                            <span >Help</span>
                        </div>
                        <div className="flex items-center space-x-4 p-2 cursor-pointer">
                            <RiFeedbackLine className="text-xl" />
                            <span >Send feedback</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SideMenu;