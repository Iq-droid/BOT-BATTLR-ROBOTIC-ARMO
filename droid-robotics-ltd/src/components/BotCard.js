import React from "react";
import "./Bot.css";


const BotCard = props => {
  const { bot, action, removeCard } = props

  function handleClick(e) {
    console.log("handleClick fired!")
    action(bot)
  }

  function handleDelete(e) {
    console.log("Red X Clicked!")
    e.stopPropagation()
    removeCard(bot)
  }


  return (
    <div>
        <card id="range">
            <div className= "grid"
            key={props.bot.id} onClick={handleClick}>
            <div className='card'>
            ID: {props.bot.id}<br></br>
          <img src={props.bot.avatar_url} alt="bot"/>
       
             
            <h3> Name: {props.bot.name}</h3>
            CP: {props.bot.catchphrase}<br></br>
            Health: {props.bot.health}{"   "}         
            Damage: {props.bot.damage}{"   "}    
            Armor: {props.bot.armor}<br></br>
            <button className="delete" onClick={handleDelete}>X</button>
            
            </div>
        </div>
     
       
   
    </card >
</div>
  )
}

export default BotCard;