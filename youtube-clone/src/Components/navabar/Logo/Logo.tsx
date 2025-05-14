import AppLogo from './asset/YouTube-Logo.png';


function Logo() {
    return (
        <div className="absolute top-2.5 left-24">
            <img src={AppLogo} alt="Logo" />
        </div>
    );
}
export default Logo