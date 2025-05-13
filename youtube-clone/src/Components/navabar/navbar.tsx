import Logo from './Logo/Logo';
import SearchBar from "./searchbar/searchbar";
import Profile from "./profile/profile";
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-contents">
                {/* <Logo /> */}
                <SearchBar />
                <Profile />
            </div>
        </div>
    )
}

export default Navbar