import Button from "../components/button_link";
import "../styles/Main.scss";

const Main = () => {
    return (
        <main className="main">
            <Button text="Portfolio" icon="fa-solid fa-globe" link="https://kolegatatar.github.io/Portfolio/"
                    icon_fake="fa-solid fa-globe whiteFa"/>
            <Button text="GitHub" icon="fa-brands fa-github" link="https://github.com/KolegaTatar"
                    icon_fake="fa-brands fa-github whiteFa"/>
            <Button text="LinkedIn" icon="fa-brands fa-linkedin" link="https://www.linkedin.com/in/wiktor-tatarynowicz/"
                    icon_fake="fa-brands fa-linkedin whiteFa"/>
            <Button text="E-Mail" icon="fa-solid fa-envelope" link="mailto:test@example.com"
                    icon_fake="fa-solid fa-envelope whiteFa"/>
        </main>
    );
};

export default Main;
