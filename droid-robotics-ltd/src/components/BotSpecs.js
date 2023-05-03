import React from "react";
import "./Bot.css";


function BotSpecs(props) {
  return (
   
      <div className="card">
         <div className="four wide column">
            <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
         <h2>Name: {props.bot.name}</h2>
            <p><strong>Catchphrase: </strong>{props.bot.catchphrase}</p>
            <strong>Class: {props.bot.bot_class}</strong>
            <br />
           
           <div className="row">
                <strong>Health: {props.bot.health}</strong>
                <strong>Damage: {props.bot.damage}</strong>
                <strong>Armor: {props.bot.armor}</strong>
            </div>
              
            <button className="goback" onClick={()=>props.back()}>Go Back</button>
            <button className="enlist"onClick={() =>props.enlist(props.bot)}>Enlist</button>
    
      </div>
   
  )
}

export default BotSpecs