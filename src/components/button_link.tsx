import "../styles/button.scss";

interface ButtonProps {
    text: string;
    icon: string;
    link: string;
}

const Button = ({ text, icon, link }: ButtonProps) => {
    return (
        <a href={link} className="button" target="_blank" rel="noopener noreferrer">
            <span className="icon">{icon}</span>
            {text}
        </a>
    );
};

export default Button;
