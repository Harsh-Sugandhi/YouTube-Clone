import { useState } from 'react';
import './sidebar.css';
import { IoIosMenu } from 'react-icons/io';
import { AiFillHome, AiOutlineVideoCamera } from 'react-icons/ai';
import { MdOutlineSubscriptions, MdHistory, MdPlaylistPlay, MdWatchLater, MdSettings } from 'react-icons/md';
import { FaThumbsUp } from 'react-icons/fa';
import { BiHelpCircle, BiFlag } from 'react-icons/bi';
import { RiFeedbackLine } from 'react-icons/ri';
import AppLogo from './asset/react.svg';

function SideMenu() {
    const [showSideMenu, setShowSideMenu] = useState(true);

    const toggleMenu = () => {
        setShowSideMenu((prevState) => !prevState);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <IoIosMenu size={30} onClick={toggleMenu} className="menu-toggle-icon" />
                <img src={AppLogo} alt='Logo' className="logo" />
            </div>
            {showSideMenu && (
                <div className="sidemenu">
                    {/* Main Section */}
                    <div className="menu-section">
                        <div className="menu-item">
                            <AiFillHome className="menu-icon" />
                            <span>Home</span>
                        </div>
                        <div className="menu-item">
                            <AiOutlineVideoCamera className="menu-icon" />
                            <span>Shorts</span>
                        </div>
                        <div className="menu-item">
                            <MdOutlineSubscriptions className="menu-icon" />
                            <span>Subscriptions</span>
                        </div>
                    </div>

                    <hr />

                    {/* "You" Section */}
                    <div className="menu-section">
                        <div className="menu-item">
                            <MdHistory className="menu-icon" />
                            <span>History</span>
                        </div>
                        <div className="menu-item">
                            <MdPlaylistPlay className="menu-icon" />
                            <span>Playlists</span>
                        </div>
                        <div className="menu-item">
                            <MdWatchLater className="menu-icon" />
                            <span>Watch later</span>
                        </div>
                        <div className="menu-item">
                            <FaThumbsUp className="menu-icon" />
                            <span>Liked videos</span>
                        </div>
                    </div>

                    <hr />

                    {/* "You" Section */}
                    <div className="menu-section">
                        <div className="menu-item">
                            <MdHistory className="menu-icon" />
                            <span>History</span>
                        </div>
                        <div className="menu-item">
                            <MdPlaylistPlay className="menu-icon" />
                            <span>Playlists</span>
                        </div>
                        <div className="menu-item">
                            <MdWatchLater className="menu-icon" />
                            <span>Watch later</span>
                        </div>
                        <div className="menu-item">
                            <FaThumbsUp className="menu-icon" />
                            <span>Liked videos</span>
                        </div>
                    </div>

                    <hr />
                    {/* Settings Section */}
                    <div className="menu-section">
                        <div className="menu-item">
                            <MdSettings className="menu-icon" />
                            <span>Settings</span>
                        </div>
                        <div className="menu-item">
                            <BiFlag className="menu-icon" />
                            <span>Report history</span>
                        </div>
                        <div className="menu-item">
                            <BiHelpCircle className="menu-icon" />
                            <span>Help</span>
                        </div>
                        <div className="menu-item">
                            <RiFeedbackLine className="menu-icon" />
                            <span>Send feedback</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SideMenu;