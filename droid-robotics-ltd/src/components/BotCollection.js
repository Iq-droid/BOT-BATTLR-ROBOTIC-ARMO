import React, { useEffect, useState } from "react";
import Bot from "./Bot";


function handleDeleteClick() {
    fetch(`http://localhost:3000/bots/${Bot.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }
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
            <button>Release</button>
            <button>Delete</button>
            </div>
                    )
                })
            }
        </div>
    )
}