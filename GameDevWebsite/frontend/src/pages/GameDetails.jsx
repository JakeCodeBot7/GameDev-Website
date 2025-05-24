import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Games.css";

function GameDetails() {
    const { id } = useParams();                
    const [game, setGame] = useState(null);     

    useEffect(() => {
        fetch(`http://localhost:3000/api/games/${id}`) 
            .then((res) => {
                if (!res.ok) throw new Error("Game not found");
                return res.json();
            })
            .then((data) => setGame(data))         
            .catch((err) => {
                console.error(err);
                setGame(null);
            });
    }, [id]);                                 

    if (!game) {
        return <p style={{ color: "white" }}>Loading...</p>;  
    }


    return (
        <div className="games-wrapper" style={{ textAlign: "center", padding: "2rem" }}>
            <Link to="/games" style={{ color: "#aaa", marginBottom: "1rem", display: "inline-block" }}>
                ← Back to Games
            </Link>

            <img
                src={game.cover_image}
                alt={game.name}
                className="game-img"
                style={{ maxWidth: "400px", borderRadius: "8px" }}
            />
            <h1>{game.name}</h1>
            <p style={{ maxWidth: "600px", margin: "1rem auto", color: "#ccc" }}>{game.description}</p>

            <a
                href={game.download_url}
                className="details-btn"
                target="_blank"
                rel="noreferrer"
            >
                Download
            </a>
        </div>
    );
}

export default GameDetails;
