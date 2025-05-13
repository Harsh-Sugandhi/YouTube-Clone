import AppLogo from './asset/react.svg';
import './asset/css/Logo.css';

function Logo() {
    return (
        <div className='Logo'>
            <img src={AppLogo} alt='Logo' />
        </div>
    )
}
export default Logo