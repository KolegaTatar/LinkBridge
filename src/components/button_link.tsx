import "../styles/button.scss";

interface ButtonProps {
    text: string;
    icon: string;
    link: string
    icon_fake: string;
}

const Button = ({ text, icon, link, icon_fake }: ButtonProps) => {
    return (
        <a href={link} className="button" target="_blank" rel="noopener noreferrer">
            <span className="icon"><i className={icon}></i></span>
            {text}
            <span className="icon"><i className={icon_fake}></i></span>
        </a>
    );
};

export default Button;
