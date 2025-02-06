import Button from "../components/button_link";
import "../styles/Main.scss";

const Main = () => {
    return (
        <main className="main">
            <Button text="Portfolio" icon="🌍" link="https://kolegatatar.github.io/Portfolio/" />
            <Button text="GitHub" icon="🐙" link="https://github.com/KolegaTatar" />
            <Button text="LinkedIn" icon="🔗" link="https://www.linkedin.com/in/wiktor-tatarynowicz/" />
            <Button text="E-Mail" icon="📧" link="mailto:test@example.com" />
        </main>
    );
};

export default Main;
