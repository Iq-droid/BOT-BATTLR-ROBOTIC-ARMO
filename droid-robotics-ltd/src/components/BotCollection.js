import React, { useEffect, useState } from "react";
import Bot from "./Bot";

export default function BotCollection(){
    const [bots,SetBots] = useState()

    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        .then((response) => response.json())
        .then((data) => SetBots(data))
        .catch((error) => console.log(error));
    },[])
    return (
        <div className="bot-collection">
            {
                bots && bots.map(bot=>{
                    return(
            <div className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p>{bot.catchphrase}</p>
            <button>Enlist</button>
            </div>
                    )
                })
            }
        </div>
    )
}