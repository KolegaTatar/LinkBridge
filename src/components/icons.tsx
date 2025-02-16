//import "../styles/icons.scss";

interface IconProps {
    icon: string;
    link: string
}

const Icon = ({ icon, link }: IconProps) => {
    return (
        <a href={link} className="icon" target="_blank" rel="noopener noreferrer">
            <span className="icon"><i className={icon}></i></span>
        </a>
    );
};

export default Icon;
