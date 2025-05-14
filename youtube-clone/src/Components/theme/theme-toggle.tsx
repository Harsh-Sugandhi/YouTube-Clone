import { useTheme } from '../../context/ThemeContext';
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="absolute top-2.5 right-36 p-2 rounded-full cursor-pointer transition-transform duration-300 ease-in-out">
            {
                theme === 'light' ?
                    <BsFillCloudSunFill size={30} /> :
                    <BsFillCloudMoonFill size={30} />
            }
        </button>
    );
}

export default ThemeToggle;