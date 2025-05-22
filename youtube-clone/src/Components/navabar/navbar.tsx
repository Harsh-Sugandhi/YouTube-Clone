import SearchBar from "./searchbar/searchbar";
import Profile from "./profile/profile";


function Navbar({ isSideMenuOpen }:
    { isSideMenuOpen: boolean }) {

    return (
        <div className={`${isSideMenuOpen ? ' bg-amber-200' : 'bg-pink-400'}`}>

            <div className="grid w-full auto-rows-auto justify-items-center relative p-2.5">
                <div className="w-full flex items-center justify-center">
                    <SearchBar />
                    <Profile />
                </div>
            </div>

        </div>
    )
}

export default Navbar