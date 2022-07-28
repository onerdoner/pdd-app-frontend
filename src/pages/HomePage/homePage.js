import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/cards")}>Learning Cards</button>
            <br />
            <button onClick={() => navigate("/quiz")}>Quiz</button>
        </div>
    )
}

export default Home;