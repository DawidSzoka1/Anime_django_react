import React from "react";
const animeData = await fetch("https://api.jikan.moe/v4/anime")
    .then((resp) => resp.json())
    .then((resp)=> resp.data)
    .catch((err)=> err)
const Home = () => {

    return (
        <div>
            {animeData[0].url}
        </div>
    )
}

export default Home;
