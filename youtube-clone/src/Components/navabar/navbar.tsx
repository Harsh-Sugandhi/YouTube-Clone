import SearchBar from "./searchbar/searchbar";
import Profile from "./profile/profile";
// import ThemeToggle from '../theme/theme-toggle';

function Navbar() {
    return (
        <div className="grid w-full auto-rows-auto justify-items-center relative p-2.5">
            <div className="w-full flex items-center justify-center">
                <SearchBar />
                <Profile />
                {/* <ThemeToggle /> */}
            </div>
        </div>
    )
}

export default Navbar