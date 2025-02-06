import Button from "../components/button_link";
import "../styles/Main.scss";

const Main = () => {
    return (
        <main className="main">
            <Button text="Portfolio" icon="🌍" link="#" />
            <Button text="GitHub" icon="🐙" link="#" />
            <Button text="LinkedIn" icon="🔗" link="#" />
            <Button text="E-Mail" icon="📧" link="mailto:test@example.com" />
        </main>
    );
};

export default Main;
