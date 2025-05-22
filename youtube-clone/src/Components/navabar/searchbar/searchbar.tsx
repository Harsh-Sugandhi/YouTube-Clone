import { CiSearch } from "react-icons/ci";

function SearchBar() {
    return (
        <div className="flex items-center rounded-full px-4 py-2 my-2">
            <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent border-none outline-none text-base px-2"
            />
            <button className="bg-transparent border-none cursor-pointer flex items-center justify-center px-2">
                <CiSearch />
            </button>
        </div>
    );
}

export default SearchBar;