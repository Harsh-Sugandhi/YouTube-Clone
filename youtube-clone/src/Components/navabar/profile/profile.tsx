import { useState } from 'react';
import './assets/css/Profile.css';
import photo from './assets/react.svg';

function Profile() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const showMenu = () => {
        setShowProfileMenu((prevState) => !prevState)
    }

    return (
        <>
            <div className="profile">
                <div className='photo'>
                    <img
                        src={photo}
                        alt='Profile Photo'
                        onClick={showMenu} />
                </div>
            </div>
            {showProfileMenu && (
                <div className="profile-menu">
                    <div className="menu">
                        <div className="profile-details">
                            <img src={photo} alt="Profile Photo" className="profile-photo" />
                            <div className="profile-info">
                                <span className="profile-name">Master Ping</span>
                                <span className="profile-username">@MasterPing07</span>
                            </div>
                        </div>
                        <hr />
                        <div className="menu-item">Appearance: Device theme</div>
                        <hr />
                        <div className="menu-item">Sign out</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile