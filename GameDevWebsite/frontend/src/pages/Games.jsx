import stars from "../assets/stardust.png";
import "./Games.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Games() {

    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/games")
            .then((res) => res.json())
            .then((data) => setGames(data))
            .catch((err) => console.error("Failed to fetch games:", err));
    })
    return (
        <div style={{
            backgroundColor: "black",
            backgroundImage: `url(${stars})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
            animation: "scrollBackground 60s linear infinite",
            backgroundAttachment: "fixed",
            minHeight: "calc(100vh - 60px)",       
            width: "100%",
        }}>

            <div className="games-wrapper">
                <h1 className="Games-Title">MY GAMES</h1>

                <div className="games-list">
                    {games.map((game) => (
                        <div key={game.id} className="game-card">
                            <img
                                src={game.cover_image}
                                alt={game.name}
                                className="game-img"
                            />
                            <h2>{game.name}</h2>
                            <Link to={`/games/${game.id}`} className="details-btn">
                                View Details
                            </Link>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Games;
