import './searchbar.css';

function SearchBar() {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                className="search-input"
            />
            <button className="search-button">
                <i className="search-icon">🔍</i>
            </button>
        </div>
    );
}

export default SearchBar;