import '../styles/Header.scss';
import profileImage from '../images/profile.png'

const Header = () => {
    console.log('Header component rendered');
    return (
        <header className="header">
            <div className="profile-container">
                <img src={profileImage} alt="Profile" className="profile-image"/>
            </div>
            <h1 className="name">Wiktor Tatarynowicz</h1>
            <h3 className="title">Junior Full-stack Developer/ Software</h3>
            <h3 className="title">Tester - Student</h3>
        </header>
    );
};

export default Header;