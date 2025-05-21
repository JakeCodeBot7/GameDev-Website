import "./Home.css";
import { FaGithub, FaYoutube, FaGoogleDrive } from "react-icons/fa";

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to my Page!</h1>

            <div className="about-box">
                <h2 className="home-subtitle">About me</h2>

                <p className="home-aboutme">
                    Hi! My name is Jake Carabott. I am a Software student living in Malta. I'm passionate about game development and absolutely fascinated by space and astronomy.
                    This website is a place where I share my work, showcase my projects, and keep track of what I'm building.
                    Feel free to explore and make sure to check out the links below where you'll find my projects, portfolio and my devlog channel!
                </p>

                <div className="icon-links">
                    <a href="https://github.com/JakeCodeBot7" target="_blank" rel="noreferrer">
                        <FaGithub size={40} color="#F5F5F5" />
                    </a>
                    <a href="https://www.youtube.com/@SerenitatisGames" target="_blank" rel="noreferrer">
                        <FaYoutube size={40} color="#F5F5F5" />
                    </a>
                    <a href="https://drive.google.com/file/d/1M6_S65KwkFSsBxfa2lw8BmeGWIiKl_5I/view?usp=sharing" target="_blank" rel="noreferrer">
                        <FaGoogleDrive size={40} color="#F5F5F5" />
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Home;
